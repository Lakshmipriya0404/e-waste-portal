import "./App.css";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { NavRoutes } from "./components/NavBar/NavRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: NavRoutes,
  },
]);

function App() {
  return (
    <Suspense fallback="...loading">
      <div className="appContainer">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
