import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Entre em Contato</h2>
      <p>Fale com nossa equipe através dos seguintes canais:</p>
      <div className="contact-links">
        {/* Substituindo texto por imagem (ícone do Instagram) */}
        <a href="https://www.instagram.com/hubdeautomacao" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="/images/instagram.png" alt="Instagram" className="contact-icon" />
        </a>

        {/* Outros links */}
        <a href="mailto:contato@hubdeautomacao.com.br" className="contact-link">
          <img src='/images/email.png' alt='Email' className='contact-icon' />
        </a>
        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="/images/whatsapp-icon.png" alt='WhatsApp' className='contact-icon' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
