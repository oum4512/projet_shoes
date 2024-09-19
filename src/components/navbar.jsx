import React from 'react';
import LogosWeb from "./logosWeb.jsx";
import Navbarlinks from './navbarlinks';
import Login from "./login.jsx";
const navbar = () => {
  return (
    <div id="navbar">
     <LogosWeb/> 
     <Navbarlinks/>
     <Login/>
    </div>
  )
}

export default navbar
