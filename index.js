/**
 * Start the server
 */

const express = require('express')
const app = express()

app.use(express.json())
//Stiching the route here
require("./routes/idea.routes")(app)


app.listen(8000,()=>{
    console.log("App started on the port number : " , 8000)
})
