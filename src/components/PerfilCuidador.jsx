import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import "../App.css";
import pfp from "../images/pfp.png";
import EditProfileModal from './EditCuidadorModal';
import axios from 'axios';

function PerfilCuidador() {

  const [cuidador, setCuidador] = useState(null); // Estado para armazenar os dados do cuidador
  const [isModalOpen, setModalOpen] = useState(false);
  
  // Função para buscar os dados do cuidador
  const fetchCuidador = async () => {
    try {
      // Buscar todos os cuidadores
      const response = await axios.get('http://localhost:3000/cuidadores');
      
      // Verifica se a resposta contém dados e seleciona o primeiro cuidador
      if (response.data && response.data.length > 0) {
        setCuidador(response.data[0]); // Atualiza o estado com o primeiro cuidador
      } else {
        alert("Nenhum cuidador encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar os dados do cuidador:", error);
      alert("Erro ao carregar os dados do cuidador.");
    }
  };

  // Função para abrir o modal de edição
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Carregar as informações do cuidador assim que o componente for montado
  useEffect(() => {
    fetchCuidador();
  }, []);

  if (!cuidador) {
    return <div>Carregando...</div>; // Exibe um carregamento enquanto os dados não são carregados
  }

  return (
    <div className="perfil-cuidador-container">
      <Sidebar />
      <h1>Cuidador</h1>
      <div className="foto-perfil">
        <img src={pfp} alt="Foto de Perfil" />
      </div>
      <div className="campos">
        <div className="campo">
          <span className="campo-nome">Nome</span>
          <span className="campo-valor">{cuidador.name}</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Email</span>
          <span className="campo-valor">{cuidador.email}</span>
        </div>
        <div className="campo">
          <span className="campo-nome">Clientes</span>
          {cuidador.clientes && cuidador.clientes.length > 0 ? (
            cuidador.clientes.map((cliente, index) => (
              <span key={index} className="campo-valor">{cliente}</span>
            ))
          ) : (
            <span className="campo-valor">Nenhum cliente atribuído</span>
          )}
        </div>
        <div className="campo">
          <span className="campo-nome">Descrição</span>
          <span className="campo-valor">{cuidador.descricao}</span>
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

export default PerfilCuidador;