import ListeShoes from "./components/listeShoes.jsx";
import Login from "./components/login";
import LogosWeb from "./components/logosWeb.jsx";
import Home from "./components/Home.jsx";
import Home2 from "./components/Home2.jsx";
const App = () => {
  return (
    <>
    <div>
      <Login />
     <LogosWeb/>
     <ListeShoes/>
     <Home/>
     <Home2/>

      {/*<img src="/logo.jpg" alt="LogoWeb"></img> permet de comment une ligne en react*/} 
    </div>
    </>
  );
};

export default App;



