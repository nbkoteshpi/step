import React from "react";
import User from "./../components/User";
import UserClass from "./../components/UserClass";
const About = () => {
  return (
    <>
      <div className="p-15">
      <h1>About page</h1>
      <div className="grid-container">
        <User name="NB Kotesh" location="Hyderabad" contact="+91-8099183376" />
        <UserClass
          name="Abhishikth"
          location="Hyderabad"
          contact="+91 8099183376"
        />
      </div>
      </div>
    </>
  );
};

export default About;
