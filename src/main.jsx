import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/Login.jsx";
import Home from "./pages/Home.jsx"
import Register from "./components/register.jsx";
import ButtonRegister from "./components/ButtonLogin.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import EnvoiLivraison from "./pages/EnvoiLivraison.jsx";
import Apropos from "./pages/Apropos.jsx";
import Privacy from "./pages/Privacy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/home2",
    element: <home2/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/buttonregister",
    element: <ButtonRegister/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },

  {
    path: "/services",
    element: <Services/>,
  },

  {
    path: "/envoilivraison",
    element: <EnvoiLivraison/>,
  },

  {
    path: "/apropos",
    element: <Apropos/>,
  },

  {
    path: "/privacy",
    element: <Privacy/>,
  },
  
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
