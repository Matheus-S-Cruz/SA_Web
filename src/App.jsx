import Contato from './components/Contato';
import Home from './components/Home';
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
import Buscar from './components/Buscar';
import LoginCliente from './components/LoginCliente';
import LoginCuidador from './components/LoginCuidador';
import LoginAdmin from './components/LoginAdmin';
import Admin from './components/Admin';
import AdminClientes from './components/AdminClientes';
import AdminCuidadores from './components/AdminCuidadores';

function App() {
  return (
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
        <Route path='buscar' element={<Buscar />} />
        <Route path="login/cliente" element={<LoginCliente />} />
        <Route path="login/cuidador" element={<LoginCuidador />} />
        <Route path='login/admin' element={<LoginAdmin />} />
        <Route path='adminPage' element={<Admin />} />
        <Route path='admin/clientes' element={<AdminClientes />} />
        <Route path='admin/cuidadores' element={<AdminCuidadores />} />
      </Routes>
    </div>
  );
}

export default App;