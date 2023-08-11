import React from "react";
import ResCard from "./ResCard";
// import { RES_LIST as allCardData } from "../utils/mockData";

const Body = () => {
 
  let listOfAllRest = [
    {
      data:{
        resName:'KFC',
        cuisineName:['palav', 'cuisines1','cuisines2','cuisines3','cuisines4'],
        rating:3.5,
        costForTwo:'40000'
      }
    },
    {
      data:{
        resName:'Dominos',
        cuisineName:['palav', 'cuisines1','cuisines2','cuisines3','cuisines4'],
        rating:3.5,
        costForTwo:'40000'
      }
    },
    {
      data:{
        resName:'ZOMATO',
        cuisineName:['palav', 'cuisines1','cuisines2','cuisines3','cuisines4'],
        rating:3.5,
        costForTwo:'40000'
      }
    },
  ]
  console.log(listOfAllRest);
  return (
    <>
      <div className="filter">
        <button
          type="button"
          onClick={() => {
            listOfAllRest = listOfAllRest.filter((temp) => {
              temp.data.rating = 3;
            });
            
          }}
          className="btn btn-primary"
        >
          Filter
        </button>
      </div>
      <div className="res-card-container">
        {listOfAllRest?.map((cardData, index) => (
          <ResCard
            resData={cardData}
            key={index + "restaurantNumber"}
            id={index + index * 2 + "bcd"}
          />
        ))}
        {/* <ResCard
            resName="biryani"
            cuisineName="fast food"
            rating="4.5"
            deliveryTime="1hr"
          />  */}
      </div>
    </>
  );
};
export default Body;
