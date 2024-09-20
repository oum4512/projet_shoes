// src/App.js
import React, { useState, useEffect } from 'react';
import ListeShoes from "./components/ListeShoes";
import Login from "./assets/pages/Login";
import LogosWeb from "./components/LogosWeb";
import Home from "./assets/pages/Home";
import Home2 from "./components/Home2";
import ButtonRegister from "./assets/pages/ButtonRegister";

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
      <LogosWeb /> <ButtonRegister />
      <div class="storage">
      <h1>Bienvenue</h1>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Entrez votre nom"
        />
        <button onClick={handleSave}>Sauvegarder</button>
      </div>
        <Login />
        <ListeShoes />
        <Home />
        <Home2 />
        
    </>
  );
};

export default App;
