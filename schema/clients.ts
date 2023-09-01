import { z } from "zod";
import validateObjectId from "../helpers/validateObject";

const DOC_TYPES = ["RUC", 
"Cédula", 
"Pasaporte",
"Identificación Exterior"
] as const // declaramos el arreglo como const con typescript
//construimos un esquemas para la validaciones con zoo
export const ClientSchema = z.object({
   //para validar le debemos poner el tipo de datos
   firstname: z.string().min(3),
   lastname: z.string().min(3),
   email: z.string().email("Email invalid"), //recibe tambien mensaje de error  {description:"El tipo de doc no es valido"}
   document_type: z.enum(DOC_TYPES),
   document_value: z.string().min(4)
})

export const ClientsCreationSchema = z.object({
    body: ClientSchema,
    // params: z.undefined()
})
export const ClientsEditionSchema = z.object({
    body: ClientSchema.partial(),
    params: z.object({
        id: z.custom(validateObjectId, "id de cliente inválido")
    })
})

//inferimos al client el tipo de datos con zod
export type Client = z.infer<typeof ClientSchema>