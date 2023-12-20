import React from "react";
import About from "../../routes/About/About";
import Contact from "../../routes/Contact/Contact";
import Ecoprints from "../../routes/Ecoprints/Ecoprints";
import Faqs from "../../routes/Faqs/Faqs";
import Home from "../../routes/Home/Home";
import Login from "../../routes/Login/Login";
import Signup from "../../routes/Signup/Signup";
import ProducerDashboard from "../../routes/ProducerDashboard/ProducerDashboard";
import ConsumerDashboard from "../../routes/ConsumerDashboard/ConsumerDashboard";
import Estats from "../../routes/Estats/Estats";
import AboutFacilitator from "../../sections/AboutFacilitator/AboutFacilitator";
import FacilityLocator from "../../sections/Locator/FacilityLocator";
import Producer_Signup from "../../routes/Producer_Signup/Producer_Signup";
import Consumer_Signup from "../../routes/Consumer_Signup/Consumer_Signup";

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
    path: "locator",
    element: <FacilityLocator />,
    meta: { name: "Locator" },
  },
  {
    path: "estats",
    element: <Estats />,
    meta: { name: "E-Stats" },
  },
  {
    path: "login",
    element: <Login />,
    meta: { name: "Login" },
  },
  {
    path: "signup",
    element: <Signup />,
    meta: { name: "Sign Up" },
  },
  {
    path: "producer/dashboard",
    element: <ProducerDashboard />,
    meta: { name: "Producer Dashboard" },
  },
  {
    path: "consumer/dashboard",
    element: <ConsumerDashboard />,
    meta: { name: "Consumer Dashboard" },
  },
  {
    path: "producer/dashboard/:id?/about",
    element: <AboutFacilitator />,
    meta: { name: "About Facilitator" },
  },
  {
    path: "producer/signup",
    element: <Producer_Signup />,
    meta: { name: "Producer Signup" },
  },
  {
    path: "consumer/signup",
    element: <Consumer_Signup />,
    meta: { name: "Consumer Signup" },
  },
];
