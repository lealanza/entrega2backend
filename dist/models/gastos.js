"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gastosSchema = new mongoose_1.Schema({
    fecha: { type: String, required: true },
    nombre: { type: String, required: true },
    monto: { type: Number, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "Titular", required: true },
});
const Gastos = (0, mongoose_1.model)('Gastos', gastosSchema);
exports.default = Gastos;
