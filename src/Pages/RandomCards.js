import React, { useState } from "react";
import "../styles/RandomCards.css";
import cardsInfo from "../CardsInfo";
import Modal from "../components/Modal/Modal";
import ImageComponent from "../components/ImageComponent";
import Button from "../components/Button/Button";

function RandomCards() {
  const [randomCards, setRandomCards] = useState([]);

  const [modalCard, setModalCard] = useState(null);
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
  function generateRandomCards() {
    const randomCardIndices = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 79)
    );

    const randomCardsList = randomCardIndices
      .map((index) => cardsInfo[index])
      .filter((card) => card);

    return randomCardsList;
  }

  function handleNew() {
    setRandomCards([]);
  }

  function handleStart() {
    if (randomCards.length > 0) return;

    const randomCardsList = generateRandomCards();
    setRandomCards(randomCardsList);
  }

  return (
    <div className="randomCards">
      <h1>Гадання собі</h1>

      {randomCards.length > 0 ? (
        <Button onHandleClick={handleNew}>Знову</Button>
      ) : (
        <Button onHandleClick={handleStart}>Гадaти</Button>
      )}

      {randomCards.length > 0 && (
        <div className="showCards  ">
          <h2>👇 Ось ваші карти 👇</h2>
          <ul className="card-container section__padding ">
            {randomCards
              .filter((card) => card) // Filter out any undefined cards
              .map((card) => (
                <li
                  key={card.id}
                  className="card"
                  onClick={() => toggleModal(card)}
                >
                  <ImageComponent src={card.img} alt={card.name} />
                </li>
              ))}
          </ul>
        </div>
      )}

      {randomCards.length === 0 && (
        <div className="start">
          <p>
            Перед тим як натиснути кнопку 👆<strong>Гадати</strong>👆, задайте
            собі питання.
          </p>
        </div>
      )}

      {modal && <Modal toggleModal={toggleModal} card={modalCard} />}
    </div>
  );
}

export default RandomCards;
