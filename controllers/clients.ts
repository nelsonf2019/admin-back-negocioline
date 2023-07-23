import { Response, request } from "express"
import { Request } from "express"
import ClientModel from "../models/client"
 

export const getAll = async (req: any, res: Response)=>{
   try {
      const clients = await ClientModel.find()//llamamos todos los clientes
     // console.log({clients})
      res.status(200).json({ok: true, data: clients})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}

export const create = async (req: any, res: Response)=>{
  const createdClient = await ClientModel.create(req.body)
  res.status(201).json({ ok: true, data: createdClient })
}

export const getById = async (req: any, res: Response)=>{
   const { id } = req.params
   try {
      const client = await ClientModel.findById(id)//llamamos todos los clientes
      console.log({client})
      res.status(201).json({ok: true, data: client})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}
export const update = async (req: any, res: Response)=>{
   const { id } = req.params
   try {
      const upDateClient = await ClientModel.findByIdAndUpdate(id, req.body)//llamamos todos los clientes
      console.log({upDateClient})
      res.status(201).json({ok: true, data: upDateClient})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}
