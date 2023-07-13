"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGastosByDni = exports.getGastosById = exports.deleteGastos = exports.getGastos = exports.createGastos = void 0;
const gastos_1 = __importDefault(require("../models/gastos"));
const titular_1 = __importDefault(require("../models/titular"));
const createGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastosData = req.body;
    const { fecha, nombre, monto, user: dni } = gastosData;
    if (!fecha || !nombre || !monto || !dni) {
        return res.status(400).json({ message: "Faltan datos" });
    }
    const titularData = yield titular_1.default.findOne({ dni });
    if (!titularData) {
        return res.status(400).json({ message: "El titular no existe" });
    }
    const gastos = new gastos_1.default({
        fecha,
        nombre,
        monto,
        user: titularData,
    });
    yield gastos.save();
    res.json({ message: "Gasto creado correctamente" });
});
exports.createGastos = createGastos;
const getGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastosData = yield gastos_1.default.find().populate("user");
    res.json(gastosData);
});
exports.getGastos = getGastos;
const deleteGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    yield gastos_1.default.findByIdAndDelete(_id);
    res.json({ message: "Gasto eliminado correctamente" });
});
exports.deleteGastos = deleteGastos;
const getGastosById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const gastosData = yield gastos_1.default.findById(_id).populate("user");
    res.json(gastosData);
});
exports.getGastosById = getGastosById;
const getGastosByDni = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params.userId;
    try {
        const gastos = yield gastos_1.default.find({ "user._id": _id });
        console.log(gastos);
        res.json(gastos);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener los gastos", error });
    }
});
exports.getGastosByDni = getGastosByDni;
