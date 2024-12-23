import http from 'http'
import fs from 'fs'

let server=http.createServer((request,response)=>{
    fs.readFile('index.html','utf-8',(err,data))
    if(err) throw err
    response.end(data)
});
server.listen(8081,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log(`server is running on port: http://localhost:${8081}/`);
    
})


