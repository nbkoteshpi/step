import React from 'react';
import { RES_LIST } from '../utils/mockData';
import { CDN_URL } from '../utils/constants';

  const ResCard = (props) => {
    // console.log(props); 
    const { resData,id,key } = props;
    const {resName, cuisineName, rating, costForTwo} = resData?.data;
    return (
      <>
        <div className="res-card" key={123} id={`${id}-kotiannaher`}>
          <img
            height="150px"
            src={CDN_URL}
            alt="banner"
          />
          <h3>{resName}</h3>
          <p>{cuisineName.join(', ')}</p> {/* // instead( resData.data. we replaced destructure) */}
          <div className="stars">{rating} Stars</div>
          <p className="time">${costForTwo / 100} For two</p> {/* // We are dividing for getting pisa to rupees */}
        </div>
      </>
    );
  };

export default ResCard;
