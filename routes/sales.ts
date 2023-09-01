import express from "express"
import { getAll, create } from "../controllers/ventas";
import { validateUser } from "../middleware/auth";
import { validateRequest } from "../middleware/validteRequest";
import { SaleCreationSchema } from "../schema/sale";

const router = express.Router();

//antes de entrar a la ruta hace una validacion con el token del usuario
// y luego pasa a la ruta mostrar todas las ventas
router.use(validateUser())

router.get("/", getAll);
router.post("/", validateRequest(SaleCreationSchema), create)
 

export default router;