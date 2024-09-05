import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import "../App.css";
import pfp from "../images/pfp.png";
import EditProfileModal from './EditClienteModal';

function PerfilCliente() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="perfil-cliente-container">
      <Sidebar />
      <h1>Cliente</h1>
      <div className="foto-perfil">
        <img src={pfp} alt="Foto de Perfil" />
      </div>
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
      <button className="editar-perfil" onClick={openModal}>
          Editar Perfil
        </button>
      </div>

      <EditProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default PerfilCliente;
