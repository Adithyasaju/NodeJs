import http from 'http'
import fs from 'fs'
import path from 'path'

let server = http.createServer((req,resp)=>{
    //resp.end("Hello,GM")
    //read file and send as resp
   // fs.readFile(path.join(process.cwd(),"static","html","index.html"),'utf-8',()=>{})
    if(req.url==="/" || req.url === "/index"){
        fs.readFile(path.join(process.cwd(),"static","html","index.html"),"utf-8",(err,data)=>{
            if(err) throw errresp.end(data)
        })
    }
    if(req.url==="/" || req.url === "/index"){
        fs.readFile(path.join(process.cwd(),"static","html","about.html"),"utf-8",(err,data)=>{
            if(err) throw errresp.end(data)
        })
    }
    if(req.url==="/" || req.url === "/index"){
        fs.readFile(path.join(process.cwd(),"static","html","services.html"),"utf-8",(err,data)=>{
            if(err) throw errresp.end(data)
        })
    }
    if(req.url==="/" || req.url === "/index"){
        fs.readFile(path.join(process.cwd(),"static","html","contact.html"),"utf-8",(err,data)=>{
            if(err) throw errresp.end(data)
        })
    }
})
server.listen(8081,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server Running..... http://127.0.0.1:${8081}/` );
    
})