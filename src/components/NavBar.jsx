import React from "react";
import logo from '../assets/WeDo.jpg'
import "../css/navbar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Wedo"/>
        <div className="navbar-left">
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/produtos">Início</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/sobre-nos">Planos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <a href="/cart" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </a>
          <a href="/account" className="user-icon">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
