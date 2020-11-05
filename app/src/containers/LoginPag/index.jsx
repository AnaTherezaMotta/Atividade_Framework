import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
import { doLogin } from '../../services/loginService';

const INITIAL_STATE = {
    errors: [],
    isLoading: false
};

const LoginPag = () => {
    const history = useHistory();
    const [state, setState] = useState(INITIAL_STATE);
    const [form, setForm]   = useState({
        email: '',
        senha: ''
    });

    const login = (event) => {
        event.preventDefault();
        doLogin(form.email, form.senha)
            .then(() => {
                history.push("/home");
            }).catch(err => {
                setState({...state, errors: [err]});
            });
    }

    return (<div>
        { 
            state.errors.map((index, error) =>
                <Alert key={ index } variant={'error'}>
                    { error.mensagem }
                </Alert>
            )
        }
        <Form onSubmit={ login }>
            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <FormControl type="email" name="email" onChange={
                    ({target: { name, value }}) => setForm({...form, [name]: value }) } />
            </Form.Group>
            <Form.Group>
                <Form.Label>Senha</Form.Label>
                <FormControl type="password" name="senha" onChange={
                    ({target: { name, value }}) => setForm({...form, [name]: value }) } />
            </Form.Group>
            <Form.Group>
                <Button type="submit">Entrar</Button>
            </Form.Group>
        </Form>
    </div>)
}

export default LoginPag;