import express, { Router } from "express"
import { getAll, create, getById, update } from "../controllers/clients";
import { validateUser } from "../middleware/auth";


const router = express.Router();
router.use(validateUser())// queremos que el usuaro se autenticado antes de poder crear un cliente

router.get("/", getAll);//llamar a todos los clientes
router.get("/:id", getById)
router.post("/", create);//crear un nuevo cliente
router.put("/:id", update)

export default router;