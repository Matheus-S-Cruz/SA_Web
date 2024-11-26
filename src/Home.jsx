import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import logo from './images/iconsante.png';
import santcasa from './images/santcasa.png';

function PageHome() {
  const [selectedCategory, setSelectedCategory] = useState("cliente");

  return (
    <div className="loginecadastro">
      <div className="loginsantcasa">
        <img src={santcasa} alt="login-sante" />
      </div>
      <div className="cadastroContainer">
        <div className="cadastrologo">
          <img src={logo} alt="logo-sante" />
        </div>
        <div className="opcoes">
          <button
            className={`opcao ${selectedCategory === "cliente" ? "ativo" : "inativo"}`}
            onClick={() => setSelectedCategory("cliente")}
          >
            Cliente
          </button>
          <button
            className={selectedCategory === "cuidador" ? "ativo" : "inativo"}
            onClick={() => setSelectedCategory("cuidador")}
          >
            Cuidador
          </button>
        </div>

        <div className="materias-content">
          {selectedCategory === "cliente" && (
            <div className="flex flex-wrap">
              <Link to="/login/cliente">
                <button className="entrar">Entrar como Cliente</button>
              </Link>
            </div>
          )}
          {selectedCategory === "cuidador" && (
            <div className="flex flex-wrap">
              <Link to="/login/cuidador">
                <button className="entrar">Entrar como Cuidador</button>
              </Link>
            </div>
          )}
        </div>
        <Link to="/login/admin">
                <button className="entrar">Entrar como Admin</button>
        </Link>
      </div>
    </div>
  );
}

export default PageHome;
