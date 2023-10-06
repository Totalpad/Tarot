import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import "./modal.css";

function Modal({ toggleModal, card }) {

  return (
    <div className="modal">

      <div className="overlay" onClick={toggleModal}>

        <div className="modal-content">


          <img src={card.img} alt={card.name} />

          <div className="bg-card-info">
          <h2> {card.name} </h2>
          <div className="card-info">
            
            <p><em>Так/Ні:</em> {card.yes}</p>
            <p><em>Загальне значення:</em> {card.default}</p>
            <p><em>Перевернута карта:</em> {card.revers}</p>
            <p><em>Відносини:</em> {card.relations}</p>
            <p><em>Кар’єра:</em> {card.career}</p>
            <p><em>Здоров’я:</em> {card.health}</p>


          </div>
          </div>

      
            <VscChromeClose  className="close-modal" onClick={toggleModal}/>
 

        </div>

      </div>
      
    </div>
  );
}

export default Modal;
