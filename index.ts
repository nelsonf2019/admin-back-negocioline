import "dotenv/config"
//creación del servidor express
import epxress from "express";
import routes from "./routes/index"
import connectDB from "./db/conect";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = epxress();
connectDB();
//middleware
console.log("Hola mundo")
app.use(cookieParser())//esto sirve para setear las cookies ,desde las rutas
app.use(epxress.json())//para parsear el body los objetos json que vienen al back
//cors es un middleware que permite conectar el front con el back y que solo el front pueda conectarse
app.use(cors({origin: "https://admin-front-negocioline.vercel.app/", credentials: true}))
app.use("/api", routes)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Escuchando puerto ${ PORT }`)
})

