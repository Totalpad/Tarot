import React, { useState, useEffect } from "react";
import {
  Routes,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CardsList from "./Pages/CardsList";
import RandomCards from "./Pages/RandomCards";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Links from "./Links";

function App() {
  const [cardName, setCardName] = useState("");
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    
      <div className="App">
        <NavBar>
          {currentRoute === '/cardsList' ? <SearchBar setCardName={setCardName}/> : <div></div>}
          <Links />
        </NavBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cardsList"
            element={<CardsList cardName={cardName} />}
          />
          <Route path="/randomCards" element={<RandomCards />} />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>

  );
}

export default App;
