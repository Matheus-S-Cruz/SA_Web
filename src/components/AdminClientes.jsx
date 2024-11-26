import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarAdmin from './SideBarAdmin';

function AdminClientes() {
  const [clientes, setClientes] = useState([]);

  // Função para buscar os clientes do backend
  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/clientes");
      setClientes(response.data); // Atualiza o estado com os dados dos clientes
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
      alert("Erro ao carregar a lista de clientes.");
    }
  };

  // Função para deletar o cliente
  const handleDelete = async (clienteId) => {
    try {
      await axios.delete(`http://localhost:3000/clientes/${clienteId}`);
      setClientes(clientes.filter(cliente => cliente.id_cliente !== clienteId)); // Atualiza a lista removendo o cliente deletado
      alert("Cliente deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      alert("Erro ao deletar o cliente.");
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className='cuidadores'>
      <SidebarAdmin />
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
            <th>Email</th>
            <th>Descrição</th>
            <th>Endereço</th>
            <th>Ações</th> {/* Coluna para o botão de deletar */}
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map((cliente) => (
              <tr key={cliente.id_cliente}>
                <td>{cliente.cpf_cliente}</td>
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.descricao}</td>
                <td>{cliente.endereco}</td>
                <td>
                  {/* Botão de deletar */}
                  <button onClick={() => handleDelete(cliente.id_cliente)}>Deletar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum cliente encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminClientes;