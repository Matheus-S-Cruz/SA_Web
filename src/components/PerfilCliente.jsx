import { Link } from "react-router-dom";
import React from "react";
import "../App.css";

function PerfilCliente() {
  return (
    <div className="perfil-cliente-container">
      <h1>Cliente</h1>
      <div className="campos">
        <div className="campo">
          <span className="campo-nome">Nome</span>
          <span className="campo-valor">Nome</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Email</span>
          <span className="campo-valor">Emailpessoal@gmail.com</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Cuidadores</span>
          <span className="campo-valor">cuidador.1</span>
          <span className="campo-valor">cuidador.2</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Bio</span>
          <span className="campo-valor">Descrição do Usuário</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Restrições</span>
          <span className="campo-valor">
            Descrição das Restrições, como alergias e doenças
          </span>
        </div>
        <div className="campo">
          <span className="campo-nome">Contato de Emergência</span>
          <span className="campo-valor">(88) 88888-8888</span>
        </div>
      </div>

      <div className="voltarhome">
        <Link to="/home">
          <button className="voltar">Voltar</button>
        </Link>
      </div>
    </div>
  );
}

export default PerfilCliente;
