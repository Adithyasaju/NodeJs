import express from 'express'
 
let router=express.Router();

/*
    API URL:http://127.0.0.1:8081/prod/
    Method:GET
    Req Fields:N0ne
    Access Type:public
*/ 


router.get("/",(req,resp)=>{
    console.log("Inside-Product Router-get Method");
    return resp.json({"msg":"Product-Root Req-Method:GET"})
})

/*
    API URL: http://127.0.0.1:8081/prod/create
    Method: POST
    Req Fields:None
    Access Type:Public
*/

router.post("/create",(req,resp)=>{
    return resp.json({"msg":"Product-Root POST"})

})

/*
    API URL: http://127.0.0.1:8081/prod/update
    Method: PUT
    Req Fields:None
    Access Type:Public
*/
router.put("/update",(req,resp)=>{
    return resp.json({"msg":"Product-Root PUT"})

})

/*
    API URL: http://127.0.0.1:8081/prod/delete
    Method: DELETE
    Req Fields:None
    Access Type:Public
*/

router.delete("/delete",(req,resp)=>{
    return resp.json({"msg":"Product-Root PUT"})

})

export default router;