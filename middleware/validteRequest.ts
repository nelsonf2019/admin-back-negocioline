import { NextFunction, Request, Response } from "express"
import { AnyZodObject, ZodError } from "zod"
import { authRequest } from "../schema/auth"


//es una función que retornaba otra función
export const validateRequest = (schema: AnyZodObject)=>{
   return (req: any, res: Response , next: NextFunction)=>{
    try {               //va a parsear es decir que analice lo que llegue por schema
        const result = schema.parse({body: req.body, params: req.params})//rescibimos los datos a traves de zod para validar
        console.log({result})
        next()
    } catch (error) {
      
      //hacemos el control de errores del token jwt
        if(error instanceof ZodError){
          console.log({error})

            return res.status(400).json({ok: false, error: error.errors.map( e =>({
              code: e.code,
              message: e.message,
              path: e.path,
            }))})// corta con el return
          }
          res.status(500).json({ok: false, message: "error del servidor"})
    }
   }   
}