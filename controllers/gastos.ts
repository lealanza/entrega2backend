import { Request, Response } from "express";
import Gastos, {IGastos} from "../models/gastos";
import Titular, {ITitular} from "../models/titular";

export const createGastos = async (req: Request, res: Response) => {
    const gastosData: IGastos = req.body;
    const {fecha, nombre, monto, user: dni} = gastosData;
    if(!fecha || !nombre || !monto || !dni){return res.status(400).json({message: "Faltan datos"})}
    const titularData = await Titular.findOne({ dni });
    if (!titularData) {return res.status(400).json({ message: "El titular no existe" });}
  const gastos = new Gastos({
    fecha,
    nombre,
    monto,
    user: titularData,
  });
  await gastos.save();
  res.json({ message: "Gasto creado correctamente" });
}
export const getGastos = async (req: Request, res: Response) => {
    const gastosData:IGastos[]= await Gastos.find().populate("user");
    res.json(gastosData);
}
export const deleteGastos = async (req: Request, res: Response) => {
    const {_id} = req.params;
    await Gastos.findByIdAndDelete(_id);
    res.json({ message: "Gasto eliminado correctamente" });
}
export const getGastosById = async (req: Request, res: Response) => {
    const {_id} = req.params;
    const gastosData:IGastos|null = await Gastos.findById(_id).populate("user");
    res.json(gastosData);
}

export const getGastosByDni = async (req: Request, res: Response) => {
  const _id = req.params.userId;
  try {
    const gastos = await Gastos.find({ "user._id": _id });
    console.log(gastos)
    res.json(gastos); 
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los gastos", error });
  }
};
