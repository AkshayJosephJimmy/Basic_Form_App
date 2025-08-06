import { adminModel } from "../Models/AdminDetalis.js";
import bcrypt from "bcrypt";


 export async function postSignUp(req,res){

    const {username,email,password} = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }
   const existinguser=await adminModel.findOne({ email: email })
   if(existinguser){
    return res.status(400).json({ message: "User already exists." });
   }
   const hashedPassword = await bcrypt.hash(password, 10);
   adminModel.create({username:username,email:email,password:hashedPassword})
   .then(() => {
       console.log(req.body);
       res.status(201).json({ message: "User created successfully!" });
   })
   .catch((error) => {
       console.error("Error creating user:", error);
       res.status(500).json({ message: "Error creating user." });
   }
   );
   

}


