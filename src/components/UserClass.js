import React from "react";
import props from "props";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { count: 0 };
  }
  render() {
    const { name, location, contact, count } = this.props;
    return (
      <>
        <div className="user-card bg-red">
          <p>
            Count <b>{count}</b>
          </p>
          <h3>User name: {name} </h3>
          <p>Location: {location} </p>
          <a href="#">Contact: {contact} </a>
        </div>
      </>
    );
  }
}

export default UserClass;
