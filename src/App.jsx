import React from 'react'
import Atividades from './components/Atividades';
import Contato from './components/Contato';
import Home from './components/home';
import NavBar from './components/NavBar';
import Sante from './components/Sante';
import Servicos from './components/Servico';
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div>
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
      </div>
    </>
  )
}

export default App;