// src/components/ButtonRegister.js
import React from 'react';
import {Link} from "react-router-dom"

const ButtonRegister = ({ onClick }) => {
  return (
    <div class="bouton">
    <button onClick={onClick} style={styles.button}>
      S'identifier
    </button>
    </div> 
  );
};



const styles = {
  button: {
    backgroundColor: 'white', // couleur de fond
    border: 'none', // pas de bordure
    padding: '10px 25px', // espacement interne
    textAlign: 'center', // alignement du texte
    textDecoration: 'none', // pas de soulignement
    display: 'inline-block', // affichage en ligne
    cursor: 'pointer', // curseur en forme de main
    borderRadius: '4px', // coins arrondis
  },
};

export default ButtonRegister;
