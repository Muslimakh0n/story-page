import React from "react";
import "../components/Header.css";
import Logo from "../assets/icons/logo.svg";
import Heart from "../assets/icons/nav_heart.svg";
import Person from "../assets/icons/nav_person.svg";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav_wrapper">
          <div className="nav_left">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav_middle">
            <ul className="nav-list">
              <li className="nav-item">Мужское</li>
              <li className="nav-item">Женское</li>
              <li className="nav-item">Детские</li>
              <li className="nav-item">Безопасная сделка</li>
              <li className="nav-item">Правило Пользование</li>
            </ul>
          </div>
          <div className="nav_right">
            <div className="img">
              <img src={Heart} alt="Like" />
            </div>
            <img src={Person} alt="Person Icon" />
            <button className="nav_right-bttn">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
