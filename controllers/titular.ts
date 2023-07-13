import { Request, Response } from 'express';

import Titular, { ITitular } from '../models/titular';

export const createTitular = async (req: Request, res: Response) => {
    const titularData: ITitular = new Titular(req.body);
    const {name, lastName, dni, email}= titularData;
    if(!name || !lastName || !dni || !email){
        return res.status(400).json({
            message: 'Faltan datos'
        });
    }

    const titularExist = await Titular.findOne({dni});
    if(titularExist){
        return res.status(400).json({
            message: 'El titular ya existe'
        });
    }
    const titular = new Titular(titularData)
    await titular.save();
    res.json({
        message: 'Titular creado',
        titular
    });
    

}


export const getTitulares = async (req: Request, res: Response) => {
    const titular = await Titular.find();
    if(!titular){
        return res.status(400).json({
            message: 'No hay titulares'
        });
    }
    
    res.json({
        titular
    });

}

export const getTitularByDni = async (req: Request, res: Response) => {
    const {dni} = req.params;
    const titular = await Titular.findOne({dni});
    if(!titular){
        return res.status(400).json({
            message: 'El titular no existe'
        });
    }
    res.json({
        titular
    });

}

export const getTitularById = async (req: Request, res: Response) => {
    const { _id } = req.params;
    const titular:ITitular |null= await Titular.findOne({_id:_id})
    res.json({
        titular
    });
    

}

export const deteleTitularByDni = async (req: Request, res: Response) => {
    const {dni} = req.params;
    const titular = await Titular.findOneAndDelete({dni:dni})
    if(!titular){
        return res.status(400).json({
            message: 'El titular no existe'
        });
    }
    res.json({
        message: 'Titular eliminado'
    });

}
