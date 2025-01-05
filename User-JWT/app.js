import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js'

//create express 
let app=express();

//enamble form data/postman body data
app.use(express.json())
//enable cors
app.use(cors())
//enable http request logger using morgan
app.use(morgan('tiny'))
//load application env-values
dotenv.config({'path':'./config/dev.env'})
let port=process.env.PORT;
let host =process.env.HOST_NAME;
let mongodb_URL=process.env.MONGODB_LOCAL_URL;
//create Application Root Request
//URL:http://127.0.0.1:8081/
app.get("/",(req,resp)=>{
    return resp.json({"message":"Welcome to User Module-JWT-Root Request"})
})
//route your application request
app.use("/user",userRouter);
//connect to mongodb
mongoose.connect(mongodb_URL)
.then((resp)=>{
    console.log(`MondoDB Connection Success`);
})
.catch((err)=>{
    console.log(err.message);
})
//server-configuration using listen

app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(chalk.bgGreen(`Server is running.. http://${host}:${port}/`))
})