import React from 'react';

const Navbar2 = ({ onClick }) => {
  return (
    <div className="navbar">
      <div id="imagelogo"> 
        <img src="/ShoesShop.svg" style={{ width: '150px', height: '120px' }} alt="Logo" />
      </div>   
      <div id="favori">
        <img src="/favori.png" style={{ width: '85px', height: '85px' }} alt="favori" />
      </div>
      <div id="imagesac">
        <img src="/sac-a-main.png" style={{ width: '85px', height: '85px' }} alt="sac" />
      </div>
      <div className="button">
        <button onClick={onClick}>
          S'identifier
        </button>
      </div>    
    </div>
  );
}

export default Navbar2;

