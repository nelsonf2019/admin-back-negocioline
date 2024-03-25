import { Response } from "express"
import ProductModel from "../models/products"
 

export const getAll = async (req: any, res: Response)=>{
   //filtramos con expresion regular con sensitive "i"
   const { searchText } = req.query
   //si no hay search no aplica filtro y devuelve todos los items
   const filter = !searchText ? {}: {name: new RegExp(searchText, "i")}
  const products = await ProductModel.find(filter)
  res.status(200).json({ok: true, data: products})
}

export const getByCode = async (req: any, res: Response)=>{
    const { code } = req.params
   console.log({code})
   try {
      const product = await ProductModel.findOne({ code })// buscamos productos 
      console.log({product})
      res.status(200).json({ok: true, data: product})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}


