import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()
let mongoUrl = process.env.mongoUrl
let db

// database connection
async function dbConnect(){
    const client = new MongoClient(mongoUrl)
    await client.connect()
    db = client.db("naya-database")
    console.log("Database has been connected")
}

async function getData(colName, query){
    let output
    try {
        output = await db.collection(colName).find(query).toArray()
    }
    catch(error){
        output = {
            "Error": "Error in getting data from database"
        }
    }
    return output
}






export{
    dbConnect,
    getData
}