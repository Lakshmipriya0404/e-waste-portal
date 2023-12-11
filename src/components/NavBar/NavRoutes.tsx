import About from "../../routes/About/About";
import Home from "../../routes/Home/Home";

export const NavRoutes = [
  {
    path: "",
    element: <Home />,
    meta: { name: "home" },
  },
  {
    path: "about",
    element: <About />,
    meta: { name: "about" },
  },
];
