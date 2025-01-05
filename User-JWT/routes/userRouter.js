import express from 'express'
import userModel from '../model/User.js';
import jwt from 'jsonwebtoken'

let router=express.Router()

/*
 Usage:user Router Root Req
 URL:http://127.0.0.1:8081/user/
 Method Type:GET
 Requried Field:None
*/
router.get("/",(req,resp)=>{
    return resp.json({"message":"User Router-Root Req"})
});

/*
    Usage: user Registration
    URL: http://127.0.0.1:8081/user/reg
    Method Type:POST
    Required Field: username,email,mobile,password
*/
router.post("/reg",async(req,resp)=>{
    try{
        //read form data or post man body data
        let user =req.body;
        //check user exists or not
        let user_obj=await userModel.findOne({'email':user.email})
        if(user_obj){
            return resp.json({"message":"User Already Exists"})
        }
        //user not exists
        user_obj=new userModel(user);
        //save user obj into mongodb
        await user_obj.save();
        return resp.json({"message":"New User Registered"})
    }catch(err){
        return resp.json({"Error Message":err.message})
    }
});

/*
    Usage: user Registration
    URL: http://127.0.0.1:8081/user/login
    Method Type:POST
    Required Field: email,password
*/
router.post("/login",async(req,resp)=>{
    try {
        //read from data
        let email=req.body.email;
        let pwd=req.body.password;

        //verify user exists or not
        let user_obj=await(userModel.findOne({'email':email}))
        if(!user_obj){
            return resp.json({"msg":"User Does Not Exists"})
        }
        //verify password
        if(user_obj.password !== pwd){
            return resp.json({"message":"Password Does Not Match"})
        }
        let payload={'phone':user_obj.mobile,'email_id':user_obj.email}
        let token=jwt.sign(payload,'Secretkey')
        return resp.json({"message":"Login Success",'token':token})
    } catch (err) {
        return resp.json({"Error message":err.message})
    }
});

export default router;