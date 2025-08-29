import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/"><img src="/images/hubdeautomacao.png" className="navbar-image" alt="Hub de Automação" /></NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/servicos" className={({ isActive }) => isActive ? "active" : ""}>Serviços</NavLink></li>
        <li><NavLink to="/projetos" className={({ isActive }) => isActive ? "active" : ""}>Projetos</NavLink></li>
        <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre Nós</NavLink></li>
        <li><NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
