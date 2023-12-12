import About from "../../routes/About/About";
import Contact from "../../routes/Contact/Contact";
import Ecoprints from "../../routes/Ecoprints/Ecoprints";
import Faqs from "../../routes/Faqs/Faqs";
import Home from "../../routes/Home/Home";

export const NavRoutes = [
  {
    path: "",
    element: <Home />,
    meta: { name: "Home" },
  },
  {
    path: "about",
    element: <About />,
    meta: { name: "About Us" },
  },
  {
    path: "ecoprint",
    element: <Ecoprints />,
    meta: { name: "Eco Prints" },
  },
  {
    path: "faq",
    element: <Faqs />,
    meta: { name: "FAQ" },
  },
  {
    path: "contact",
    element: <Contact />,
    meta: { name: "Contact Us" },
  },
];
