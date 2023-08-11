import React from 'react';
import {LOGO_URL} from './../utils/constants';

const Header = () => (
    <div className="nav-container">
      <img
        src={LOGO_URL}
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

  export default Header;