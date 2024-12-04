import React, { useState, useEffect } from 'react';
import axios from 'axios';  // <-- Add this line to import axios
import '../App.css';

function EditCuidadorModal({ isOpen, onClose, cuidador, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    cpf_cuidador: '',
    email: '',
    descricao: '',
    endereco: '',
    complemento: '',
  });

  useEffect(() => {
    if (cuidador) {
      setFormData({
        name: cuidador.name || '',
        cpf_cuidador: cuidador.cpf_cuidador || '',
        email: cuidador.email || '',
        descricao: cuidador.descricao || '',
        endereco: cuidador.endereco || '',
        complemento: cuidador.complemento || '',
      });
    }
  }, [cuidador]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.cpf_cuidador.match(/^\d{11}$/)) {
      alert('CPF inválido. O CPF deve ter 11 dígitos.');
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:3000/cuidadores/${cuidador.id_cuidador}`,
        formData
      );
      onSave(response.data);
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
            Nome Completo:
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
              name="cpf_cuidador"
              value={formData.cpf_cuidador}
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
            <textarea
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

export default EditCuidadorModal;