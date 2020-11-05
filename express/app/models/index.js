const PostComentarioModel = require("./post-comentario.model");
const PostLikeModel = require("./post-like.model");
const PostModel = require("./post.model");
const UsuarioModel = require("./usuario.model");

PostModel.hasMany(PostLikeModel);
PostModel.hasMany(PostComentarioModel);

module.exports = {
    UsuarioModel,
    PostModel,
    PostComentarioModel,
    PostLikeModel
}