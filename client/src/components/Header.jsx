import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header(){
    
 

       
    

    return (
        <div className="flex flex-row justify-between  bg-gray-100 w-full h-20" >
            <h1 className="text-3xl font-bold  text-center mt-4">
                Basic Registration App
            </h1>
            <ul className="flex flex-row items-center justify-center space-x-4 mt-4 mb-4">
                <Link to="/" className="hover:bg-amber-200 rounded-sm">Home</Link>
                <Link to="/register" className="hover:bg-amber-200 rounded-sm">Registration form</Link>
                <Link to='/admin' className="hover:bg-amber-200 rounded-sm">Admin View</Link>
            </ul>
            <div className="flex flex-col items-center justify-center space-x-2 m-4">

            <Link to={'/signin'}><FaRegUserCircle className="h-8 w-8"/></Link>
            <p>access to Admin</p>
            </div>

        </div>
    );
}
export default Header;