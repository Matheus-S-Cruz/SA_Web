import React from 'react'
import Atividades from './components/Atividades';
import Contato from './components/Contato';
import Home from './components/home';
import NavBar from './components/NavBar';
import Sante from './components/Sante';
import Servicos from './components/Servico';
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import './App.css'

import HomePage from './Home';

function App() {

  return (
    <>
      <div className='App'>
      <Routes>
      <Route path="/" element={
        <>
        <NavBar />
        <Home />
        <hr className="separador" />
        <Sante />
        <hr className="separador" />
        <Servicos />
        <hr className="separador" />
        <Atividades />
        <hr className="separador" />
        <Contato />
        <Footer />
        </>
        } />
        <Route path="home" element={<HomePage />} />
      </Routes>
      </div>
    </>
  )
}

export default App;