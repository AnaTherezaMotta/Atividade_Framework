const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const server     = express();
const routers    = require("./config/routers")

// handlers 
server.use(cors());
server.use(bodyParser.json());

// routes
routers(server);

module.exports = server;