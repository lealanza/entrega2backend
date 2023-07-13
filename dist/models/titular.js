"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    dni: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
});
const Titular = (0, mongoose_1.model)('Titular', userSchema);
exports.default = Titular;
