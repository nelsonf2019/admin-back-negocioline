import { Schema, model } from "mongoose";

const clientSchema = new Schema({
    //algunas validaciones en el models antes de guardar los datos en mongoose
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email:{ type: String, required: true, unique: true },
    document_type:{ type: String, required: true },
    document_value:{ type: String, required: true },
    sale: {
        count: Number,
        amount: Number,
    },
})

//hacemos la conexion con el modelo user 
const clientModel = model("Client", clientSchema, "clients")

export default clientModel;