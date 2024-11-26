import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import "../App.css";
import pfp from "../images/pfp.png";
import EditProfileModal from './EditClienteModal';
import axios from 'axios';

function PerfilCliente() {

  const [cliente, setCliente] = useState(null); // Estado para armazenar os dados do cliente
  const [isModalOpen, setModalOpen] = useState(false);
  
  // Função para buscar os dados do cliente
  const fetchCliente = async () => {
    try {
      // Buscar todos os clientes
      const response = await axios.get('http://localhost:3000/clientes');
      
      // Verifica se a resposta contém dados e seleciona o primeiro cliente
      if (response.data && response.data.length > 0) {
        setCliente(response.data[0]); // Atualiza o estado com o primeiro cliente
      } else {
        alert("Nenhum cliente encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar os dados do cliente:", error);
      alert("Erro ao carregar os dados do cliente.");
    }
  };

  // Função para abrir o modal de edição
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Carregar as informações do cliente assim que o componente for montado
  useEffect(() => {
    fetchCliente();
  }, []);

  if (!cliente) {
    return <div>Carregando...</div>; // Exibe um carregamento enquanto os dados não são carregados
  }

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
          <span className="campo-valor">{cliente.name}</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Email</span>
          <span className="campo-valor">{cliente.email}</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Cuidadores</span>
          {cliente.cuidadores && cliente.cuidadores.length > 0 ? (
            cliente.cuidadores.map((cuidador, index) => (
              <span key={index} className="campo-valor">{cuidador}</span>
            ))
          ) : (
            <span className="campo-valor">Nenhum cuidador atribuído</span>
          )}
        </div>
        <div className="campo">
          <span className="campo-nome">Descrição</span>
          <span className="campo-valor">{cliente.descricao}</span>
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