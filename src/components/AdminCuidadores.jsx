import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Importa o axios para fazer requisições HTTP
import SidebarAdmin from './SideBarAdmin';

function ListarCuidadores() {
  // Estado para armazenar os cuidadores
  const [cuidadores, setCuidadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Para armazenar o termo de busca

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

  // Função de filtro dos cuidadores pela pesquisa
  const filteredCuidadores = cuidadores.filter((cuidador) =>
    cuidador.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cuidador.cpf_cuidador.includes(searchTerm)
  );

  // Hook useEffect para chamar fetchCuidadores quando o componente for montado
  useEffect(() => {
    fetchCuidadores();
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez, quando o componente for montado

  // Função para tratar a mudança no input de busca
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='cuidadores'>
        <SidebarAdmin />
        <h1>Gerenciamento de Cuidadores</h1>
      <div className="buscar-container">
        <input
          type="text"
          placeholder="Buscar Cuidador"
          className="buscar-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="buscar-button">Buscar</button>
      </div>
      <table className="cuidadores-table">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome Completo</th>
            <th>Email</th>
            <th>Descrição</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {filteredCuidadores.length > 0 ? (
            filteredCuidadores.map((cuidador) => (
              <tr key={cuidador.id_cuidador}>
                <td>{cuidador.cpf_cuidador}</td> {/* Exibe o CPF do cuidador */}
                <td>{cuidador.name}</td> {/* Exibe o nome do cuidador */}
                <td>{cuidador.email}</td> {/* Exibe o email do cuidador */}
                <td>{cuidador.descricao}</td> {/* Exibe a área do cuidador */}
                <td>{cuidador.endereco}</td> {/* Exibe a instituição do cuidador */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nenhum cuidador encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListarCuidadores;