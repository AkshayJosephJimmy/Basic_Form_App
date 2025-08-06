import { internDetalis } from "../Models/InternDetalis.js";
export function getDetalis(req,res){

    internDetalis.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        console.error("Error fetching details:", error);
        res.status(500).json({ message: "Error fetching details." });
    });

}