import { Request } from "express"

export interface User {
    sub: string
       firstname: string
       lastname: string
       roles: {
          admin: boolean
          seller: boolean
       }
}

// export interface authRequest extends Request {
//     user?: User
//     cookies: {
//         jwt: string
//     }
// }
export interface authRequest<
ReqBody = any,
params = any, 
ResBody = any, 
ResQuery = any,
Locals extends Record<string, any> = any
> extends Request<
params, 
ResBody, 
ReqBody,
ResQuery,
Locals >{
    user?: User
    cookies: {
        jwt: string
    }
}