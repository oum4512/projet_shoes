// src/App.js
import React, { useState, useEffect } from 'react';
import ListeShoes from "./components/ListeShoes";
//import Login from "./components/Login";
//import LogosWeb from "./components/LogosWeb";
import Home from "./pages/Home";
import Home2 from "./components/Home2";
//import ButtonRegister from "./components/ButtonRegister";
import Navbar2 from './components/Navbar2';
const App = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Récupérer la donnée depuis localStorage lors du chargement du composant
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSave = () => {
    // Stocker la donnée dans localStorage
    localStorage.setItem('username', username);
  };

  return (
    <>
       <Navbar2/>
      {/*<LogosWeb />
      <ButtonRegister />*/}
      <div class="storage">
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Entrez votre nom"
        />
        <button onClick={handleSave}>Sauvegarder</button>
      </div>
       {/* <Login />*/}
        <ListeShoes />
        <Home />
        <Home2 />
        
    </>
  );
};

export default App;
