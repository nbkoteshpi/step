import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="nav-container">
    <img
      src="https://cdn-thumbs.barewalls.com/abstract-initial-letter-f-and-n-logo-in_bwc101699638.jpg"
      alt="logo"
      height="50px"
    />
    <div>
      <ul>
        <li>Menu item</li>
        <li>Menu item</li>
        <li>Menu item</li>
        <li>Menu item</li>
        <li>Menu item</li>
        <li>
          <a href="#" rel="noopener noreferrer">
            Profile
          </a>
        </li>
      </ul>
    </div>
  </div>
);
const resList = [
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
      resName:'Himachal',
      cuisineName:['cuisines1', '','noodles','cuisines3','cuisines4'],
      rating:4.3,
      costForTwo:'50000'
    }
  },
  {
    data:{
      resName:'KFC',
      cuisineName:['palav', 'cuisines1','cuisines2','cuisines3','cuisines3'],
      rating:3.5,
      costForTwo:'40000'
    }
  },
  {
    data:{
      resName:'KFC',
      cuisineName:['palav', 'cuisines1','cuisines2','cuisines3','cuisines4'],
      rating:3.5,
      costForTwo:'40000'
    }
  }
]
const ResCard = (props) => {
  const { resData } = props;
  const {resName, cuisineName, rating, costForTwo} = resData?.data;
  
  // console.log(resData);
  return (
    <>
      <div className="res-card">
        <img
          height="150px"
          src="https://tse4.mm.bing.net/th/id/OIP.4p1Osp9E-j5U1tyCG5odnAHaEK?pid=ImgDet&rs=1"
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


const Body = () => (
  <div className="res-card-container">
    {/* <ResCard resData={resList[0]} />  - Without loop function - map()*/}

    
{resList.map((restaurant)=>(
    <ResCard resData={restaurant} />
))}
    {/* <ResCard
      resName="biryani"
      cuisineName="fast food"
      rating="4.5"
      deliveryTime="1hr"
    />  */}
  </div>
);

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// import React from 'react';
// import  ReactDOM  from 'react-dom/client';

// // const heading = React.createElement('h2', {id:'heading'}, "Hello step project"); // Using React
// // const heading = <h2>Hello jsx content</h2> // Using JSX
// const Heading = ()=> (
// <h2>Hello jsx content</h2>
// ); // Using JSX

// // const heading = ()=> {return <h2>Hello jsx content</h2>} // Using JSX

// console.log(Heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Heading />);


// const ResCard = ({ resName, cuisineName, deliveryTime, rating }) => {
//   return (
//     <>
//       <div className="res-card">
//         <img
//           height="150px"
//           src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/08/846004-zomato-dna.jpg"
//           alt="banner"
//         />
//         <h3>{resName}</h3>
//         <p>{cuisineName}</p>
//         <div className="stars">{rating}</div>
//         <p className="time">{deliveryTime}</p>
//       </div>
//     </>
//   );
// };

// const ResCard = (props) => {
//   return (
//     <>
//       <div className="res-card">
//         <img
//           height="150px"
//           src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/08/846004-zomato-dna.jpg"
//           alt="banner"
//         />
//         <h3>{props.resName}</h3>
//         <p>{props.cuisineName}</p>
//         <div className="stars">{props.rating}</div>
//         <p className="time">{props.deliveryTime}</p>
//       </div>
//     </>
//   );
// };
// { resName, cuisineName, deliveryTime, rating }