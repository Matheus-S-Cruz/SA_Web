import React from 'react'
import Atividades from './components/Atividades';
import Contato from './components/Contato';
import Home from './components/home';
import NavBar from './components/NavBar';
import Sante from './components/Sante';
import Servicos from './components/Servico';
import './App.css'

function App() {

  return (
    <>
      <div>
      <NavBar/>
      <Home/>
      <br/>
      <Sante/>
      <br/>
      <Servicos/>
      <br/>
      <Atividades/>
      <Contato/>
      </div>
    </>
  )
}

export default App;