import React from 'react';
import { Link } from 'react-router-dom';

// Data for services preview
const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48"><g fill="var(--primary-color)"><circle cx="8" cy="38" r="3"/><circle cx="16" cy="40" r="3"/><circle cx="24" cy="33" r="3"/><circle cx="32" cy="35" r="3"/><circle cx="40" cy="31" r="3"/><path d="m39.1 29.2l-7.3 3.7l-8.3-2.1l-8 7l-7-1.7l-1 3.8l9 2.3l8-7l7.7 1.9l8.7-4.3z"/></g><g fill="#00BCD4"><circle cx="8" cy="20" r="3"/><circle cx="16" cy="22" r="3"/><circle cx="24" cy="15" r="3"/><circle cx="32" cy="20" r="3"/><circle cx="40" cy="8" r="3"/><path d="M38.3 6.9c-2.1 3.2-5.3 8-6.9 10.4c-1.2-.7-3.1-2-6.4-4l-1.3-.8l-8.3 7.3l-7-1.7l-1 3.9l9 2.3l7.7-6.7c2.6 1.6 5.8 3.6 6.5 4.1l.5.5l.9-.1c1.1-.1 1.1-.1 9.5-12.9z"/></g></svg>
    ),
    title: 'Automação de Marketing',
    description: 'Alcance seus clientes de forma eficaz e personalizada com nossas ferramentas de automação.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#b2c1c0" d="M53.1 38.6h-7.5v3.8h7.5c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9H6.3c-1 0-1.9.8-1.9 1.9c0 1 .8 1.9 1.9 1.9h46.9c3.1 0 5.6-2.5 5.6-5.6c0-3.3-2.6-5.8-5.7-5.8m1.4-12.9l-3.7-.3c0-.1 2.3-13.8 2.8-16.6c.3-1.6.9-6.1 6.6-6.1v3.8c-2.3 0-2.6.9-2.8 2.6c-.6 2.8-2.9 16.4-2.9 16.6"/><path fill="var(--primary-color)" d="M54.7 12.3H4c-1.9 0-2.2 1.8-1.9 2.8l5.7 25.4c.3 1 1.3 1.8 2.4 1.8H50c1 0 2-.8 2.2-1.9l4.2-26.3c.1-.9-.7-1.8-1.7-1.8M6.9 20.8l-1-3.8c-.1-.5.2-.9.7-.9h7.1c.5 0 1 .4 1 .9l.4 3.8c.1.5-.3.9-.8.9H8c-.5 0-1-.4-1.1-.9m3.2 9.3c-.5 0-1-.4-1.2-.9l-.7-2.9c-.1-.5.2-.9.7-.9h5.7c.5 0 1 .4 1 .9l.3 2.8c.1.5-.3.9-.8.9c.1.1-5 .1-5 .1m6 8.5h-3.9c-.5 0-1-.4-1.2-.9l-.7-2.9c-.1-.5.2-.9.7-.9h4.5c.5 0 1 .4 1 .9l.3 2.8c.2.5-.2 1-.7 1m11.5-1c0 .5-.4.9-.9.9h-4.9c-.5 0-1-.4-1-.9l-.3-2.8c-.1-.5.3-.9.8-.9h5.4c.5 0 .9.4.9.9zm0-8.4c0 .5-.4.9-.9.9h-5.8c-.5 0-1-.4-1-.9l-.3-2.8c-.1-.5.3-.9.8-.9h6.3c.5 0 .9.4.9.9zm0-8.4c0 .5-.4.9-.9.9H20c-.5 0-1-.4-1-.9l-.5-3.8c-.1-.5.3-.9.8-.9h7.3c.5 0 .9.4.9.9c.1 0 .1 3.8.1 3.8m10.2 16.8c-.1.5-.5.9-1 .9h-4.4c-.5 0-.9-.4-.9-.9v-2.8c0-.5.4-.9.9-.9h4.9c.5 0 .9.4.8.9zm.9-8.4c-.1.5-.5.9-1 .9h-5.3c-.5 0-.9-.4-.9-.9v-2.8c0-.5.4-.9.9-.9h5.8c.5 0 .9.4.8.9zm.9-8.4c-.1.5-.5.9-1 .9h-6.2c-.5 0-.9-.4-.9-.9V17c0-.5.4-.9.9-.9h6.8c.5 0 .9.4.8.9zm8.7 16.8c-.1.5-.6.9-1.1.9h-4.8c-.5 0-.9-.4-.8-.9l.3-2.8c.1-.5.5-.9 1-.9H48c.5 0 .9.4.8.9zm1.3-8.4c-.1.5-.6.9-1.1.9h-5.3c-.5 0-.9-.4-.8-.9l.3-2.8c.1-.5.5-.9 1-.9h5.5c.5 0 .9.4.8.9zm1.3-8.4c-.1.5-.6.9-1.1.9h-5.7c-.5 0-.9-.4-.8-.9l.4-3.8c.1-.5.5-.9 1-.9h5.9c.5 0 .9.4.8.9z"/><circle cx="12.3" cy="56.4" r="5.6" fill="#62727a"/><circle cx="12.3" cy="56.4" r="2.8" fill="#fff"/><circle cx="46.1" cy="56.4" r="5.6" fill="#62727a"/><path fill="#fff" d="M48.9 56.4c0 1.6-1.3 2.8-2.8 2.8c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.8 2.8-2.8s2.8 1.2 2.8 2.8"/><path fill="#62727a" d="M61.1 2h-2.8v5.6h2.8c.5 0 .9-.4.9-.9V2.9c0-.5-.4-.9-.9-.9"/></svg>
    ),
    title: 'Automação de Vendas',
    description: 'Otimize seu funil de vendas e feche mais negócios com nosso sistema de automação de vendas.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48"><path fill="var(--primary-color)" d="M24 5C14.1 5 6 13.1 6 23v15h4V23c0-7.7 6.3-14 14-14s14 6.3 14 14v15h4V23c0-9.9-8.1-18-18-18"/><path fill="#37474F" d="M38 43h-4V31h4c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4m-28 0h4V31h-4c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4"/></svg>
    ),
    title: 'Automação de Atendimento',
    description: 'Ofereça um suporte ao cliente mais rápido e eficiente com chatbots e automação de tickets.',
  },
];

