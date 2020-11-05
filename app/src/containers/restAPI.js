const { Router } = require('express');
const controller = require('../controllers/APIcontroller');
const controller2 = require('../services/login-service');

const router = Router();

router.get('/', (__, res) => {
    const routes = [
        {
            path: '/login',
            descrição: 'recebe usuario e senha e retorna',
            payload: { 
                email: 'string',
                senha: 'string'
            },
            status: 200,
            token: 'string',
        },
        {
            path: '/novoUsuario',
            descrição: 'recebe user modelo e cria um novo user',
            payload: { 
                nome: 'string',
                email: 'string',
                senha: 'string'
            },
            status: 201,
            token: 'string',
        },
        {
            path: '/me',
            descrição: 'valida usuário logado',
            headers: {
                Authorization: 'Bearer jwt-token',
            },
            status: 200,
            token: 'string',
        }
    ];
    response.json(routes)
})

router.post('/login', controller.login);
router.post('/novoUsuario', controller.novoUsuario);
router.get('/me', controller.me);

module.exports = router;
