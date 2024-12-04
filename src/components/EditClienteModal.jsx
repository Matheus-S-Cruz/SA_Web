import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

function EditClienteModal({ isOpen, onClose, cliente, onUpdateCliente }) {
  const [formData, setFormData] = useState({
    name: '',
    cpf_cliente: '',
    email: '',
    descricao: '',
    endereco: '',
    complemento: '',
  });

  // Atualiza os campos com os dados do cliente ao abrir o modal
  useEffect(() => {
    if (cliente) {
      setFormData({
        name: cliente.name || '',
        cpf_cliente: cliente.cpf_cliente || '',
        email: cliente.email || '',
        descricao: cliente.descricao || '',
        endereco: cliente.endereco || '',
        complemento: cliente.complemento || '',
      });
    }
  }, [cliente]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples de CPF (por exemplo, você pode expandir essa validação)
    if (!formData.cpf_cliente.match(/^\d{11}$/)) {
      alert('CPF inválido. O CPF deve ter 11 dígitos.');
      return;
    }

    try {
      // Atualiza os dados no backend
      const response = await axios.put(
        `http://localhost:3000/clientes/${cliente.id_cliente}`,
        formData
      );

      // Notifica o componente pai sobre a atualização do cliente
      onUpdateCliente(response.data);

      alert('Perfil atualizado com sucesso!');
      onClose();
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      if (error.response) {
        alert(`Erro ao atualizar o perfil: ${error.response.data.error || 'Erro desconhecido'}`);
      } else {
        alert('Erro ao atualizar o perfil.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            CPF:
            <input
              type="text"
              name="cpf_cliente"
              value={formData.cpf_cliente}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Descrição:
            <input
              type="text"
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Endereço:
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Complemento:
            <input
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
            />
          </label>
          <div className="form-buttons">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditClienteModal;