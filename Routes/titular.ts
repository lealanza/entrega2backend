import { Router } from "express";
import { createTitular, getTitulares, getTitularByDni, getTitularById } from "../controllers/titular";

const routerTitular = Router();

routerTitular.get("/", getTitulares);
routerTitular.get("/:dni", getTitularByDni);
routerTitular.get("/:_id", getTitularById);
routerTitular.post("/", createTitular);
routerTitular.delete("/:dni", getTitularByDni);

export default routerTitular;
