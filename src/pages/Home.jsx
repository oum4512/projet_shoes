import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  
  return (
    
    <>
       
    <div>
      <h1>Bienvenue sur Fun Baskets</h1>
      <p>D'incroyable baskets vous attendent ! </p>
      
       <p><Link to={"/"}>Route vers l'accueil</Link></p>
       
    </div>
    </>
  )
}

export default Home
