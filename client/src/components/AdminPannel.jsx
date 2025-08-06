import { use } from "react";
import React, { useState, useEffect } from 'react';
import axios from "axios";


function AdminPannel(){
    const [interns, setInterns] = useState([]);
    useEffect(() => {
         axios.get('http://localhost:5700/interns')
    .then((response) => {
        console.log("Interns data fetched successfully:", response.data);
        setInterns(response.data);
    })
    .catch((error) => {
        console.error("Error fetching interns data:", error);
        // Handle error appropriately, e.g., show an error message to the user
    });
        
    }, []);
   
 

    return (<div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Intern Registrations</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">#</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Domain</th>
              <th className="border px-4 py-2 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {interns.map((intern, index) => (
              <tr key={intern._id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{intern.name}</td>
                <td className="border px-4 py-2">{intern.email}</td>
                <td className="border px-4 py-2">{intern.domain}</td>
                <td className="border px-4 py-2">{intern.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}
export default AdminPannel;