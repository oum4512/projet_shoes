import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <h1>Bienvenue à la page d'accueil</h1>
      <p>Cliquez sur un produit pour voir plus de détails :</p>
      
       <p><Link to={"/"}>Route vers l'accueil</Link></p>
       
    </div>
  )
}

export default Home
