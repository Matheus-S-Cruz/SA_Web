import { Link } from "react-router-dom";
import logo from "../images/sante.png";
import cronograma from "../images/cronograma.png";
import lista from "../images/lista.png";
import perfil from "../images/perfil.png";
import sair from "../images/sair.png";
import buscar from "../images/buscar.png";
import "../App.css";

function SidebarCuidador() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="/home" className="sidebar-link">
          <div className="sidebar-logo">
            <img src={logo} alt="logo-sante" className="logosante"/>
          </div>
        </Link>
        <Link to="/cuidador" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={perfil} alt="perfil" />
          </div>
          <span className="sidebar-text">Ver Perfil</span>
        </Link>
        <Link to="/buscar" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={buscar} alt="buscar" />
          </div>
          <span className="sidebar-text">Buscar</span>
        </Link>
        <Link to="/clientes" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={lista} alt="lista" />
          </div>
          <span className="sidebar-text">Lista de Clientes</span>
        </Link>
        <Link to="/cronogramacuidador" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={cronograma} alt="cronograma" />
          </div>
          <span className="sidebar-text">Cronogramas</span>
        </Link>
        <Link to="/home" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={sair} alt="sair" />
          </div>
          <span className="sidebar-text">Sair</span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarCuidador;