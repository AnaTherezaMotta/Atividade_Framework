const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/Usuario.model');

const APIcontroller = {
    async login (request, response) {
        try {
            const { email, senha } = request.body;
            
            if (!email) {
                return response.status(400).json({ error: 'preencha o campo email'});
            }

            if (!senha) {
                return response.status(400).json({ error: 'preencha o campo senha'});
            }

            const usuario = await UsuarioModel.findOne({ where: { email }});

            if (!usuario) {
                return response.status(404).json({ error: 'esse usuario nao foi encontrado no sistema'});
            }

            if (usuario.senha !== senha) {
                return response.status(403).json({ error: 'essa senha está incorreta'});
            }

            const token = jwt.sign({ nome: usuario.nome, email }, process.env.JWTKEY);
            return response.json({ token });
        } catch (err) {
            return response.status(400);
        }
    },

    async novoUsuario (request, response) {
        try {
            const {
                nome,
                email,
                senha,
            } = request.body;
    
            if (!email) {
                return response.status(400).json({ error: 'preencha o campo email'});
            }
    
            if (!senha) {
                return response.status(400).json({ error: 'preencha o campo senha'});
            }
    
            if (!nome) {
                return response.status(400).json({ error: 'preencha o campo nome'});
            }

            const usuario = await UsuarioModel.findOne({ where: { email }});

            if (usuario) {
                return response.status(404).json({ error: 'esse usuario ja existe'});
            }

            await UsuarioModel.create({
                nome,
                email,
                senha,
            })
    
            const token = jwt.sign({ nome, email }, process.env.JWTKEY);
            return response.status(201).json({ token });
        } catch (err) {
            return res.status(400).send(err);
        }
    },



module.exports = APIcontroller;