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
  
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
