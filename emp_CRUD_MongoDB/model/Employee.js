import mongoose from "mongoose";

let empSchema=mongoose.Schema({
    eid:{type:Number,require:true},
    ename:{type:String,require:true},
    esal:{type:Number,require:true},
    eloc:{type:String,require:true,default:"Bangalore"}
})
//let EmployeeModel=mongoose.model("collection/table name",Schema name)
let EmployeeModel=mongoose.model("employee",empSchema)
export default EmployeeModel;