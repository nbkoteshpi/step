import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/Contact',
        element:<Contact />
      },
      {
        path:'/restaurants/:resid',
        element:<RestaurantMenu />
      }
    ],
    errorElement:<Error/>
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



// This sis for ref
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