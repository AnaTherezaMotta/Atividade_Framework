const postRouter = require('../controllers/posts/posts.router')
const usuarioRouter = require('../controllers/usuarios/usuarios.router');
 
module.exports = (server) => {
    server.use('/posts', postRouter);
    server.use('/auth', usuarioRouter);
}