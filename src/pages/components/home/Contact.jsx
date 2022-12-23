/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import contactTag from '../../../images/contact-tag.svg';

function Contact() {
  return (
    <section className="contact wrapper">
      <div className="contact__container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-info__title">ME CHAME PARA UM PROJETO COM VOCÊ</h2>
            <span className="contact-info__text">Se preferir outro contato</span>
            <button type="button" className="contact-info__whatsapp">
              <i className="fa-brands fa-whatsapp" />
              (11) 91004-1998
            </button>
          </div>

          <div className="contact-form">
            <form className="contact-form__form" action="POST">
              <div className="name-wrapper">
                <label htmlFor="name">Nome</label>
                <input type="text" className="name-input" id="name" name="name" />
              </div>
              <div className="email-wrapper">
                <label htmlFor="email">Email</label>
                <input type="text" className="email-input" id="email" name="email" />
              </div>
              <div className="subject-wrapper">
                <label htmlFor="subject">Assunto</label>
                <input type="text" className="subject-input" id="subject" name="subject" />
              </div>
              <div className="message-wrapper">
                <label htmlFor="message">Mensagem</label>
                <textarea className="message-input" id="message" name="message" />
              </div>
              <button type="submit" className="submit-btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <img className="contact-tag" src={contactTag} alt="Tag do contato" />
      </div>
    </section>
  );
}

export default Contact;
