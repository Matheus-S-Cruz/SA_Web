import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Importa o axios para fazer requisições HTTP
import SidebarCuidador from './SideBarCuidador';

function AdminCuidadores() {
  // Estado para armazenar os cuidadores
  const [cuidadores, setCuidadores] = useState([]);

  // Função para buscar os cuidadores do backend
  const fetchCuidadores = async () => {
    try {
      // Faz a requisição GET para o backend
      const response = await axios.get("http://localhost:3000/cuidadores");
      setCuidadores(response.data); // Atualiza o estado com os dados dos cuidadores
    } catch (error) {
      console.error("Erro ao listar cuidadores:", error);
      alert("Erro ao carregar a lista de cuidadores.");
    }
  };

  // Hook useEffect para chamar fetchCuidadores quando o componente for montado
  useEffect(() => {
    fetchCuidadores();
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez, quando o componente for montado

  return (
    <div className='cuidadores'>
      <SidebarCuidador />
      <h1>Gerenciamento de Cuidadores</h1>
      <div className="buscar-container">
        <input type="text" placeholder="Buscar Cuidador" className="buscar-input" />
        <button className="buscar-button">Buscar</button>
      </div>
      <table className="cuidadores-table">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome Completo</th>
            <th>Área</th>
            <th>Instituição</th>
          </tr>
        </thead>
        <tbody>
          {cuidadores.length > 0 ? (
            cuidadores.map((cuidador) => (
              <tr key={cuidador.id_cuidador}>
                <td>{cuidador.cpf_cuidador}</td> {/* Exibe o CPF do cuidador */}
                <td>{cuidador.name}</td> {/* Exibe o nome do cuidador */}
                <td>{cuidador.area}</td> {/* Exibe a área do cuidador */}
                <td>{cuidador.instituicao}</td> {/* Exibe a instituição do cuidador */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum cuidador encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCuidadores;