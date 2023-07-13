import {Schema, Model, model} from 'mongoose';

export interface ITitular {
    name:string, 
    lastName:string,
    dni:number,
    email:string,
}

const userSchema = new Schema<ITitular>({
    
    name: {type:String, required:true},
    lastName: {type:String, required:true},
    dni: {type:Number, required:true, unique:true},
    email: {type:String, required:true, unique:true},
})

const Titular: Model<ITitular> = model('Titular', userSchema);

export default Titular;