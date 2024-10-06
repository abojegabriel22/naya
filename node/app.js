import express from "express"
import dotenv from"dotenv"
import cors from"cors"
import bodyParser from"body-parser"
import { ObjectId } from "mongodb"
import { dbConnect, getData, getDataSort, getDataSortLimit, postData, updateData, deleteData } from"./controller/dbController"



let app = express()
dotenv.config()
let port = process.env.PORT

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// default route 
app.get("/", (req, res)=>{
    res.send("This is Naya restaurants api")
}) 

// LGA routs with their sub locations 
app.get("/location", async (req, res)=>{
    let query = {}
    let collection = "location"
    let output = await getData(collection, query)
    res.status(200).send(output)
}) 

app.get("/restaurants", async (req, res)=>{
    let query = {}
    let lgaId = Number(req.query.lgaId)
    let stateId = Number(req.query.stateId)
    if(lgaId && stateId){
        query = {
            "state_id":stateId,
            "local_government_id":lgaId
        }
    }
    
    let collection = "restaurants"
    let output = await getData(collection, query)
    res.status(200).send(output)
})

app.get("/mealType", async (req, res) => {
    let query = {}
    let collection = "meal_types"
    let output = await getData(collection, query)
    res.status(200).send(output)
})


 app.get("/filters/:lgaId", async (req, res) => {
    let query = {}
    let collection = "restaurants"
    let lgaId = Number(req.params.lgaId)

    if(lgaId){
        query = {
            "local_government_id":lgaId
        }
    }
    let output = await getData(collection, query)
    res.status(200).send(output)
 })

//  list of menus
 app.get("/menus", async (req, res) => {
    let query = {}
    let collection = "restaurant_menu"
    let output = await getData(collection, query)
    res.status(200).send(output)
 })

//  menus with respect to restaurants
 app.get("/menu/:restId", async (req, res) => {
    let query = {}
    let collection = "restaurant_menu"
    let restId = Number(req.params.restId)
    let kitchenId = Number(req.query.kitchenId)
    let hcost = Number(req.query.hcost)
    let lcost = Number(req.query.lcost)
    let sort = {menu_price:1}
    let skip = 0
    let limit = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

    if(req.query.sort){
        sort={menu_price:req.query.sort}
    }

    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip),
        limit = Number(req.query.limit)
    }

    // menus with respect to restaurants + kitchen
    if(kitchenId){
        query = {
            "restaurant_id":restId,
            "kitchen.kitchen_id":kitchenId
        }
    }
    else if(hcost && lcost){
        query = {
            "restaurant_id":restId,
            $and:[{menu_price:{$gt:lcost, $lt:hcost}}]
        }
    }
    else{
        query = {
            "restaurant_id":restId
        }
    }
    let output = await getDataSortLimit(collection, query, sort, skip, limit)
    res.status(200).send(output)
 })

//  restaurants  details 
 app.get("/restDetails/:id", async (req, res) => {
    // query = {restaurant_id:Number(req.params.id)}
    let query = {}
    let collection = "restaurants"
    const validateObjId = (id) => {
        const idPattern = /^[0-9a-fA-F]{24}$/
        return idPattern.test(id)
    }
    if(validateObjId(req.params.id)){
        query = {_id:new ObjectId(req.params.id)}
        let output = await getData(collection, query)
        res.status(200).send(output)
    }
    else{
        res.status(400).send({"Error":"Invalid ID"})
    }
 })

//  menu detgails {"id":[1,2,3]}
app.post("/menuDetails", async (req, res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}}
        let collection = "restaurant_menu"
        let output = await getData(collection, query)
        res.status(200).send(output)
    }
    else{
        res.send("Please pass data in format of {'id':[1,2,3]}")
    }
})

// get all orders 
app.get("/orders", async (req, res) => {
    let query = {}
    let collection = "orders"
    if(req.query.email){
        query = {email:req.query.email}
    }

    let output = await getData(collection, query)
    res.status(200).send(output)
})

// place orders 
app.post("/placeOrder", async (req, res) => {
    let data = req.body
    let collection = "orders"

    let output = await postData(collection, data)
    res.status(200).send("order placed" + output)
})

// update order 
app.put("/updateOrder", async (req, res) => {
    let collection = "orders"

    let condition = {_id: new ObjectId(req.body._id)}
    let data = {
        $set: {
            "status": req.body.status
        }
    }


    let output = await updateData(collection, condition, data)
    res.status(200).send(output)
 })

//  delete order 
app.delete("/deleteOrder", async (req, res) => {
    let collection = "orders"
    let condition = {_id: new ObjectId(req.body._id)}
    let row = await getData(collection, condition)
    if(row.length > 0){
        await deleteData(collection, condition)
        res.status(200).send("Order deleted successfully")
    }
    else{
        res.status(200).send("No record found")
    }
 })



app.listen(port, ()=> {
    dbConnect()
    // if(err) throw err
    console.log(`Server Listening on port ${port}`)
})