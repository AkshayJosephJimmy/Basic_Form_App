function Form(){

    return(
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
            <h1 className="font-bold underline">Intern/Volenter Register Form</h1>
            <p>Please fill out the form below to register for the event.</p>
            <form className="flex flex-col space-y-4 w-full max-w-md">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required  className="border"/>
                
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required className="border"/>

                <fieldset className="flex flex-col space-y-2">
                    <legend>Select Domain for Intern/Volen</legend>

                 <div className="flex items-center justify-around space-x-8"> 

                <label htmlFor="coding">Coding</label>
                <input type="radio" id="coding" name="domain" value="coding" className="border "/>
                 </div>
                  <div className="flex items-center justify-around space-x-8 "> 
                <label htmlFor="design">Design</label>
                <input type="radio" id="design" name="domain" value="design" className="border"/>
                    </div>
                     <div className="flex items-center justify-around  space-x-8 mr-1.5"> 
                <label htmlFor="marketing">Marketing</label>
                <input type="radio" id="marketing" name="domain" value="marketing"/>
                </div>
                
                </fieldset>
                <label htmlFor="message">Why you want to join our Project:</label>
                <textarea id="message" name="message" rows="4" required className="border"></textarea>
                
                <button type="submit" className="bg-amber-100">Submit</button>
            </form>
        </div>
    );
}
export default Form;