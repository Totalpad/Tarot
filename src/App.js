import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import cardsInfo from "./CardsInfo";
import Modal from "./components/Modal";
import Footer from "./Footer";

function App() {
  const [cardName, setCardName] = useState("");
  const [modalCard, setModalCard] = useState(null);

  const filteredCards = cardsInfo.filter((card) => card.name === cardName);

  const [modal, setModal] = useState(false);

  const toggleModal = (card) => {
    setModal(!modal);
    setModalCard({
      name: card.name,
      img: card.img,
      yes: card.yes,
      default: card.default,
      revers: card.revers,
      relations: card.relations,
      career: card.career,
      health: card.health,
    });
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="App">
      <nav>
        <SearchBar cardName={cardName} setCardName={setCardName} />
      </nav>

      <main className="">
        <ul className="card-container">
          {cardName === "" // Check if cardName is empty
            ? cardsInfo.map((card) => (
                <li
                  key={card.id}
                  className="card"
                  onClick={() => toggleModal(card)}
                >
                  <img src={card.img} alt={card.name} />
                </li>
              ))
            : filteredCards.map((card) => (
                <li
                  key={card.id}
                  className="card"
                  onClick={() => toggleModal(card)}
                >
                  <img src={card.img} alt={card.name} />
                </li>
              ))}
        </ul>

        {modal && <Modal toggleModal={toggleModal} card={modalCard} />}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
