home page

# list of all the local governments in abuja with their sub locations within them (GET)
* http://localhost:1313/location
* https://netflixapi-7fvc.onrender.com/api-doc
* [get locations route](https://naya-api-1.onrender.com/location)


# list of restaurants with respect to state and local governments of abuja (GET)
* http://localhost:1313/restaurants?stateId=2&lgaId=2
* https://netflixapi-7fvc.onrender.com/api-doc
* [get restaurants with respect to state, local government route](https://naya-api-1.onrender.com/restaurants?stateId=2&lgaId=2)


# list of mealtypes [breakfast lunch and dinner] (GET)
* http://localhost:1313/mealType
* https://netflixapi-7fvc.onrender.com/api-doc
* [get mealtypes route](https://naya-api-1.onrender.com/mealType)


# list of restaurants with respect to local governments (GET)
* http://localhost:1313/filters/3
* https://netflixapi-7fvc.onrender.com/api-doc
* [get list of rest wrt local government route](https://naya-api-1.onrender.com/filters/3)

# list of menus (GET)
* http://localhost:1313/menus
* https://netflixapi-7fvc.onrender.com/api-doc
* [get list of menus route](https://naya-api-1.onrender.com/menus)

# menus with respect to restaurants (GET)
* http://localhost:1313/menu/4
* https://netflixapi-7fvc.onrender.com/api-doc
* [get list of menus wrt restaurants route](https://naya-api-1.onrender.com/menu/4)

+ arrangement in ascending or descending order
* http://localhost:1313/menu/1?sort=-1
* https://netflixapi-7fvc.onrender.com/api-doc
* [get sort in descending order route](https://naya-api-1.onrender.com/menu/1?sort=-1)

# pagination
http://localhost:1313/menu/1?skip=3&limit=3
* https://netflixapi-7fvc.onrender.com/api-doc
* [get pagination route](https://naya-api-1.onrender.com/menu/1?skip=3&limit=3)

# menus with respect to restaurants + cost (GET)
* http://localhost:1313/menu/5?lcost=999&hcost=20000
* https://netflixapi-7fvc.onrender.com/api-doc
* [get menus wrt rest + cost route](https://naya-api-1.onrender.com/menu/5?lcost=999&hcost=20000)

# menus with respect to restaurants + kitchen (GET)
* http://localhost:1313/menu/1?kitchenId=2
* https://netflixapi-7fvc.onrender.com/api-doc
* [get menus wrt rest + kitchen route](https://naya-api-1.onrender.com/menu/1?kitchenId=2)

# details of restauratants with respect to id (GET)
* http://localhost:1313/restDetails/3
* http://localhost:1313/restDetails/66fd04d881218a860af8266a
* https://netflixapi-7fvc.onrender.com/api-doc
* [get details of rest wrt id route](https://naya-api-1.onrender.com/restDetails/66fd04d881218a860af8266a)

# detail of selected menu (POST)
body = {"id":[1,2,3]}
* http://localhost:1313/menuDetails
* https://netflixapi-7fvc.onrender.com/api-doc
* [post details of menu selected route](https://naya-api-1.onrender.com/menuDetails)

# get all orders route (GET)
* http://localhost:1313/orders
* https://netflixapi-7fvc.onrender.com/api-doc
* [get all orders route](https://naya-api-1.onrender.com/orders)

# place order route(POST)
* http://localhost:1313/placeOrder
* https://netflixapi-7fvc.onrender.com/api-doc
* [place orders route](https://naya-api-1.onrender.com/placeOrder)

{ 
    "orderId" : 2, 
    "name" : "Amit", 
    "email" : "amit@gmail.com", 
    "address" : "Hom 65", 
    "phone" : 8934645457, 
    "cost" : 612, 
    "menuItem" : 
    [ 
        45, 34, 41 
    ], 
    "status" : "Delivered"
 }

 # update order route(PUT)
 * http://localhost:1313/updateOrder
 * https://netflixapi-7fvc.onrender.com/api-doc
 * [update orders route](https://naya-api-1.onrender.com/updateOrder)
{
    "_id":"6702d568a8f9b8bb8716a3b4",
    "status":"On the way"
}

# delete order route(DELETE)
* http://localhost:1313/deleteOrder
* https://netflixapi-7fvc.onrender.com/api-doc
 * [delete orders route](https://naya-api-1.onrender.com/deleteOrder)
{
    "_id":"6702d52e0b6e1398e56a8681"
}