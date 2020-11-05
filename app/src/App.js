import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';

import { isLogged } from './services/auth-service';

import LoginPag     from './containers/LoginPag';




const PrivateRoute = (props) => {
    return isLogged() ? <Route {...props} /> : <Redirect to="/login" />
}

const App = () =>{
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={5}>
                    <div className="app-container">
                        <Router>
                            <Switch>
                                
                                <Route path="/login" component={ LoginPag } />
                                
                                <Route path="*">
                                    Página não encontrada :'(
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </Col>
            </Row>
        </Container>)
}

export default App;