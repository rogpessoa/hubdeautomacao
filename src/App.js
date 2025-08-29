import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Servicos from './components/Servicos';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
