import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
import apiRouter from './routes/apiRouter.js'

//create express app
let app=express();

//read from data/post body data
app.use(express.json())
//load env variable values
dotenv.config({'path':"./config/dev.env"})
let port=process.env.PORT;
let host=process.env.HOST_NAME;

//enable HTTP Request Logger - middleware
app.use(morgan('tiny'))

//create app -root request
//URP:http://127.0.01:8081/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Application Root Request"})
})

//forward all api related request to api router
app.use("/api",apiRouter)

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.bgGreen(`Server Running on http://${host}:${port}/`));
    
})