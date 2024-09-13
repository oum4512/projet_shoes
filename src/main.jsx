import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./components/login.jsx"
import Home from "./components/Home.jsx"
import register from "./components/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
  {
    path: "/Home",
    element: <div>Home</div>,
  },

  {
    path: "/Home2",
    element: <div>Home2</div>,
  },
  {
    path: "/Register",
    element: <div>Register</div>,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);