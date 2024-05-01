require('dotenv').config()
const express = require('express')
const router = require('./routes')
var cors = require('cors')
const app = express()
const mongoconfig=require("././config/mongoconfig")

mongoconfig();
app.use(cors())
app.use(express.json());
app.use('/',router)

const port = process.env.PORT || 8001

app.listen(port,()=>{
    console.log("port running");
});