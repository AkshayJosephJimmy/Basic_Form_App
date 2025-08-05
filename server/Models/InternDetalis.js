import mongoose from "mongoose";

const internDetailsSchema= new mongoose.Schema({
    name:String,
    email:String,
    domain:String,
    message:String,
})

export const internDetalis=mongoose.model("InternDetalis", internDetailsSchema);

