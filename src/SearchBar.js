import React, { useEffect, useRef, useState } from "react";

function SearchBar({ cardName, setCardName }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardName(name);
  };

  const resetBtn = (e) => {
    e.preventDefault();
    setCardName("");
    setName("");
  };

  const inputEl = useRef(null);

  useEffect(() => {

    const callback = (e) => {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        setName("")
        inputEl.current.focus();
      }
    };

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);

  }, [setName]);

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <button type="button" onClick={resetBtn} className="resetBtn">
          Reset
        </button>

        <input
          className="search-input"
          list="cards"
          value={name}
          ref={inputEl}
          placeholder="Chose Card"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        
        <button type="submit" className="submitBtn">
          Search
        </button>

        <datalist id="cards">
          <option value="Дурак" />
          <option value="Маг I"> Маг 1</option>
          <option value="Верховна Жриця II"> Верховна Жриця 2</option>
          <option value="Імператриця III">Імператриця 3</option>
          <option value="Імператор IV">Імператор 4</option>
          <option value="Верховний жрець V">Верховний жрець 5</option>
          <option value="Закохані VI">Закохані 6</option>
          <option value="Колісниця VII">Колісниця 7</option>
          <option value="Сила VIII">Сила 8</option>
          <option value="Відлюдник IX">Відлюдник 9</option>
          <option value="Колесо Фортуни X">Колесо Фортуни 10</option>
          <option value="Справаделивість XI">Справаделивість 11</option>
          <option value="Повішений XII">Повішений 12</option>
          <option value="Смерть XIII">Смерть 13</option>
          <option value="Помірність XIV">Помірність 14</option>
          <option value="ДьявоДиявол XV">Диявол 15</option>
          <option value="Вежа XVI">Вежа 16</option>
          <option value="Зірка XVII">Зірка 17</option>
          <option value="Місяць XVIII">Місяць 18</option>
          <option value="Сонце XIX">Сонце 19</option>
          <option value="Суд XX">Суд 20</option>
          <option value="Мир XXI">Мир 21</option>
          <option value="Король Пентаклів" />
          <option value="Королева Пентаклів" />
          <option value="Лицар Пентаклів" />
          <option value="Паж Пентаклів" />
          <option value="Пентаклі I">Пентаклі 1</option>
          <option value="II Пентаклів">Пентаклів 2</option>
          <option value="III Пентаклів">Пентаклів 3</option>
          <option value="IV Пентаклів">Пентаклів 4</option>
          <option value="V Пентаклів">Пентаклів 5</option>
          <option value="VI Пентаклів">Пентаклів 6</option>
          <option value="VII Пентаклів">Пентаклів 7</option>
          <option value="VIII Пентаклів">Пентаклів 8</option>
          <option value="IX Пентаклів">Пентаклів 9</option>
          <option value="X Пентаклів">Пентаклів 10</option>;
          <option value="Король Мечів" />
          <option value="Королева Мечів" />
          <option value="Лицар Мечів" />
          <option value="Паж Мечів" />
          <option value="Мечі I">Мечі 1</option>
          <option value="II Мечів">Мечів 2</option>
          <option value="III Мечів">Мечів 3</option>
          <option value="IV Мечів">Мечів 4</option>
          <option value="V Мечів">Мечів 5</option>
          <option value="VI Мечів">Мечів 6</option>
          <option value="VII Мечів">Мечів 7</option>
          <option value="VIII Мечів">Мечів 8</option>
          <option value="XI Мечів">Мечів 9</option>
          <option value="X Мечів">Мечів 10</option>
          <option value="Король Кубків" />
          <option value="Королева Кубків" />
          <option value="Лицар Кубків" />
          <option value="Паж Кубків" />
          <option value="Кубок I"></option>
          <option value="II Кубків">Кубків 2</option>
          <option value="III Кубків">Кубків 3</option>
          <option value="IV Кубків">Кубків 4</option>
          <option value="V Кубків">Кубків 5</option>
          <option value="VI Кубків">Кубків 6</option>
          <option value="VII Кубків">Кубків 7</option>
          <option value="VIII Кубків">Кубків 8</option>
          <option value="IX Кубків">Кубків 9</option>
          <option value="X Кубків">Кубків 10</option>
          <option value="Король Жезлів" />
          <option value="Королева Жезлів" />
          <option value="Лицар Жезлів" />
          <option value="Паж Жезлів" />
          <option value="Жезл I">Жезл 1</option>
          <option value="II Жезлів">Жезлів 2</option>
          <option value="III Жезлів">Жезлів 3</option>
          <option value="IV Жезлів">Жезлів 4</option>
          <option value="V Жезлів">Жезлів 5</option>
          <option value="VI Жезлів">Жезлів 6</option>
          <option value="VII Жезлів">Жезлів 7</option>
          <option value="VIII Жезлів">Жезлів 8</option>
          <option value="IX Жезлів">Жезлів 9</option>
          <option value="X Жезлів">Жезлів 10</option>
        </datalist>
      </form>
    </div>
  );

  // return (
  //   <nav class="navbar navbar-expand-lg  bg-primary-subtle"> bg-body-tertiary
  //     <div class="container-fluid ">
  //       <div class=" navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">

  //         <form class="d-flex "  onSubmit={handleSubmit}>
  //           <input
  //             class="form-control me-2"
  //             type="search"
  //             placeholder="Search"
  //             value={name}
  //             aria-label="Search"
  //             onChange={(e) => {
  //               setName(e.target.value);
  //             }}
  //           />
  //           <button class="btn btn-outline-success" type="submit">
  //             Search
  //           </button>
  //           <button class="btn btn-outline-danger"  onClick={resetBtn}>
  //             Reset
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </nav>
  // );
}

export default SearchBar;
