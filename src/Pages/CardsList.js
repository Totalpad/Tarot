import React, { useState } from "react";
import cardsInfo from "../CardsInfo";
import Modal from "../components/Modal";
import ImageComponent from "../components/ImageComponent";

function CardsList({cardName}) {


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
    <main>
      <ul className="card-container">
        {cardName === "" // Check if cardName is empty
          ? cardsInfo.map((card) => (
              <li
                key={card.id}
                className="card"
                onClick={() => toggleModal(card)}
              >
                <ImageComponent src={card.img} alt={card.name} />
              </li>
            ))
          : filteredCards.map((card) => (
              <li
                key={card.id}
                className="card"
                onClick={() => toggleModal(card)}
              >
                <ImageComponent src={card.img} alt={card.name} />
              </li>
            ))}
      </ul>

      {modal && <Modal toggleModal={toggleModal} card={modalCard} />}
    </main>
  );
}

export default CardsList;
