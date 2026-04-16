import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobilemenu, setIsMobileMenu] = useState(false);
  const toogleMenu = () => {
    if (isMobilemenu) {
      setIsMobileMenu(false);
    } else {
      setIsMobileMenu(true);
    }
  };
  return (
    <div className="mainHeader">
      <div className="logo">
        <NavLink to="/">
          <img src="./Logos/logo1.png" alt="Logo moviestuff" />
        </NavLink>
      </div>
      <ul className="menu" style={{ left: isMobilemenu ? "0" : "-100%" }}>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/movies"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Films</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="fav">
            Coup de coeur <i className="fa-solid fa-heart"></i>{" "}
            <span className="badge badge-light">
              {/* {JSON.parse(window.localStorage.favorites).length !== 0
                ? JSON.parse(window.localStorage.favorites).length
                : 0} */}
              {JSON.parse(localStorage.getItem("favorites")) !== null
                ? JSON.parse(localStorage.getItem("favorites")).length
                : 0}
            </span>
          </li>
        </NavLink>
      </ul>
      <i
        className="fa-solid fa-bars mobileMenu"
        onClick={() => toogleMenu()}
      ></i>
    </div>
  );
};

export default Header;
