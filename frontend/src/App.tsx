import "./App.css";
import React,{ Suspense } from "react";
import ReactDOM, { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { NavRoutes } from "./components/NavBar/NavRoutes";
import { ScrollProvider } from "./utils/context/ScrollContext";
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/components/Button/Translation/i18n'; // Assuming you have an i18n configuration

// ReactDOM.render(
  
//     <App />
//   document.getElementById('root')
// );

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
      <I18nextProvider i18n={i18n}>
        <ScrollProvider>
          <RouterProvider router={router} />
        </ScrollProvider>
        </I18nextProvider>
      </div>
    </Suspense>
  );
}

export default App;
