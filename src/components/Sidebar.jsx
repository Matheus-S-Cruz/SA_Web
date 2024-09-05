import { Link } from "react-router-dom";
import logo from "../images/iconsante.png";
import cronograma from "../images/cronograma.png";
import lista from "../images/lista.png";
import perfil from "../images/perfil.png";
import perfiledit from "../images/perfiledit.png";
import sair from "../images/sair.png";
import "../App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <Link to="/home" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={logo} alt="logo-sante" />
          </div>
          <span className="sidebar-text">Logo</span>
        </Link>
        <Link to="/cuidadores" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={lista} alt="lista" />
          </div>
          <span className="sidebar-text">Lista de Cuidadores</span>
        </Link>
        <Link to="/cronogramas" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={cronograma} alt="cronograma" />
          </div>
          <span className="sidebar-text">Cronogramas</span>
        </Link>
        <Link to="/user" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={perfil} alt="perfil" />
          </div>
          <span className="sidebar-text">Ver Perfil</span>
        </Link>
        <Link to="/useredit" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={perfiledit} alt="perfiledit" />
          </div>
          <span className="sidebar-text">Editar Perfil</span>
        </Link>
        <Link to="/sair" className="sidebar-link">
          <div className="sidebar-icon">
            <img src={sair} alt="sair" />
          </div>
          <span className="sidebar-text">Sair</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;