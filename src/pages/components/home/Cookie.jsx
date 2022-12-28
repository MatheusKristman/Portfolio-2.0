import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function Cookie() {
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookie] = useCookies(['tin']);

  function acceptedCookies() {
    const thirtyDays = 2592000;
    setCookie('tin', true, { path: '/', maxAge: thirtyDays });
  }

  function declinedCookies() {
    const oneDay = 86400;
    setCookie('tin', false, { path: '/', maxAge: oneDay });
  }

  const control = useAnimation();

  const cookieVariant = {
    visible: { opacity: 1, y: 0, display: 'block', transition: { duration: 1.5 } },
    hidden: { opacity: 0, y: 500, transition: { duration: 1.5 }, transitionEnd: { display: 'none' } },
  };

  useEffect(() => {
    function checkIfCookieIsEmpty() {
      if (Object.keys(cookie).length === 0) {
        control.start('visible');
      }
    }

    function checkIfCookieExists() {
      if (cookie.tin) {
        control.start('hidden');
      }
    }

    checkIfCookieIsEmpty();
    checkIfCookieExists();
  }, [control, cookie]);

  return (
    <motion.div variants={cookieVariant} initial="hidden" animate={control} className="cookie">
      <div className="cookie__container">
        <h3 className="title">Este site usa cookies</h3>

        <span className="desc">Meu site usa cookies para garantir que você tenha a melhor experiência usando ele.</span>

        <div className="cookie-wrapper">
          <span className="cookie-privacy">
            Em caso de duvidas acesse <Link to="/PoliticaDePrivacidade">Politicas e Privacidade</Link>.
          </span>

          <div className="cookie-btns">
            <button onClick={declinedCookies} type="button" className="decline-btn">
              Recusar
            </button>
            <button onClick={acceptedCookies} type="button" className="accept-btn">
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cookie;
