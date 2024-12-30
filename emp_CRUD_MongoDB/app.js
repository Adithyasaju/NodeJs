 import express, { json, response } from 'express'
 import dotenv from 'dotenv'
 import mongoose from 'mongoose'
 import morgan from 'morgan'
 import chalk from 'chalk'
 import cors from  'cors'
 import empRouter from './routes/employeeRouter.js'

 //create express app
 let app=express()

 //load config settings
 dotenv.config({'path':"./config/dev.env"})
 let port=process.env.PORT;
 let host=process.env.HOST_NAME;
 let mongodb_local_url=process.env.MONGO_DB_LOCAL_URL;

 //read form or postman body data
 app.use(express.json())

 //enable http request logger middleware
app.use(morgan('dev'))
 //enable cors
 app.use(cors())

 //application root request
 /*
 API URL: http://127.0.0.1:8081/ 
 Method Type:GET
 */
 app.get("/",(req,resp)=>{
    return resp.json({"message":"Application Root Request"})
 })

 //forward emp related api to empRouter file
 app.use("/emp",empRouter);

 //connect to mongoDB
 mongoose.connect(mongodb_local_url)
        .then((response)=>{
            console.log("MongoDB Connection successful")})
        .catch((err)=>{console.log(err);
        })

 //create app and listen
 app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.bgGreen(`Server is Running... http"//${host}:${port}/`));
    
 })