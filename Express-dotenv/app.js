import express from 'express'
import dotenv from 'dotenv'

let app=express()

//load config/environment values
dotenv.config({'path':"./config/dev.env"})
let port = process.env.PORT
let host = process.env.HOSTNAME

app.get("/test",(req,resp)=>{
    return resp.json({"msg":"Root Req -"})
})

app.listen(port,host,(err)=>{
    console.log(`Server is Running... http://${host}:${port}/`);
    
})