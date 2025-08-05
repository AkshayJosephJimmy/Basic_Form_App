import { internDetalis } from "../Models/InternDetalis.js";

export function postDetalis(req,res){

const { name, email, domain, message } = req.body;
if (!name || !email || !domain || !message) {
    return res.status(400).json({ message: "All fields are required." });
}

internDetalis.create({name,email,domain,message})
.then(() => {
    res.status(201).json({ message: "Details saved successfully!" });
})
.catch((error) => {
    console.error("Error saving details:", error);
    res.status(500).json({ message: "Error saving details." });
})



}