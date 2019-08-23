import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ username }) => (
  <header>
    <div className="logo-container">
      <span className="logo-text">
        Controle de Frequência
        <br />
        Escolar Inteligente
      </span>
    </div>
    <nav>
      <span className="greeting">{username}</span>
      <div className="nav-container">
        <ul className="nav__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Solicitar correção</a>
          </li>
        </ul>
        <a href="#">
          <button type="button">Logout</button>
        </a>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};
