// src/components/ButtonRegister.js
import React from 'react';
import {Link} from "react-router-dom"

const ButtonLogin = ({ onClick }) => {
  return (
    <div class="button">
    <button onClick={onClick}> login
    {/*<Link to="/login">Login</Link>*/}
    </button>
    </div> 
  );
};

export default ButtonLogin;
