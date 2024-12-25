import express from 'express'
import fs from 'fs';
import {get} from 'http';
let router =express.Router()

//Create Api Router-Root req
//APT URL: http://127.0.0.1:8081/api/

router.get("/",(req,resp)=>{
    return resp.json({"msg":"API-Read Root Request"})
})

/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/create
Method Type:POST
Required Fields: empId,ename,esal
Access Type:Public
*/
router.post("/create",(req,resp)=>{
    let emp_data=req.body;
    console.log(emp_data);
    let employees= getEmployees()
    let emp= employees.find((employee)=>{return employee.empId==emp_data.empId})
    console.log(emp_data);
    if(emp){
        return resp.json({"msg":"Employee Already Exisits"})
    }
    employees.push(emp_data);
    console.log(employees);
    createEmployees(employees);
    
    
    return resp.json({"msg":"New Employee Created"})
})

/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/read
Method Type:GET
Required Fields: None
Access Type:Public
*/
router.get("/read",async(req,resp)=>{
    let employees=await getEmployee()
    return resp.json({employees})
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
router.delete("/delete/:eid",async(req,resp)=>{
    let emp_Id=req.params.eid;
    console.log(emp_Id);
    let employees=await getEmployees();
    let emp=employees.find(employee=>employee.empId==emp_Id)
    if(!emp){
        return resp.json({"msg":"Employee does not exist"})
    }
    let remaining_Employees=employees.find(employee=>employee.empId != emp_Id);
    console.log(remaining_Employees);
    await createEmployees(remaining_Employees)
    return resp.json({"employee":"employee record deleted"})
})

let getEmployees=()=>{
    let emp_Data=fs.readFileSync('emp.json','utf-8')
    return JSON.parse(emp_Data)
}
let createEmployees=(employees)=>{
    fs.writeFileSync('emp.json',JSON.stringify(employees))
}

export default router;