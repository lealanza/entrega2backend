"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastos_1 = require("../controllers/gastos");
const router = (0, express_1.Router)();
router.post('/', gastos_1.createGastos);
router.get('/', gastos_1.getGastos);
router.get('/:_id', gastos_1.getGastosById);
router.get('/:_id', gastos_1.getGastosByDni);
router.delete('/:_id', gastos_1.deleteGastos);
exports.default = router;
