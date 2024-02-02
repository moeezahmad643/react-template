import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Navbar, Footer } from "./Section/section.jsx";
import { About, Home, Contact } from "./Pages/page.jsx";

import "./main.css";

document.title = "Home - React Website";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar
      title="MyWebsite"
      logo="myimage.png"
      first="Home"
      second="About"
      third="Contact"
      bg="black"
      color="white"
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer title="MyWebsite" instagram="#" whatsapp="#" facebook="#" />
  </BrowserRouter>
);
