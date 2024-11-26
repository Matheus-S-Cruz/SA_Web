import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Corrigido: importando useNavigate
import axios from "axios";

const LoginCliente = () => {
  const [formData, setFormData] = useState({
    cpf_cliente: "",
    senha: "",
  });
  
  const navigate = useNavigate(); // Hook para navegação programática

  // Função para atualizar os campos do formulário
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
      const response = await axios.post("http://localhost:3000/clientes", {
        cpf_cliente: formData.cpf_cliente,
        senha: formData.senha,
      });

      const token = response.data.token;
      localStorage.setItem("authToken", token);

      alert("Login realizado com sucesso!");

      // Redireciona para a página inicial ou qualquer outra página após o login
      navigate("/user");
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
            <p className="cpf">Cpf</p>
            <input className="cpf_cliente"
              name="cpf_cliente"
              value={formData.cpf_cliente}
              onChange={handleInputChange}
              placeholder="Digite seu cpf"
              required
            />
          </label>

          <label>
            <p className="senha">Senha</p>
            <input className="senha_cliente"
              name="senha"
              type="password"
              value={formData.senha}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              required
            />
          </label>
        </div>
        <Link to="../user">
        <button className="entrar">Entrar</button>
      </Link>          
      </form>
      <p>
        Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link>
      </p>
      <Link to="../home">
        <button className="entrar">Voltar</button>
      </Link>
    </div>
  );
};

export default LoginCliente;