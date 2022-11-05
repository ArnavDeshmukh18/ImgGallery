const express = require('express')
const cors = require("cors")
const formRoutes = require('./routes/form')
require("./conn/db")
const app = express()
const port = 5000;
//middleware
app.use(cors())
app.use(formRoutes)
app.listen(port,()=>{
    console.log(`App is running at port no ${port}`)
})