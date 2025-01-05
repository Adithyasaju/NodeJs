import mongoose from "mongoose";

let userSchema =mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    mobile:{type:Number,require:true},
    password:{type:String,require:true}

})
let user=mongoose.model("user",userSchema)
export default user;