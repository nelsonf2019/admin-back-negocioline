import { Response } from "express"
import { Request } from "express"
import sendEmail from "../helpers/mailer"
import UserModel from "../models/user"
import jwt  from "jsonwebtoken"

//EN ESTGE MODULO, GENERAMOS UN CODIGO, PERO ANTES VERIFICAMOS SI EXISTE EL USUARIO
//LUEGO DE ESO PRESIONAMOS EN EL BOTON QUIERO UN CODIGO
//ESE CODIGO SE ENVIA AL CORREO EMAIL DEL USUARIO
//LUEGO EL USUARIO PUEDE INGRESAR CON ESE CODIGO
//PERO ANTES EL CODIGO SE GUARDA EN LA BASE DE DATOS
//PARA LUEGO SER CONTROLADO EN EL BACK SI EXISTE EL CÓDIGO Y COINSIDE CON EL DEL EMAIL el usuario puede iniciar sesion

export const login = async (req: Request, res: Response)=>{
    const { email } = req.params;
    const { code } = req.body;
   // res.status(200).send("Hola Login")
   //console.log({ email, code })
   // estes usar es una instancia de un objeto pero de mongoose y no de javascript
   // y para manipularlo hay que pasarlo a un objeto de javascript
   const user = await UserModel.findOne({ email, login_code: code }) //aqui comparamos que el codigo sea igual al codigo enviado por el front
   
   if(!user){
    return res.status(400).json({ok: false, message: "Código incorrecto"})
   }
   const tokenPayload = {
      sub: user._id,
      firstname: user.firstname, 
      lastname: user.lastname, 
      imageUrl: user.imageUrl,
      roles: user.roles
      }
  // console.log({user})
 //jsonwebtoken jwt
   const userObject = user.toObject()// debemos pasar el objeto de mongoose a objeto javascript
   //hacemos la firma en el token y definimos lo que vamos a mostrar o mandar
   const token = jwt.sign(
      tokenPayload , process.env.JWT_TOKEN as string
      )
      
      //El web token venceria en 6 Meses
   res.cookie("jwt", token, {
      //         1s  1min 1hora 1 dia 6 meses
      maxAge: 1000 * 60 * 60 * 60 * 180
   })

   res.status(200).json({ok: true, data: tokenPayload, message: "inicio de sesión exitoso"})
}

export const generateCode = async (req: Request, res: Response)=>{
   const { email } = req.params
   console.log("Email", email)
   const user = await UserModel.findOne({email})
   if(!user){
    return res.status(400).json({ok: false, message:"el email no existe por favor registrese"})
   }
   //generador de código para enviar al email y el usuario poder ingresar
   let randomCode = ""
   
   for (let i = 0; i <= 5; i++) {
    const numbers = Math.floor(Math.random() * 10)
    randomCode += numbers
   }
   user.login_code = randomCode;
   await user.save()// guarda el usuario en la base de datos
//    console.log({ randomCode })
//    console.log({user})
//    console.log({email})
//enviamos el mensaje con el código al correo del usuario
   sendEmail({
        to: email, 
        subject: "Este es tu código" + randomCode, 
        html:"Código para ingresar:" + randomCode,
    })
   res.status(200).json({ok:true, message: "Código enviado con éxito!"})
}

