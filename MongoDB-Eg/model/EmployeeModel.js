import mongoose from "mongoose";
let empSchema=mongoose.Schema({
    eid:{type:Number,require:true},
    ename:{type:String,require:true},
    esal:{type:String,require:true}
})
let EmployeeModel=mongoose.model("employee_col",empSchema)

export default EmployeeModel;