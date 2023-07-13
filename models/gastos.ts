import { Schema, Model, model, ObjectId } from "mongoose";

export interface IGastos{
    fecha: string;
    nombre:string;
    monto:number;
    user:ObjectId;
}

const gastosSchema = new Schema<IGastos>({
    fecha:{type:String, required:true},
    nombre:{type:String, required:true},
    monto:{type:Number, required:true},
    user:{type:Schema.Types.ObjectId, ref:"Titular", required:true},
})

const Gastos: Model<IGastos> = model('Gastos', gastosSchema);
export default Gastos;