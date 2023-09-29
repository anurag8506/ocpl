import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="section">

         <div>
      <h1 className="user-details">User Details</h1>

      <ul className="list">
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-card">
              <p>Name: {user.name}</p>
              <button onClick={() => handleViewDetails(user)}>
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedUser && (

        <div className="box">
          <h2>Details for {selectedUser.name}</h2>
          <p>Designation: {selectedUser.company.name}</p>
          <p>
            Address: {selectedUser.address.street},{selectedUser.address.suite},
            {selectedUser.address.city},{selectedUser.address.zipcode}
          </p>
          <p>State: {selectedUser.address.state}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phones: {selectedUser.phone}</p>
          <p>Country: {selectedUser.address.country}</p>
        </div>


      )}
      </div>
    </div>

  );
}

export default App;
