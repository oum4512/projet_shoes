import ListeShoes from "./components/listeShoes.jsx";
import Login from "./components/login";
import LogosWeb from "./components/logosWeb.jsx";
const App = () => {
  return (
    <>
    <div>
      <Login />
     <LogosWeb/>
     <ListeShoes/>
      {/*<img src="/logo.jpg" alt="LogoWeb"></img> permet de comment une ligne en react*/} 
    </div>
    </>
  );
};

export default App;



