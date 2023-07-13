import { Router } from "express";
import { createGastos, getGastos, getGastosById, deleteGastos, getGastosByDni} from "../controllers/gastos";



const router= Router();

router.post('/', createGastos)
router.get('/', getGastos)
router.get('/:_id', getGastosById)
router.get('/:_id', getGastosByDni)
router.delete('/:_id', deleteGastos)



export default router;