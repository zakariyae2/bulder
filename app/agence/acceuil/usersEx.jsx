import React from 'react';
import './users.css'; // Import the CSS file

const users = [
  {
    userp: "User A",
    message: "This tool made it so easy to create a beautiful website for my business!",
  },
  {
    userp: "User B",
    message: "The customer support team was incredibly helpful and responsive.",
  },
];

const Users = () => {
  return (
    <main className="hid">
      <div className="features-section">
        <h2 className="features-title">Users experience</h2>
        <div className="users-container">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <h3 className="user-title">{user.userp}</h3>
              <p className="user-description">{user.message}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Users;