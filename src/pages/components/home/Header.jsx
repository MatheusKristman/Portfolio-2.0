/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../images/logo.svg';

export const Context = createContext();

function Header() {
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

  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = useContext(Context);

  function executeScroll(ref) {
    handleMenuClick();

    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

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
              <li onClick={() => executeScroll(homeRef)} className="menu-item">
                <span>Início</span>
                <div className="menu-line" />
              </li>
              <li onClick={() => executeScroll(projectsRef)} className="menu-item">
                <span>Projetos</span>
                <div className="menu-line" />
              </li>
              <li onClick={() => executeScroll(skillsRef)} className="menu-item">
                <span>Habilidades</span>
                <div className="menu-line" />
              </li>
              <li onClick={() => executeScroll(aboutRef)} className="menu-item">
                <span>Sobre</span>
                <div className="menu-line" />
              </li>
            </ul>
          </nav>
        </div>

        <div className="menu-contact-btn">
          <button type="button" onClick={() => executeScroll(contactRef)} className="contact-btn">
            Fale Comigo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
