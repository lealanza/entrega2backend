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
exports.deteleTitularByDni = exports.getTitularById = exports.getTitularByDni = exports.getTitulares = exports.createTitular = void 0;
const titular_1 = __importDefault(require("../models/titular"));
const createTitular = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const titularData = new titular_1.default(req.body);
    const { name, lastName, dni, email } = titularData;
    if (!name || !lastName || !dni || !email) {
        return res.status(400).json({
            message: 'Faltan datos'
        });
    }
    const titularExist = yield titular_1.default.findOne({ dni });
    if (titularExist) {
        return res.status(400).json({
            message: 'El titular ya existe'
        });
    }
    const titular = new titular_1.default(titularData);
    yield titular.save();
    res.json({
        message: 'Titular creado',
        titular
    });
});
exports.createTitular = createTitular;
const getTitulares = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const titular = yield titular_1.default.find();
    if (!titular) {
        return res.status(400).json({
            message: 'No hay titulares'
        });
    }
    res.json({
        titular
    });
});
exports.getTitulares = getTitulares;
const getTitularByDni = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const titular = yield titular_1.default.findOne({ dni });
    if (!titular) {
        return res.status(400).json({
            message: 'El titular no existe'
        });
    }
    res.json({
        titular
    });
});
exports.getTitularByDni = getTitularByDni;
const getTitularById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const titular = yield titular_1.default.findOne({ _id: _id });
    res.json({
        titular
    });
});
exports.getTitularById = getTitularById;
const deteleTitularByDni = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const titular = yield titular_1.default.findOneAndDelete({ dni: dni });
    if (!titular) {
        return res.status(400).json({
            message: 'El titular no existe'
        });
    }
    res.json({
        message: 'Titular eliminado'
    });
});
exports.deteleTitularByDni = deteleTitularByDni;
