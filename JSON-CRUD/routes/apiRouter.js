import express from 'express'
let router =express.Router()

//Create Api Router-Root req
//APT URL: http://127.0.0.1:8081/api/

router.get("/",(req,resp)=>{
    return resp.json({"msg":"API-Read Root Request"})
})
/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/create
Method Type:PORT
Required Fields: empId,ename,esal
Access Type:Public
*/
router.post("/create",(req,resp)=>{
    return resp.json({"msg":"New Employee Created"})
})
/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/read
Method Type:GET
Required Fields: None
Access Type:Public
*/
router.get("/read",(req,resp)=>{
    return resp.json({"employee":"All-employees"})
})
/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/update/1
Method Type:PUT
Required Fields: empId,ename,esal
Access Type:Public
*/
router.put("/update/:id",(req,resp)=>{
    return resp.json({"employee":"employee record updated"})
})
/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/delete/1
Method Type:DELETE
Required Fields: None
Access Type:Public
*/
router.delete("/delete/:id",(req,resp)=>{
    return resp.json({"employee":"employee record deleted"})
})

export default router;