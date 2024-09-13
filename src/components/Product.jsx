import React from 'react'
import { useParams } from 'react-router-dom';
const Product = () => {
     // Utiliser le hook useParams pour obtenir l'id de l'URL
  const { id } = useParams();

  return (
    <div>
      <h1>Détails du produit</h1>
      <p>Vous regardez le produit avec l'ID : {id}</p>
    </div>
  )
}

export default Product
