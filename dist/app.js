"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./models/Server");
const NewServer = new Server_1.Server();
NewServer.listen(8080);
