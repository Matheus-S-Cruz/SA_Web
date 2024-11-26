import React, { useState, useEffect } from 'react';
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

  // Atualiza o estado do formulário com os dados do cuidador quando o modal é aberto
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chama a função de salvamento (pode ser para o backend ou para o componente pai)
    onSave(formData);
    onClose(); // Fecha o modal após salvar
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
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}

export default EditCuidadorModal;