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
          <h2 > {card.name} </h2>
          <div className="card-info">
            
            <p><strong className="text-red">Так/Ні:</strong> {card.yes}</p>
            <p><strong className="text-red">Загальне значення:</strong> {card.default}</p>
            <p><strong className="text-red">Перевернута карта:</strong> {card.revers}</p>
            <p><strong className="text-red">Відносини:</strong> {card.relations}</p>
            <p><strong className="text-red">Кар’єра:</strong> {card.career}</p>
            <p><strong className="text-red">Здоров’я:</strong> {card.health}</p>


          </div>
          </div>

      
            <VscChromeClose  className="close-modal" onClick={toggleModal}/>
 

        </div>

      </div>
      
    </div>
  );
}

export default Modal;
