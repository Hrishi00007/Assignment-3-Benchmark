import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import DashBoard from "./components/DashBoard.jsx";
import NavBar from "./components/NavBar.jsx";
import Register from "./components/Register.jsx";
import LogOut from "./components/LogOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    loader: () => {
      let item = localStorage.getItem("isAuthenticated");
      console.log("item", item);
      if (item !== "authenticated") {
        return redirect("/");
      }
      return null;
    },
    element: (
      <>
        <NavBar />
        <DashBoard />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <NavBar />
        <Register />
      </>
    ),
  },
  {
    path: "/logout",
    element: (
      <>
        <NavBar />
        <LogOut />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
