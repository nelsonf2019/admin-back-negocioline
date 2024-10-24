import { Schema, Types, model } from "mongoose";


export const paymentMethodSchema = new Schema({
    //algunas validaciones en el models antes de guardar los datos en mongoose
    method: {type: String},
    amount:{type: Number, requred: true}, 
    time_value:{type: Number, required: true},
    time_unit: { type: String, required: true },//
})


const ventarSchema = new Schema({
    //algunas validaciones en el models antes de guardar los datos en mongoose
    operation_date: Date,
    total_amount: Number,
    products: [
        { 
        code: String, 
        Name: String, 
        qty: Number, 
        unit_price: Number, 
        discount: {type: Number, default: 0} 
    }],
    payment_methods:[paymentMethodSchema],
    user: {
        type: Types.ObjectId,
        ref: "User"
    },
    client: {  type: Types.ObjectId,
        ref: "Client"}
})

//hacemos la conexion con el modelo user 
const ventaModel = model("Sale", ventarSchema, "sales")
export default ventaModel;  