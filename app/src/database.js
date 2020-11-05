const {Sequelize } =  require("sequelize");

const connection = new Sequelize({
dialect: "sqlize",
    storage: "./db.sqlite",
get storage() {
    return this._storage;
},
set storage(value) {
    this._storage = value;
},

}),