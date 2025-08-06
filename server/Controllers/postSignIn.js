import { adminModel } from "../Models/AdminDetalis.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




export async function postSignIn(req,res){

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    const userExist=await adminModel.findOne({ email: email })
    if(!userExist){
        return res.status(400).json({ message: "User does not exist." });
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if(isPasswordValid){

        const token=jwt.sign({id:userExist._id},'secretkey', { expiresIn: '1h' })
        return res.status(200).json({ user:{username:userExist.username},message: "Login successful!",token: token });
    }else{
        return res.status(400).json({ message: "Invalid password." });
    }
    


}