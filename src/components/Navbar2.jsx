import React from 'react';
import {Link} from "react-router-dom"

const Navbar2 = ({ onClick }) => {
  return (
    <nav className="navbar" >
      <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', padding: 0 }}>
        {/* Logo */}
        <li id="imagelogo" style={{ marginRight: '20px', marginLeft: '20px' }}>
          <img src="/ShoesShop.svg" style={{ width: '150px', height: '120px' }} alt="Logo" />
        </li>

        {/* Favori Icon */}
        <li id="favori" style={{ marginRight: '20px' }}>
          <img src="/favori.png" style={{ width: '54px', height: '54px' }} alt="favori" />
        </li>

        {/* Shopping Bag Icon */}
        <li id="imagesac" style={{ marginRight: '20px' }}>
          <img src="/sac-a-main.png" style={{ width: '54px', height: '54px' }} alt="sac" />
        </li>

        {/* Search Bar */}
        <li className="searchbar" style={{ flexGrow: 1, marginRight: '20px' }}>
          <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
        </li>

        {/* Sign-in Button */}
        <li className="button" style={{ marginRight: '20px' }}>
          <button onClick={onClick}>
          <Link to="/login">Login</Link>
          </button>
        </li>
        <li>
           {/* register Button */}
        <li className="button" style={{ marginRight: '20px' }}>
          <button onClick={onClick}>
          <Link to="/register">register</Link>
          </button>
        </li>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
