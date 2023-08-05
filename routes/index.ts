import express from "express"
import authRoutes from "./auth"
import ventasRoutes from "./sales"
import clientsRoutes from "./clients"
import productsRoute from "./products"
const router = express.Router()

router.use("/auth", authRoutes)
router.use("/ventas", ventasRoutes)
router.use("/products", productsRoute)
router.use("/clients", clientsRoutes)
export default router;