// Data for projects preview
const projects = [
  {
    image: '/images/Dashboard.png',
    title: 'Dashboard de Análise de Dados',
    description: 'Um dashboard interativo para visualização e análise de dados de marketing em tempo real.',
  },
  {
    image: '/images/E-commerce.png',
    title: 'Plataforma de E-commerce',
    description: 'Criação de uma plataforma de e-commerce completa com automação de pagamentos e gestão de estoque.',
  },
  {
    image: '/images/Sistema de CRM.png',
    title: 'Sistema de CRM Personalizado',
    description: 'Implementação de um sistema de CRM para otimizar o relacionamento com o cliente e o funil de vendas.',
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <h1>Automação de Redes Sociais</h1>
        <p>Otimize sua presença digital conectando todas as suas redes sociais com automações inteligentes.</p>
        <button className="cta-button">Comece Agora</button>
      </header>

      {/* Benefícios da Automação */}
      <section className="benefits">
        <h2>Benefícios da Automação de Redes Sociais</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
            <h3>WhatsApp</h3>
            <p>Automatize suas interações no WhatsApp com mensagens automáticas, integração de CRMs e mais.</p>
          </div>
          <div className="benefit-card">
            <img src="/images/instagram.png" alt="Instagram" />
            <h3>Instagram</h3>
            <p>Gerencie suas mensagens, posts e interações no Instagram com facilidade, sem perder nenhum detalhe.</p>
          </div>
          <div className="benefit-card">
            <img src="/images/facebook.png" alt="Facebook" />
            <h3>Facebook</h3>
            <p>Integre seu Facebook com outras ferramentas e automatize tarefas como agendamento de posts e respostas automáticas.</p>
          </div>
          <div className="benefit-card">
            <img src="/images/twitter.png" alt="Twitter" />
            <h3>Twitter</h3>
            <p>Automatize suas postagens no Twitter, interaja com seus seguidores e otimize sua presença na plataforma.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services">
        <div className="home-section-header">
          <h2>Nossos Serviços</h2>
          <p>Soluções de automação para impulsionar sua presença digital.</p>
        </div>
        <div className="servicos-grid">
          {services.map((service, index) => (
            <div className="servico-card" key={index}>
              <div className="servico-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/servicos" className="cta-button">Ver todos os serviços</Link>
      </section>

      {/* Projects Section */}
      <section className="home-projects">
        <div className="home-section-header">
          <h2>Projetos em Destaque</h2>
          <p>Conheça alguns dos projetos que desenvolvemos para nossos clientes.</p>
        </div>
        <div className="projeto-grid">
          {projects.map((project, index) => (
            <div className="projeto-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="projeto-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projetos" className="cta-button">Ver todos os projetos</Link>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Comece a Automação Agora!</h2>
        <p>Integre todas as suas redes sociais e automatize processos para aumentar sua produtividade e engajamento.</p>
        <button className="cta-button">Iniciar Automação</button>
      </section>
    </div>
  );
}

export default Home;
