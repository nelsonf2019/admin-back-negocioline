import { Schema, model } from "mongoose"

//exportamos el esquema porque lo vamos a necesitar en el de ventas
export const productSchema = new Schema({
    //algunas validaciones en el models antes de guardar los datos en mongoose
    name: {type: String, required: true},
    code:{type: String, requred: true}, 
    supplier_cost: { type: Number, required: true },//proveedor
    iva: { type: Number, default: 0.12, required: true },//valores por defectos
    micro:{ type: Number, default: 5.55, required: true},//valores por defectos
    salvament_cost:{ type: Number, default: 0.25, required: true},//valores por defectosmargen de venta
    profit_margin:{ type: Number, default: 0.15, required: true},//valores por defectos
    
})

//hacemos la conexion con el modelo user 
const ProductModel =  model("Product", productSchema, "products")
export default ProductModel;