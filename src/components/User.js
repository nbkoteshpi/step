import React from "react";
import { useState } from "react";

const User = (props) => {
    const {name, location, contact} = props;
    const [count] = useState(44); 
    const [count2] = useState(33);
    console.log('Function - ', props ); 
  return (
    <>
      <div className="user-card">
      <h3>Functional:</h3>
        <p>Count:<b>{count}</b></p>
        <p>Count:<b>{count2}</b></p>
        <p>User name: {name} </p>
        <p>Location: {location} </p>
        <a href="#">Contact: {contact} </a>
      </div>
    </>
  );
};

export default User;