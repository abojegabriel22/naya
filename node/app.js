import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { dbConnect,getData } from "./controller/dbController"


dotenv.config()
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get("/", (req, res)=>{
    res.send("This is Naya restaurants api")
}) 





app.listen(port, ()=> {
    dbConnect()
    console.log(`Server Listening on port ${port}`)
})