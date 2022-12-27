/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../images/logo.svg';

function AlternativeHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/');
  }

  function handleMenuClick() {
    setIsMenuClicked(!isMenuClicked);
  }

  const checkIfMenuIsClicked = isMenuClicked ? 'menu-box menu-active' : 'menu-box';
  const changeMenuIcon = isMenuClicked ? 'menu-container__btn menu-clicked' : 'menu-container__btn';

  return (
    <header className="header wrapper">
      <div className="header__wrapper">
        <div className="logo-container">
          <img onClick={navigateToHome} src={Logo} alt="Logo MK" />
        </div>

        <div className="menu-container">
          <button type="button" onClick={handleMenuClick} className={changeMenuIcon}>
            <span className="bar" />
          </button>

          <nav className={checkIfMenuIsClicked}>
            <ul className="menu">
              <li onClick={navigateToHome} className="menu-item">
                <span>Voltar para o início</span>
                <div className="menu-line" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AlternativeHeader;
