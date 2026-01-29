import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './app.scss'

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Masterclass from "./pages/Masterclass";
import Coursess from "./pages/Coursess";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      {/* NAVBAR ALWAYS VISIBLE */}
      <div className="app">
        <Navbar />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masterclass" element={<Masterclass />} />

          <Route path="/coursess" element={<Coursess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
