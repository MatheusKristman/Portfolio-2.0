/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

import contactTag from '../../../images/contact-tag.svg';

const schema = yup.object({
  name: yup.string().required('Nome invalido!'),
  email: yup.string().email('Insira um e-mail valido').required('Email invalido!'),
  subject: yup.string().required('Assunto invalido!'),
  message: yup.string().required('Mensagem invalida!'),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    emailjs.send('service_cfsw8vs', 'template_t06igzm', data, 'tzDYWfWfbYyyOE7o8').then(
      (result) => console.log(result.text),
      (error) => console.log(error.text)
    );
  };

  // criar mensagem de envio quando clicar para enviar mensagem

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
