
import { NextFunction, Response } from "express"
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken"
import {  User, authRequest } from "../schema/auth"

export const validateUser = ()=>{
   return (req: authRequest, res: Response , next: NextFunction)=>{
    try {
        const token = req.cookies.jwt //enviamos a las cookies el jwt
        const user = jwt.verify(token, process.env.JWT_TOKEN as string)

        //console.log({user})
        req.user = user as User
        next()
    } catch (error) {
      //hacemos el control de errores del token jwt
        if(error instanceof JsonWebTokenError ||
          error instanceof TokenExpiredError){
            return res.status(401).json({ok: false, message: "Request invalid"})// corta con el return
          }
          res.status(500).json({ok: false, message: "error del servidor"})
    }
   }   
}




















////// ESTO ES UN MIDDLAWARE
// interface UserToken{
//     sub: string
//         firstname: string
//         lastname: string
//         roles:{
//                 admin:boolean,
//                 saller:boolean
//               }
// }
// // export interface CustomRequest extends Request{
// //     user: UserToken
// // }