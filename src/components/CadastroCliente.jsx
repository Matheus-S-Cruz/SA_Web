import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CadastroCliente() {
  const [formData, setFormData] = useState({
    name: "",
    cpf_cliente: "",
    senha: "",
    senhaRep: "",
    email: "",
    descricao: "",
    endereco: "",
    complemento: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.senhaRep) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      // Envia os dados para o backend com a estrutura que o backend espera
      await axios.post("http://localhost:3000/clientes", {
        name: formData.name,
        cpf_cliente: formData.cpf_cliente,
        senha: formData.senha,
        email: formData.email,
        endereco: formData.endereco,
        descricao: formData.descricao,
        complemento: formData.complemento,
      });

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao realizar o cadastro.");
    }
  };

  return (
    <div className="cadastrocard">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Nome Completo</p>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nome Completo"
              required
            />
          </label>

          <label>
            <p>CPF</p>
            <input
              name="cpf_cliente"
              value={formData.cpf_cliente}
              onChange={handleInputChange}
              placeholder="CPF"
              required
            />
          </label>

          <label>
            <p>Senha</p>
            <input
              name="senha"
              type="password"
              value={formData.senha}
              onChange={handleInputChange}
              placeholder="Senha"
              required
            />
          </label>

          <label>
            <p>Repita a Senha</p>
            <input
              name="senhaRep"
              type="password"
              value={formData.senhaRep}
              onChange={handleInputChange}
              placeholder="Repita a senha"
              required
            />
          </label>

          <label>
            <p>Email</p>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </label>

          <label>
            <p>Descrição</p>
            <input
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              placeholder="Descrição"
            />
          </label>

          <label>
            <p>Endereço</p>
            <input
              name="endereco"
              value={formData.endereco}
              onChange={handleInputChange}
              placeholder="Endereço"
              required
            />
          </label>

          <label>
            <p>Complemento</p>
            <input
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
              placeholder="Complemento"
            />
          </label>
        </div>
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
  );
}

export default CadastroCliente;