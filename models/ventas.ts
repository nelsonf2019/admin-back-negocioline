import { Schema, Types, model } from "mongoose";

const ventarSchema = new Schema({
    //algunas validaciones en el models antes de guardar los datos en mongoose
    operation_date: Date,
    total_amount: Number,
    user: {
        type: Types.ObjectId,
        ref: "User"
    },
})

//hacemos la conexion con el modelo user 
const ventaModel = model("Venta", ventarSchema, "ventas")
export default ventaModel;