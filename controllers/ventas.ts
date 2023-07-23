import { Response, request } from "express"
import { Request } from "express"
import UserModel from "../models/user"

import ventaModel from "../models/ventas"
 

export const getAll = async (req: any, res: Response)=>{
   try {
      const ventas = await ventaModel.find({user: req.user.sub})// buscamos las ventas de ese usuario 
      console.log({ventas})
      res.status(200).json({ok: true, data: ventas})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}

export const create = async (req: any, res: Response)=>{
   const { operation_date, total_amount } = req.body
   const createVenta = await ventaModel.create(
      {
         operation_date, 
         total_amount, 
         user: req.user.sub
      })
   res.status(201).json({ok: true, data:createVenta })
}

