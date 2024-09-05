import React, { useState } from 'react';
import '../App.css';

function EditClienteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    bio: '',
    restricoes: '',
    contatoEmergencia: '',
    foto: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, foto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData);
    onClose(); // Fechar o modal após o envio
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
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Restrições:
            <textarea
              name="restricoes"
              value={formData.restricoes}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Contato de Emergência:
            <input
              type="text"
              name="contatoEmergencia"
              value={formData.contatoEmergencia}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Foto de Perfil:
            <input
              type="file"
              name="foto"
              onChange={handleFileChange}
            />
          </label>
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default EditClienteModal;