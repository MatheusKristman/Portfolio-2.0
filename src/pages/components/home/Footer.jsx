/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from './Header';

import Logo from '../../../images/logo.svg';

function Footer() {
    const { homeRef, projectsRef, skillsRef, aboutRef } = useContext(Context);

    function scrollToElement(ref) {
        window.scrollTo({
            left: 0,
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    }

    const navigate = useNavigate();

    function navigateTo(url) {
        navigate(url);
    }

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer-wrapper">
                    <div className="logo-links-container">
                        <div className="logo-box">
                            <img className="logo" src={Logo} alt="Logo MK" />
                            <span className="phrase">
                                Resolva o problema, não o sintoma.
                            </span>
                        </div>

                        <div className="nav-box">
                            <nav className="nav-menu">
                                <ul className="menu-items">
                                    <li
                                        onClick={() => scrollToElement(homeRef)}
                                        className="menu-item"
                                    >
                                        <span>Início</span>
                                        <div className="menu-line" />
                                    </li>
                                    <li
                                        onClick={() =>
                                            scrollToElement(projectsRef)
                                        }
                                        className="menu-item"
                                    >
                                        <span>Projetos</span>
                                        <div className="menu-line" />
                                    </li>
                                    <li
                                        onClick={() =>
                                            scrollToElement(skillsRef)
                                        }
                                        className="menu-item"
                                    >
                                        <span>Habilidades</span>
                                        <div className="menu-line" />
                                    </li>
                                    <li
                                        onClick={() =>
                                            scrollToElement(aboutRef)
                                        }
                                        className="menu-item"
                                    >
                                        <span>Sobre</span>
                                        <div className="menu-line" />
                                    </li>
                                </ul>
                            </nav>

                            <span
                                onClick={() => navigateTo('/TermosECondicoes')}
                                className="terms-link"
                            >
                                Termos e Condições
                            </span>
                            <span
                                onClick={() =>
                                    navigateTo('/PoliticaDePrivacidade')
                                }
                                className="privacy-link"
                            >
                                Política de Privacidade
                            </span>
                        </div>
                    </div>

                    <div className="socials-copyright-container">
                        <div className="socials-box">
                            <div className="socials-line" />
                            <a
                                className="linkedin"
                                href="https://www.linkedin.com/in/matheus-kristman/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <i className="fa-brands fa-linkedin" />
                            </a>
                            <a
                                className="instagram"
                                href="https://www.instagram.com/tinzin.exe/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <i className="fa-brands fa-instagram" />
                            </a>
                            <a
                                className="github"
                                href="https://github.com/MatheusKristman"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <i className="fa-brands fa-github" />
                            </a>
                            <div className="socials-line" />
                        </div>

                        <div className="copyright-box">
                            <span>2022 - © Matheus Kristman</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
