const service = require("../../services/usuario.service");

const criarUsuario  = (req, res) => {
    const usuario = req.body;
    service.criarUsuario(usuario)
        .then((token) => {
            res.status(201).send(token);
        }).catch(err => {
            res.status(err.status).send(err);
        });
}

const login = (req, res) => {
    const {email, senha} = req.body;
    service.login(email, senha)
        .then((token) => {
            res.send(token);
        }).catch(err => {
            res.status(err.status).send(err);
        });
}

const me = (req, res) => {
    res.send(req.usuario);
}

module.exports = {
    criarUsuario,
    login,
    me
}