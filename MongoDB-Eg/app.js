import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import EmployeeModel from './model/EmployeeModel.js'

//create express app
let app=express()

dotenv.config({'path':"./config/dev.env"})
let port = process.env.PORT;
let host = process.env.HOST_NAME;
let mongoDB_local_url=process.env.MONGO_DB_LOCAL_URL;

//create Application root request
app.get("/",(req,resp)=>{
    return resp.json({"message":"Application Root Request"})
})

app.get("/read",async(req,resp)=>{
    let employees=await EmployeeModel.find()
    return resp.json(employees)
})

mongoose.connect(mongoDB_local_url)
    .then((resp)=>{console.log("MongoDB connection success!")})
    .catch((resp)=>{console.log(err);
    })
 

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running! http://${host}:${port}/`);
    
})