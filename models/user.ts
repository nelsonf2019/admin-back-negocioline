import { Schema, model } from "mongoose";

const userSchema = new Schema({
    //algunas validaciones en el models antes de guardar los datos en mongoose
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email:{ type: String, required: true, unique: true },
    login_code: { type: String, required: true, length: 6 },
    roles:{type:{
        admin: Boolean,
        seller: Boolean,
    }, required: true},
})

//hacemos la conexion con el modelo user 
export default model("User", userSchema, "users")