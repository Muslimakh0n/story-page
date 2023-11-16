import React from "react";
import "../pages/MensPage.css";
import Men from "../assets/images/header-side-boy.png";
const MensPage = () => {
  return (
    <div className="container">
      <div className="App">
        <div className="side-img">
          <img src={Men} alt="Side Image" />
        </div>
        <div className="content">
          <h1>Универсальное решение для ваших нужд в одежде</h1>
          <p>
            Все, что вам нужно, чтобы найти идеальный предмет одежды, есть в
            Lode X. Мы предлагаем одежду ведущих брендов и редактирование
            изображений в ней.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MensPage;
