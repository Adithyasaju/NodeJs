import express from 'express'
import path from 'path'
let app=express()
//http://127.0.0.1:8081/

app.get("/",(req,resp)=>{
    resp.send("Root Req")
})
//http://127.0.0.1:8081/users
app.get("/users",(req,resp)=>{
    resp.send("User Req")
})

app.get("/index",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"index.html"))
})

app.listen(8081,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`Server Running on http://127.0.0.1:8081`);
    
})