import express from "express"
import { getByCode } from "../controllers/products";
import { validateUser } from "../middleware/auth";


const router = express.Router();
router.use(validateUser())// queremos que el usuaro se autenticado antes de poder crear un cliente

router.get("/:code", getByCode);//llamar a todos los clientes

export default router;