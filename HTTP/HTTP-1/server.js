import http from 'http'
//create server
let server=http.createServer((req,resp)=>{
    resp.end("Hello,Good Morning!Have a nice day")
});
server.listen(8081,'127.0.0.1',(err)=>{
    if(err) throw err
   // console.log("Server is running on port:8081")
    //If givinng any url use `` in log
    console.log(`server is running on port: http://localhost:${8081}/`);
})


