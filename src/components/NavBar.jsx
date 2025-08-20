import React from "react";
import logo from '../assets/WeDo.jpg';
import "../css/navbar.css";
import login from '../assets/login.png'

function NavBar() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="WeDo" />
        <div className="navbar-title">
          <strong>WeDo</strong>
          <span>Comunique. Colabore. Crie.</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Início</a></li>
        <li><a href="/produto">Produto</a></li>
        <li><a href="/planos">Planos</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
      <div className="navbar-actions">
        <a href="/login" className="navbar-login">
          <img src={login} alt="Login" style={{ width: 20, height: 20, marginRight: 6 }} />
          Login
        </a>
        <a href="/comecar" className="navbar-btn">Começar</a>
      </div>
    </nav>
  );
}

export default NavBar;
