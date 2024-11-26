import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarAdmin from './SideBarAdmin';

function ListarCuidadores() {
  const [cuidadores, setCuidadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCuidadores = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cuidadores");
      setCuidadores(response.data);
    } catch (error) {
      console.error("Erro ao listar cuidadores:", error);
      alert("Erro ao carregar a lista de cuidadores.");
    }
  };

  const handleDelete = async (cuidadorId) => {
    try {
      await axios.delete(`http://localhost:3000/cuidadores/${cuidadorId}`);
      setCuidadores(cuidadores.filter(cuidador => cuidador.id_cuidador !== cuidadorId));
      alert("Cuidador deletado com sucesso!");
    } catch (error) {
      console.error("Erro ao deletar cuidador:", error);
      alert("Erro ao deletar o cuidador.");
    }
  };

  const filteredCuidadores = cuidadores.filter((cuidador) =>
    cuidador.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cuidador.cpf_cuidador.includes(searchTerm)
  );

  useEffect(() => {
    fetchCuidadores();
  }, []);

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
          onChange={(e) => setSearchTerm(e.target.value)}
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
            <th>Ações</th> {/* Coluna para o botão de deletar */}
          </tr>
        </thead>
        <tbody>
          {filteredCuidadores.length > 0 ? (
            filteredCuidadores.map((cuidador) => (
              <tr key={cuidador.id_cuidador}>
                <td>{cuidador.cpf_cuidador}</td>
                <td>{cuidador.name}</td>
                <td>{cuidador.email}</td>
                <td>{cuidador.descricao}</td>
                <td>{cuidador.endereco}</td>
                <td>
                  <button onClick={() => handleDelete(cuidador.id_cuidador)}>Deletar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhum cuidador encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListarCuidadores;