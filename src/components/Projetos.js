import React from 'react';

const projects = [
  {
    image: '/images/Dashboard.png',
    title: 'Dashboard de Análise de Dados',
    description: 'Desenvolvimento de um dashboard interativo para visualização e análise de dados de marketing em tempo real.',
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

const Projetos = () => {
  return (
    <section className="projetos-page">
      <div className="page-header">
        <h2>Nossos Projetos</h2>
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
    </section>
  );
}

export default Projetos;