import mongoose from "mongoose";
//importamos el modelo user
import UserModel from "../models/user"
import ventaModel from "../models/ventas";

async function connectDB(){
    if(!process.env.MONGODB_URL){
       throw new Error("Falta la variable de entorno")
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Conexión exitosa, genial !!!")
      //  await  ventaModel.create({ operation_date: new Date(), user: "64af8d520df78ff86e7f7c79", total_amount: 5000 })
        // //creamos un nuevo usuario con create o un new 
        // const newUser = new UserModel({
        //     firstname:"Nelson",
        //     lastname:"Fercher",
        //     email:"nelsonfercher@gmail.com",
        //     login_code:"454212",
        //     roles:{
        //         admin: true,
        //         seller: true,
        //     }
        // })
        // console.log({newUser})
        // await newUser.save()
    } catch (error) {
        console.log("Hubo un error al conectar")
    }
}

export default connectDB;           