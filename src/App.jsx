import React from 'react'
import Contato from './components/Contato';
import Home from './components/home';
import NavBar from './components/NavBar';
import Servicos from './components/Servico';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './Home';
import PerfilCuidador from './components/PerfilCuidador';
import PerfilCliente from './components/PerfilCliente'
import Cadastro from './components/Cadastro'

function App() {

  return (
    <>
      <div className='App'>
        <Routes>
            <Route path="/" element={
              <>
                <NavBar />
                <Home />
                <Servicos />
                <Contato />
                <Footer />
              </>
            } />
          <Route path="home" element={<HomePage />} />
          <Route path="user" element={<PerfilCliente />} />
          <Route path="cuidador" element={<PerfilCuidador />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </>
  )
}

export default App;