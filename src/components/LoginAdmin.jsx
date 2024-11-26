import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate para redirecionamento
import axios from "axios";

function LoginAdmin() {
  const [formData, setFormData] = useState({
    usuario_admin: "",
    senha: "",
  });
  const [error, setError] = useState(null); // Para exibir erros
  const navigate = useNavigate(); // Inicialize o hook useNavigate

  // Função para capturar as mudanças nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função que é chamada no envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login-admin", {
        usuario_admin: formData.usuario_admin,
        senha: formData.senha,
      });

      if (response.data.success) { // Se login for bem sucedido
        alert(response.data.message); // Exibe a mensagem de sucesso
        navigate("/admin"); // Redireciona para a página de Admin
      } else {
        setError("Login falhou: " + response.data.message); // Exibe a mensagem de erro
      }

    } catch (error) {
      // Depuração de erros
      console.error("Erro ao realizar o login:", error.response || error.message || error);

      if (error.response) {
        setError(`Erro de servidor: ${error.response.status} - ${error.response.statusText}`);
      } else if (error.request) {
        setError("Erro: Sem resposta do servidor.");
      } else {
        setError("Erro ao realizar o login. Tente novamente.");
      }
    }
  };

  return (
    <div className="logincard">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <p>Usuário</p>
            <input
              name="usuario_admin"
              value={formData.usuario_admin}
              onChange={handleInputChange}
              placeholder="Digite seu usuário"
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
        <Link to="../adminPage">
        <button className="entrar">Entrar</button>
      </Link>      
      </form>

      {/* Exibe o erro, caso haja */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Link para voltar à página inicial */}
      <Link to="../home">
        <button className="entrar">Voltar</button>
      </Link>
    </div>
  );
}

export default LoginAdmin;