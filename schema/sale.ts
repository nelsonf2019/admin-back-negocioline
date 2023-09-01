import { isValidObjectId } from "mongoose";
import { z } from "zod";
import { ClientSchema } from "./clients";
import validateObjectId from "../helpers/validateObject";

const PAYMENT_METHOD_TYPES = [
    "efectivo",
    "tarjeta de credito",
    "tarjeta de debito",
    "cuenta corriente",
    "transferencia"

] as const

const TIME_UNITS = z.enum(["Días","Meses","Año"])

//esquema para el array productos
const saleProductSchema = z.object({
    code: z.string(),
    name: z.string().optional(),
    qty: z.number(),
    unit_price: z.number(),
    discount: z.number().optional(),
})
//esquema para el metodo de pago
const salePaymentMethodSchema = z.object({
    method: z.enum(PAYMENT_METHOD_TYPES),// ya el arreglo esta definido arriba por lo tanto se pone enum
    amount: z.number(),
    time_unit: TIME_UNITS,
    time_value: z.number()
})


export const salesSchema = z.object({
    operation_date: z.string(),
    total_amount: z.number(),
    products: z.array(saleProductSchema),
    payment_methods:z.array(salePaymentMethodSchema),
    client: z.custom(validateObjectId)
})

export const SaleCreationSchema = z.object({
    body: salesSchema
})

export type Sale = z.infer<typeof salesSchema>
    
