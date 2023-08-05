import { NextFunction, Request, Response } from "express"
import { AnyZodObject, ZodError } from "zod"

//es una función que retornaba otra función
export const validateRequest = (schema: AnyZodObject)=>{
   return (req: any ,res: Response , next: NextFunction)=>{
    try {
        const token = req.cookies.jwt //enviamos a las cookies el jwt
        const result = schema.parse({body: req.body, params: req.params})//rescibimos los datos a traves de zod para validar
        console.log({result})
        next()
    } catch (error) {
      //hacemos el control de errores del token jwt
        if(error instanceof ZodError){
            return res.status(400).json({ok: false, message: "Request invalid"})// corta con el return
          }
          res.status(500).json({ok: false, message: "error del servidor"})
    }
   }   
}