import React, { useState, useEffect } from "react";
import {DUMMY_DATA_JSON} from './../utils/dummyJson';
import axios from "axios";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

//   async function fetchMenu() {
//     const response = await fetch("https://dummyjson.com/users");
//     const json = await response.json();
//     console.log(json);
//     setResInfo(json);
// }

  // useEffect(()=> {
  //   fetchMenu();
  // }, [])

// useEffect(() => {
//   async function fetchMenu() {
//     const response = await fetch('https://dummyjson.com/users');

//     const data = await response.json();
//     setResInfo(data.data);
//   }

//   fetchMenu();
// }, []);
console.log(data.data)

 
  return (
    <>
      <div className="resMenu">
        <p>Name of the Restaurant</p>
        <p>Menu:</p>
        <ul>
          <li>Biryani</li>
          <li>Fast food</li>
          <li>Burger</li>
        </ul>
         {/* {resInfo.users.map((item) =>(
                        <h4 key={item.users.id}>{item.users.image}</h4>
        ))
        } */}
      </div>
    </>
  );
};
export default RestaurantMenu;
