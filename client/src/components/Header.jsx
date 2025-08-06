import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header(){
    let isLoggedIn = false; // This should be replaced with actual authentication logic
    return (
        <div className="flex flex-row justify-between  bg-gray-100 w-full h-20" >
            <h1 className="text-3xl font-bold  text-center mt-4">
                Basic Registration App
            </h1>
            <ul className="flex flex-row items-center justify-center space-x-4 mt-4 mb-4">
                <Link to="/">Home</Link>
                <Link to="/register">Registration form</Link>
                <li>Admin View</li>
            </ul>
            <div className="flex flex-col items-center justify-center space-x-2 m-4">

            <Link to={'/signin'}><FaRegUserCircle className="h-8 w-8"/></Link>
            {isLoggedIn?<p>name</p>:<p>Admin Login</p>}
            </div>

        </div>
    );
}
export default Header;