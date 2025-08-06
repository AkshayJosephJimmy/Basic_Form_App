import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function AdminLogin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

return(
    <div>
        <h1 className="text-3xl font-bold text-center mt-4">Admin Login</h1>
        <p className="text-center">Please enter your credentials to access the admin panel.</p>
        <form className="flex flex-col items-center justify-center space-y-4 p-6">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e)=>handleEmail(e)} value={email}required className="border p-2 w-full max-w-md" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e)=>handlePassword(e)} value={password} required className="border p-2 w-full max-w-md" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
        <p>Click <Link to={'/signup'}><span className='underline bg-amber-100'>Register</span></Link> if You are a new Admin</p>
        </form>

    </div>

)
    
}
export default AdminLogin;