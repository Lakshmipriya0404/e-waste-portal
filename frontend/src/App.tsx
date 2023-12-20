import "./App.css";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { NavRoutes } from "./components/NavBar/NavRoutes";
import { ScrollProvider } from "./utils/context/ScrollContext";

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
        <ScrollProvider>
          <RouterProvider router={router} />
        </ScrollProvider>
      </div>
    </Suspense>
  );
}

export default App;
