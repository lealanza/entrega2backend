"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const titular_1 = require("../controllers/titular");
const routerTitular = (0, express_1.Router)();
routerTitular.get("/", titular_1.getTitulares);
routerTitular.get("/:dni", titular_1.getTitularByDni);
routerTitular.get("/:_id", titular_1.getTitularById);
routerTitular.post("/", titular_1.createTitular);
routerTitular.delete("/:dni", titular_1.getTitularByDni);
exports.default = routerTitular;
