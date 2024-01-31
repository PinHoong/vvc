// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Envelope from "./components/envelope";
import ResponsiveAppBar from "./components/navbar";
import "./App.css"; // If you have global styles

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Envelope/>}/>
        <Route path="/about" element={<ResponsiveAppBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
