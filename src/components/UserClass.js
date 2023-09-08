import React from "react";
import props from "props";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 0, count2:2 };
  }
  render() {
    const { name, location, contact, count, count2 } = this.props;
    console.log('Class - ', this.props );

    return (
      <>
        <div className="user-card bg-red">
          <h3>Classic:</h3>
          <p>
            Count: <b>{count}</b>
          </p>
          <p>
            Count2: <b>{count2}</b>
          </p>
          <p>User name: {name} </p>
          <p>Location: {location} </p>
          <a href="#">Contact: {contact} </a>
        </div>
      </>
    );
  }
}

export default UserClass;
