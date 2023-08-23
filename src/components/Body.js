import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import { RES_LIST as resList } from "../utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {
  // React state variable
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState(resList);
  const [searchText, setSearchText] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState(resList)
  console.log("body rendered");

  // useEffect(() => {
  //   fetchData();
  //   console.log("useEffect called");
  // }, []);

 

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.239907453306518&lng=86.98135815560819&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   // convert in to string - not working code
  //   const json = await data.json();
  //   console.log("json file text goes here....--", json);
  //   setListOfAllRestaurants(json.cards[1].card.card);
  // };

  // // Added loader -  Conditional rendering
  // if (listOfAllRestaurants.length === 0) {
  //   return <h3>Loading...</h3>;
  // }

  return listOfAllRestaurants.length === 0 ? (
    <>
    <p>No Data loaded...</p>
    <Shimmer />
    </>
  ) : (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="input"
            className="search-input"
            placeholder="Search here..."
            value={searchText}
            onChange={(e)=>{setSearchText(e.target.value)}}
          />
          <button 
          className="search-btn"
          onClick={
            ()=>{
              const filteredRestList = listOfAllRestaurants.filter(
                (result) => result.data.resName.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRestList(filteredRestList);
            }
          }
          >Top Rated</button>
        </div>
        <button
          type="button"
          onClick={() => {
            const filteredList = listOfAllRestaurants.filter(
              (res) => res.data.rating > 4
            );
            setListOfAllRestaurants(filteredList);
            // listOfAllRestaurants = listOfAllRestaurants.filter(
            //   (res) => res.data.rating > 3
            // );
            // console.log('filtered', listOfAllRestaurants)
          }}
          className="btn btn-primary"
        >
          Filter
        </button>
      </div>
      <div className="res-card-container">
        {filteredRestList?.map((cardData, index) => (
          <ResCard
            resData={cardData}
            key={index + "restaurantNumber"}
            id={index + index * 2 + "bcd"}
          />
        ))}
      </div>
    </>
  );
};
export default Body;
