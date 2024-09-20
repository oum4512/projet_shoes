import React from 'react';
import LogosWeb from "./LogosWeb.jsx";
import Navbarlinks from './Navbarlinks.jsx';
import Login from "../assets/pages/Login.jsx";
import ButtonRegister from '../assets/pages/ButtonRegister.jsx';
const navbar = () => {
  return (
    <div id="navbar">
     <LogosWeb/> 
     <Navbarlinks/>
     <Login/>
     <ButtonRegister/>
    </div>
  )
}

export default navbar
