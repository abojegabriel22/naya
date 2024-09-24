import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"


dotenv.config()
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())






app.listen(port, ()=> {
    console.log(`Server Listening on port ${port}`)
})