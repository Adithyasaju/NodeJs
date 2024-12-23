import express from 'express'
import dotenv from 'dotenv'
import useRouter from './Routes/userRouter.js'
import productRouter from './Routes/productRouter.js'

let app= express()
dotenv.config({'path':"./config/dev.env"})
let port = process.env.PORT
let host = process.env.HOST_NAME 

    //API URL:http://127.0.0.1:8081/
    app.get("/",(req,resp)=>{
        return resp.json({"msg":"Root Req"})
    })


    app.use("/user",useRouter);

    app.use("/prod",productRouter);


 app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server Running: http://${host}:${port}/`);
    
 }) 