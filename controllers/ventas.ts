import { Response, request } from "express"
import { Request } from "express"
import UserModel from "../models/user"

import ventaModel from "../models/ventas"
import clientModel from "../models/client"
 

export const getAll = async (req: any, res: Response)=>{
   try {
      //filtramos las ventas por admin y si no las que hice como vendedor
      const filter =  req.user.isAdmin? {} : { user: req.user.sub} 
      const ventas = await ventaModel.find(filter)// buscamos las ventas de ese usuario 
    //  console.log({ventas})
      res.status(200).json({ok: true, data: ventas})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}

export const create = async (req: any, res: Response)=>{
   const { operation_date, total_amount, products, payment_methods, client } = req.body
   console.log({ operation_date, total_amount, products, payment_methods, client })
   const createVenta = await ventaModel.create(
      {
         operation_date, 
         total_amount, 
         products,
         payment_methods,
         client,
         user: req.user.sub
      })
   await clientModel.findByIdAndUpdate(createVenta.client, {
      $inc: {"sale.count": 1, "sale.amount": total_amount}
   })
   res.status(201).json({ok: true, data:createVenta })
}

