import { Response, request } from "express"
import { Request } from "express"
import ClientModel from "../models/client"
import { authRequest } from "../schema/auth"
import { Client } from "../schema/clients"
 

export const getAll = async (req: Request, res: Response)=>{
   try {
      const clients = await ClientModel.find()//llamamos todos los clientes
     // console.log({clients})
      res.status(200).json({ok: true, data: clients})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}
export const create = async (req: Request<any, any, Client>, res: Response)=>{

  const createdClient = await ClientModel.create(req.body)
  res.status(201).json({ ok: true, data: createdClient })
}
export const getById = async (req: Request, res: Response)=>{
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
export const getByDocument = async (req: Request, res: Response)=>{
   const { document } = req.params
   try {
      const client = await ClientModel.findOne({document_value: document})//llamamos todos los clientes
     // console.log({client})
      res.status(201).json({ok: true, data: client})
   } catch (error) {    
        //sino error del servidor
        res.status(500).json({ok: false, message: "error del servidor"})
   }
}
export const update = async (req: Request, res: Response)=>{
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
