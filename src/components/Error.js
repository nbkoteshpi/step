import React from "react";
import {useReactRouter} from "react-router-dom";

const Error = () => {
//   const errDetails = useReactRouter();
//   console.log(errDetails);
  return (
    <>
      <h2 style={{ textAlign: "center", padding: "100px 0 20px 0" }}>
        Oops, Something went wrong
      </h2>
      <p style={{ textAlign: "center", padding: "20px 0" }}>
        {'Error page goes here'}
      </p>
    </>
  );
};
export default Error;
