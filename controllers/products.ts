import { Response, Request } from "express"
import UserModel from "../models/user"

import ProductModel from "../models/products"
 

export const getByCode = async (req: any, res: Response)=>{
    const { code } = req.params
   // console.log({code})
   try {
      const product = await ProductModel.findOne({ code })// buscamos productos 
      console.log({product})
      res.status(200).json({ok: true, data: product})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}


