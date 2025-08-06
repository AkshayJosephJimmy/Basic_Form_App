import { use } from "react";
import { useState } from "react";
import axios from "axios";

function Form(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [domain,setDomain]=useState("");
    const [message,setMessage]=useState("");
    function handelName(e){
        setName(e.target.value);
    }
    function handelEmail(e){
        setEmail(e.target.value);
    }
    function handelDomain(e){
        //setDomain(e.target.value);
        const selectedDomain = e.target.value;
        setDomain(selectedDomain);
    }
    function handelMessage(e){
        setMessage(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            name,
            email,
            domain,
            message
        };
        axios.post('http://localhost:5700/register',formData)
        .then((response) => {
            console.log("Form submitted successfully:", response.data);
            // Optionally, reset the form fields
            setName("");
            setEmail("");
            setDomain("");
            setMessage("");
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
            // Handle error appropriately, e.g., show an error message to the user
        }
        );
    }

    return(
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
            <h1 className="font-bold underline">Intern/Volenter Register Form</h1>
            <p>Please fill out the form below to register for the event.</p>
            <form className="flex flex-col space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={(e)=>handelName(e)} value={name} className="border"/>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e)=>{handelEmail(e)}} value={email} required className="border"/>

                <fieldset className="flex flex-col space-y-2">
                    <legend>Select Domain for Intern/Volen</legend>

                 <div className="flex items-center justify-around space-x-8"> 

                <label htmlFor="coding">Coding</label>
                <input type="radio" id="coding" name="domain" onChange={(e)=>handelDomain(e)} checked={domain=="coding"} value="coding" className="border "/>
                 </div>
                  <div className="flex items-center justify-around space-x-8 "> 
                <label htmlFor="design">Design</label>
                <input type="radio" id="design" name="domain" onChange={(e)=>handelDomain(e)} checked={domain=="design"} value="design" className="border"/>
                    </div>
                     <div className="flex items-center justify-around  space-x-8 mr-1.5"> 
                <label htmlFor="marketing">Marketing</label>
                <input type="radio" id="marketing" name="domain" onChange={(e)=>handelDomain(e)} checked={domain=="marketing"}  value="marketing"/>
                </div>
                
                </fieldset>
                <label htmlFor="message">Why you want to join our Project:</label>
                <textarea id="message" name="message" rows="4" onChange={(e)=>handelMessage(e)} value={message} required className="border"></textarea>
                
                <button type="submit"  className="bg-amber-100">Submit</button>
            </form>
        </div>
    );
}
export default Form;