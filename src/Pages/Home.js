import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <article className="home section__padding">
      <div className="content text">
        <h1>Ласкаво просимо до додатку 🎴TarotCards </h1>
        <br />
        <p>
          Цей додаток призначений для тих, хто цікавиться Таро, але не завжди
          має при собі картки. Тепер ви можете користуватися Таро гаданням прямо
          зі свого пристрою.
        </p>

        <h2>Як користуватися:</h2>
        <div className="horizontalLine" />

        <ul>
          <li>
            На головній сторінці, виберіть
            <strong className="text-red">CПИСОК КАРТ</strong>. Тут ви знайдете
            повний перелік карт Таро.
          </li>
          <li>
            У <strong className="text-red">CПИСОК КАРТ</strong>, ви можете
            шукати карту за назвою або просто розгорнути весь список карт.
          </li>
          <li>
            Для отримання гадання з Таро, перейдіть на сторінку{" "}
            <strong className="text-red">ГАДАННЯ</strong> та натисніть "Гадати".
            Тут ви отримаєте три випадкові карти для гадання.
          </li>
          <li>
            Натисніть на будь-яку карту, щоб дізнатися більше про неї, включаючи
            її значення та вплив на ваше життя.
          </li>
        </ul>

        <div className="horizontalLine" />

        <p>
          Насолоджуйтесь гаданням з Таро та отримуйте цінні відповіді на ваші
          питання. Бажаємо вам гарних гадань!
        </p>
      </div>
    </article>
  );
}

export default Home;
