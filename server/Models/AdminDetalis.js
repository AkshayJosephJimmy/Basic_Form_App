import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String

})
export const adminModel=mongoose.model("Admin",adminSchema)