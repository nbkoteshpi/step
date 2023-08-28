import React from "react";
import { useState } from "react";

const User = (props) => {
    const {name, location, contact} = props;
    const [count] = useState(0); 
  return (
    <>
      <div className="user-card">
        <p>Count:<b>{count}</b></p>
        <h3>User name: {name} </h3>
        <p>Location: {location} </p>
        <a href="#">Contact: {contact} </a>
      </div>
    </>
  );
};

export default User;