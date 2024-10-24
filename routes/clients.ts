import express, { Router } from "express"
import { getAll, create, getById, update, getByDocument } from "../controllers/clients";
import { validateUser } from "../middleware/auth";
import { validateRequest } from "../middleware/validteRequest";
import { ClientsCreationSchema, ClientsEditionSchema } from "../schema/clients";


const router = express.Router();

router.use(validateUser())// queremos que el usuaro se autenticado antes de poder crear un cliente

router.get("/", getAll);//llamar a todos los clientes
router.get("/:id", getById)
router.get("/document/:document", getByDocument)
router.post("/", validateRequest(ClientsCreationSchema), create);//válidamos con zod la entrada de datos
router.put("/:id", validateRequest(ClientsEditionSchema), update)//válidamos datos

export default router;