const { UsuarioModel } = require("../models/");
const errorHandler = require("../helpers/error-handler");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "MINHA-CHAVE-SECRETA";

const gerarTokenCriptografado = (dado) => {
    delete dado.senha;
    const token = jwt.sign(dado, SECRET_KEY);
    return { token: Buffer.from(token).toString("base64") }
}

const descriptografarToken = (token) => {
    return Buffer.from(token, 'base64').toString("utf-8");
}

const criarUsuario = async (usuario) => {
    try {
        const usuarioCriado = await UsuarioModel.create(usuario);
        return gerarTokenCriptografado(usuarioCriado.toJSON());
    } catch(err) {
        throw errorHandler("Não possível criar usuário", 400, err.errors);
    }
}

const login = async (email, senha) => {
    const usuario = await UsuarioModel.findOne({ where: {email, senha}});

    if(usuario) {
        return gerarTokenCriptografado(usuario.toJSON()); 
    } 
    throw errorHandler("E-mail ou senha invalidos", 401);
}

const me = async (token) =>  {
    try {
        const tokenDescriptografado = descriptografarToken(token);
        return jwt.verify(tokenDescriptografado, SECRET_KEY);
    } catch (err) {
        throw errorHandler("Token invalido", 401);
    }
} 

module.exports = {
    criarUsuario,
    login,
    me
}