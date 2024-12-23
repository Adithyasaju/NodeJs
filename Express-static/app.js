import { log } from 'console'
import express from 'express'
import path from 'path'

let app=express()


app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"static","html","index"))
})


app.listen(8081,'127.0.0.1',(err)=>{
    console.log(`server is running http://127.0.0.1:8081/`);
    
})