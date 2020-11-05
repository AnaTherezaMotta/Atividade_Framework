const express = require("express");
const router = express.Router();
const controller = require("./usuarios.controller");
const authentication = require("../../helpers/middlewares/auth.middleware")

const PATH = '/';

module.exports = router
    .get(PATH + "me", authentication, controller.me)
    .post(PATH + "login", controller.login)
    .post(PATH + "signup", controller.criarUsuario);
