/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Context } from './Header';

import contactTag from '../../../images/contact-tag.svg';

const schema = yup.object({
  name: yup.string().min(5, 'Nome precisa ter pelo menos 5 caracteres.').required('Nome invalido!'),
  email: yup.string().email('Insira um e-mail valido').required('Email invalido!'),
  subject: yup.string().min(5, 'Assunto precisa ter pelo menos 5 caracteres.').required('Assunto invalido!'),
  message: yup.string().min(10, 'Mensagem precisa ter pelo menos 10 caracteres.').required('Mensagem invalida!'),
});

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [messageSended, setMessageSended] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [hideMessageAnimation, setHideMessageAnimation] = useState(false);

  const { contactRef } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function showAlert() {
    setIsSending(false);
    setMessageSended(true);
  }

  function hideAlert() {
    setHideMessageAnimation(true);
  }

  function removeAlert() {
    setHideMessageAnimation(false);
    setMessageSended(false);
  }

  function hideAlertFromScreen() {
    const timeToHideMessage = 5000;
    const timeToRemoveMessage = 6000;

    setTimeout(() => {
      hideAlert();
    }, timeToHideMessage);

    setTimeout(() => {
      removeAlert();
    }, timeToRemoveMessage);
  }

  function messageSendSuccessful(result) {
    console.log(result);
    showAlert();
    hideAlertFromScreen();
  }

  function messageSendFailed(error) {
    console.log(error);
    showAlert();
    setErrorMessage(true);
    hideAlertFromScreen();
  }

  const onSubmit = (data) => {
    setIsSending(true);

    emailjs.send('service_cfsw8vs', 'template_t06igzm', data, 'tzDYWfWfbYyyOE7o8').then(
      (result) => messageSendSuccessful(result.text),
      (error) => messageSendFailed(error.text)
    );
  };

  function whatsappRedirect() {
    window.open('https://wa.me/5511910041998', '_blank');
  }

  return (
    <section ref={contactRef} className="contact wrapper">
      <div className="contact__container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-info__title">ME CHAME PARA UM PROJETO COM VOCÊ</h2>
            <span className="contact-info__text">Se preferir outro contato</span>
            <button onClick={whatsappRedirect} type="button" className="contact-info__whatsapp">
              <i className="fa-brands fa-whatsapp" />
              (11) 91004-1998
            </button>
          </div>

          <div className="contact-form">
            {messageSended && (
              <div className={hideMessageAnimation ? 'form-result hide' : 'form-result'}>
                <span>{errorMessage ? 'Houve um erro no envio da mensagem, tente novamente' : 'Mensagem enviada com sucesso'}</span>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form__form" action="POST">
              <div className="name-wrapper">
                <label htmlFor="name">Nome</label>
                <input {...register('name')} type="text" className="name-input" id="name" autoCorrect="off" />
                {errors.name && <small className="form-error">{errors.name.message}</small>}
              </div>
              <div className="email-wrapper">
                <label htmlFor="email">Email</label>
                <input {...register('email')} type="text" className="email-input" id="email" autoCorrect="off" />
                {errors.email && <small className="form-error">{errors.email.message}</small>}
              </div>
              <div className="subject-wrapper">
                <label htmlFor="subject">Assunto</label>
                <input {...register('subject')} type="text" className="subject-input" id="subject" autoCorrect="off" />
                {errors.subject && <small className="form-error">{errors.subject.message}</small>}
              </div>
              <div className="message-wrapper">
                <label htmlFor="message">Mensagem</label>
                <textarea {...register('message')} className="message-input" id="message" />
                {errors.message && <small className="form-error">{errors.message.message}</small>}
              </div>
              <button type="submit" className="submit-btn">
                {isSending ? 'Enviando' : 'Enviar'}
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
