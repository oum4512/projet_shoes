import React from 'react';

const ListeShoes = () => {
  // Créer un tableau d'objets représentant des chaussures
  const shoes = [
    {
      marque: "Nike",
      modele: "Air TM Max",
      taille: 45,
      couleur: "Blanc",
      prix: "76€",
      imageUrl: "https://images.unsplash.com/photo-1699901232384-f1646fb2a8da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      marque: "Nike",
      modele: "Flyease",
      taille: 46,
      couleur: "Blanc",
      prix: "45€",
      imageUrl: "https://media.istockphoto.com/id/1382165882/fr/photo/basket-sport-blanche-sur-fond-d%C3%A9grad%C3%A9-gris-mode-femme-et-homme-chaussure-de-sport-baskets.jpg?s=2048x2048&w=is&k=20&c=HQsaj6K0s6JLPowEzHhl935E0PEjausegzklSxNdYR0="
    },
    {
      marque: "Puma",
      modele: "Suede Classic",
      taille: 41,
      couleur: "Blanc satin",
      prix: "49€",
      imageUrl: "https://images.unsplash.com/photo-1636718282214-0b4162a154f0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    
    {
        marque: "Nike",
        modele: "Suaden Brown",
        taille: 43,
        couleur: "Rouge",
        prix: "55€",
        imageUrl: "https://images.unsplash.com/photo-1704919266475-aa6302e25209?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        marque: "Puma",
        modele: "braunch",
        taille: 44,
        couleur: "Rouge",
        prix: "79€",
        imageUrl: "https://images.unsplash.com/photo-1609535765688-c2114a1f0e50?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        marque: "Reeboc",
        modele: "Blanc",
        taille: 45,
        couleur: "Rouge Noir",
        prix: "65€",
        imageUrl: "https://images.unsplash.com/photo-1613740105081-e88271c0211f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        marque: "Puma",
        modele: "Classic",
        taille: 46,
        couleur: "Blanc magic",
        prix: "49€",
        imageUrl: "https://images.unsplash.com/photo-1724921195447-1272b4e6d835?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
  ];

  // Convertir le tableau en JSON
  const shoesJSON = JSON.stringify(shoes, null, 2);

  //console.log(shoesJSON);

  return (
    <div>
      {shoes.map((shoe, index) => (
        <div key={index}>
          <h2>{shoe.marque} - {shoe.modele}</h2>
          <p>Taille: {shoe.taille}</p>
          <p>Couleur: {shoe.couleur}</p>
          <p>prix: {shoe.prix}</p>
          <img src={shoe.imageUrl} alt={`${shoe.marque} ${shoe.modele}`} style={{ width: '200px', height: 'auto' }} />
        </div>
      ))}
      
    </div>
  );
}


export default ListeShoes;

