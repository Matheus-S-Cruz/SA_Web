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
import ListarCuidadores from './components/ListarCuidadores';
import ListarClientes from './components/ListarClientes';
import CronogramaCliente from './components/CronogramaCliente';
import CronogramaCuidador from './components/CronogramaCuidador';

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
          <Route path="cuidadores" element={<ListarCuidadores />} />
          <Route path="clientes" element={<ListarClientes />} />
          <Route path='cronogramacliente' element={<CronogramaCliente />} />
          <Route path='cronogramacuidador' element={<CronogramaCuidador />} />
        </Routes>
      </div>
    </>
  )
}

export default App;