import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login.jsx";
import Home from "./components/Home.jsx"
import Register from "./components/register.jsx";
import ButtonRegister from "./components/ButtonRegister.jsx";

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

  {/*{
    path: "/home2",
    element: <Home2/>,
  }*/},
  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/buttonRegister",
    element: <ButtonRegister/>,
  }
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
