import React, { useState } from 'react';
import Logo from '../../../images/logo.svg';

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function handleMenuClick() {
    setIsMenuClicked(!isMenuClicked);
  }

  const checkIfMenuIsClicked = isMenuClicked ? 'menu-box menu-active' : 'menu-box';
  const changeMenuIcon = isMenuClicked ? 'menu-container__btn menu-clicked' : 'menu-container__btn';

  return (
    <header className="header wrapper">
      <div className="header__wrapper">
        <div className="logo-container">
          <img src={Logo} alt="Logo MK" />
        </div>

        <div className="menu-container">
          <button type="button" onClick={handleMenuClick} className={changeMenuIcon}>
            <span className="bar" />
          </button>

          <div className={checkIfMenuIsClicked}>
            <ul className="menu">
              <li className="menu-item">
                <span>Início</span>
                <div className="menu-line" />
              </li>
              <li className="menu-item">
                <span>Projetos</span>
                <div className="menu-line" />
              </li>
              <li className="menu-item">
                <span>Habilidades</span>
                <div className="menu-line" />
              </li>
              <li className="menu-item">
                <span>Sobre</span>
                <div className="menu-line" />
              </li>
            </ul>
          </div>
        </div>

        <div className="menu-contact-btn">
          <button type="button" className="contact-btn">
            Fale Comigo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
