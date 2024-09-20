// src/components/ButtonRegister.js
import React from 'react';
import {Link} from "react-router-dom"

const ButtonRegister = ({ onClick }) => {
  return (
    <div class="button">
    <button onClick={onClick}> {/*</div>style={styles.button}>*/}
      S'identifier
    </button>
    </div> 
  );
};

export default ButtonRegister;
