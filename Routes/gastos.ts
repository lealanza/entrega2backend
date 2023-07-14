import { Router } from "express";
import { createGastos, getGastos, getGastosById, deleteGastos} from "../controllers/gastos";



const router= Router();

router.post('/', createGastos)
router.get('/', getGastos)
router.get('/:_id', getGastosById)
router.delete('/:_id', deleteGastos)



export default router;