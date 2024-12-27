import express from 'express'
import fs from 'fs'

let router=express.Router()

//create Api Router -Root Request
//API URL: http://127.0.0.1:8081/api/
router.get("/",(req,resp)=>{
    return resp.json({"msg":"API-Router Root Request"})
})

/*
Usage: crete new emp/product/order
API URL: http://127.0.0.1:8081/api/create
Method Type:POST
Required Fields: empId,ename,esal
Access Type:Public
*/
router.post("/create",(req,resp)=>{
    let emp_data =req.body;
    console.log(emp_data);
    let employees=getEmployees()
    let emp=employees.find((employee)=>{return employee.eid == emp_data.eid})
    console.log(emp_data);
    if(emp){
        return resp.json({"Msg":"Employee Already Exists"})
    }
    employees.push(emp_data)
    console.log(employees);
    createEmployees(employees)
    
    return resp.json({"msg":"New Employee Created"})
})

/*
Usage: read all emp/product/order
API URL: http://127.0.0.1:8081/api/read
Method Type:GET
Required Fields: None
Access Type:Public
*/
router.get("/read",async(req,resp)=>{
    let employees=await getEmployees();
    return resp.json({employees})
})

/*
Usage: get  emp/product/order based on id
API URL: http://127.0.0.1:8081/api/read/102
Method Type:GET
Required Fields: None
Access Type:Public
*/
router.get("/read/:eid",async(req,resp)=>{
    //how tp read url data
    let emp_Id=req.params.eid;

    //verify employee exist or not

    let employees=await getEmployees();
    let employee=employees.find((employee)=>{return employee.eid == emp_Id})
    if(!employee){
        return resp.json({"Error":"Employee Not Exists"})
    }
    return resp.json(employee)
})

/*
Usage: update all emp/product/order
API URL: http://127.0.0.1:8081/api/update/1
Method Type:PUT
Required Fields: empId,ename,esal
Access Type:Public
*/
router.put("/update/:emp_Id",async(req,resp)=>{
    //read url data
    let empId=req.params.emp_Id;
    //read form or postman data
    let emp = req.body;
    console.log("Body Data",emp);
    //verify employee exist or not
    let employees=await getEmployees()
    let employee=employees.find((employee)=>{return employee.eid == empId})
    console.log(employee);
    if(!employee){
        return resp.json({"Error":"Employee Not Exist"})
    }
    let remainig_Employees=employees.filter(employee=>employee.eid !=emp)
    remainig_Employees.unshift(emp)
    console.log(remainig_Employees.length);
    createEmployees(remainig_Employees)
    return resp.json({"employee":"Employee Record Updates"})
})

/*
Usage:delet emp/product/order
API URL: http://127.0.0.1:8081/api/delete/1
Method Type:DELETE
Required Fields: None
Access Type:Public
*/
router.delete("/delete/:eid",async(req,resp)=>{
    let emp_Id =req.params.eid;
    console.log(emp_Id);
    let employees=await getEmployees();
    let emp=employees.find(employee=>employee.eid == emp_Id)
    if(!emp){
        return resp.json({"msg":"Buddy Employee Not exist"})
    }
    let remainig_Employees=employees.filter(employee=>employee.eid !=emp_Id)
    console.log(remainig_Employees);
    await createEmployees(remainig_Employees)
    return resp.json({"employee":"Employee Record Deleted"})
})

let getEmployees=()=>{
    let emp_Data =fs.readFileSync('emp.json','utf-8')
    return JSON.parse(emp_Data)
}
let createEmployees=(employees)=>{
    fs.writeFileSync('emp.json',JSON.stringify(employees))
}
export default router;