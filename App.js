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

const ResCard = (props) => {
  const { resName, cuisineName, deliveryTime, rating } = props;
  return (
    <>
      <div className="res-card">
        <img
          height="150px"
          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/08/846004-zomato-dna.jpg"
          alt="banner"
        />
        <h3>{resName}</h3>
        <p>{cuisineName}</p>
        <div className="stars">{rating}</div>
        <p className="time">{deliveryTime}</p>
      </div>
    </>
  );
};

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
const Body = () => (
  <div className="res-card-container">
    <ResCard
      resName="biryani"
      cuisineName="fast food"
      rating="3"
      deliveryTime="35min"
    />

    <ResCard
      resName="Dhum biryani"
      cuisineName="Thandori"
      rating="4"
      deliveryTime="40min"
    />

    <ResCard
      resName="Mutton"
      cuisineName="fast food"
      rating="5"
      deliveryTime="50min"
    />

    <ResCard
      resName="biryani"
      cuisineName="fast food"
      rating="4.5"
      deliveryTime="1hr"
    />
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
