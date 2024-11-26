import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginCliente() {
  const [formData, setFormData] = useState({
    cpf_cliente: "",
    senha: "",
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

    try {
      // Substitua pela URL do backend que vai autenticar o cliente
      await axios.post("http://localhost:3000/clientes", {
        cpf_cliente: formData.cpf_cliente,
        senha: formData.senha,
      });

      alert("Login realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao realizar o login:", error);
      alert("Erro ao realizar o login.");
    }
  };

  return (
    <div className="logincard">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Cpf</p>
            <input
              name="cpf_cliente"
              value={formData.cpf_cliente}
              onChange={handleInputChange}
              placeholder="Digite seu cpf"
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
              placeholder="Digite sua senha"
              required
            />
          </label>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link>
      </p>
      <Link to="../home">
        <button className="entrar">Voltar</button>
      </Link>
    </div>
  );
}

export default LoginCliente;
