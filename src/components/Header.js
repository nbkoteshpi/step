import React from 'react';
import {LOGO_URL} from './../utils/constants';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
  // let btnName = 'Login';
  const[btnName, setBtnName] = useState('Logout');
  // it will re-render whole header component 

    return (
      <div className="nav-container">
        <img src={LOGO_URL} alt="logo" height="50px" />
        <div>
          <ul>
            <li>
              <Link exact to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <button
                className="btn-login"
                onClick={() => { (btnName === 'logout') ? setBtnName("Login") : setBtnName("logout");
                console.log('clicked - ',btnName) }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
    };

  export default Header;