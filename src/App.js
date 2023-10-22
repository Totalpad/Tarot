import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Components
import Home from "./Pages/Home";
import CardsList from "./Pages/CardsList";
import RandomCards from "./Pages/RandomCards";
import Footer from "./Footer";
import NavBar from "./NavBar";


function App() {
  const [cardName, setCardName] = useState("");

  return (
    <div className="App">
      <NavBar setCardName={setCardName} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardsList" element={<CardsList cardName={cardName} />} />
        <Route path="/randomCards" element={<RandomCards />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
