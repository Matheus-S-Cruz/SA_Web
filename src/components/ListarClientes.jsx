import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Importa o axios para fazer requisições HTTP
import SidebarCuidador from './SideBarCuidador';

function ListarClientes() {
  // Estado para armazenar os clientes
  const [clientes, setClientes] = useState([]);

  // Função para buscar os clientes do backend
  const fetchClientes = async () => {
    try {
      // Faz a requisição GET para o backend
      const response = await axios.get("http://localhost:3000/clientes");
      setClientes(response.data); // Atualiza o estado com os dados dos clientes
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
      alert("Erro ao carregar a lista de clientes.");
    }
  };

  // Hook useEffect para chamar fetchClientes quando o componente for montado
  useEffect(() => {
    fetchClientes();
  }, []); // O array vazio faz com que o efeito seja executado apenas uma vez, quando o componente for montado

  return (
    <div className='cuidadores'>
      <SidebarCuidador />
      <h1>Gerenciamento de Clientes</h1>
      <div className="buscar-container">
        <input type="text" placeholder="Buscar Cliente" className="buscar-input" />
        <button className="buscar-button">Buscar</button>
      </div>
      <table className="cuidadores-table">
        <thead>
          <tr>
            <th>CPF</th>
            <th>Nome Completo</th>
            <th>Descrição</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr key={cliente.id_cliente}>
                <td>{cliente.cpf_cliente}</td> {/* Exibe o CPF do cliente */}
                <td>{cliente.name}</td> {/* Exibe o nome do cliente */}
                <td>{cliente.descricao}</td> {/* Exibe a descrição do cliente */}
                <td>{cliente.endereco}</td> {/* Exibe o endereço do cliente */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Nenhum cliente encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListarClientes;