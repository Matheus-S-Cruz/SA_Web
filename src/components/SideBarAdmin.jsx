import { Link } from "react-router-dom";
import logo from "../images/sante.png";
import lista from "../images/lista.png";
import perfil from "../images/perfil.png";
import sair from "../images/sair.png";
import "../App.css";

function SidebarAdmin() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="/home" className="sidebar-link">
          <div className="sidebar-logo">
            <img src={logo} alt="logo-sante" className="logosante"/>
          </div>
        </Link>
        <Link to="../adminPage" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={perfil} alt="perfil" />
          </div>
          <span className="sidebar-text">Voltar</span>
        </Link>
        <Link to="../admin/clientes" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={lista} alt="lista" />
          </div>
          <span className="sidebar-text">Lista de Clientes</span>
        </Link>
        <Link to="../admin/cuidadores" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={lista} alt="lista" />
          </div>
          <span className="sidebar-text">Lista de Cuidadores</span>
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

export default SidebarAdmin;