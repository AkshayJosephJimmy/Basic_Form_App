import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";



function AdminSignUp() {
    const navigate = useNavigate();
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
function handleSubmit(e) {
    e.preventDefault();
    const AdminData={username, email, password};
    axios.post('http://localhost:5700/signup', AdminData)
    .then((response) => {
        console.log("Admin registered successfully:", response.data);
        // Optionally, reset the form fields
        setUsername("");
        setEmail("");
        setPassword("");
        navigate('/signin'); // Redirect to login page after successful signup
        
    })
    .catch((error) => {
        console.error("Error registering admin:", error);
        // Handle error appropriately, e.g., show an error message to the user
    });
}


  return (
    <div className="flex  justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">UserName</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="UserName"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder=" email"
              onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default AdminSignUp;