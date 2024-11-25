import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginCuidador() {
  const [formData, setFormData] = useState({
    email: "",
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
      // Substitua pela URL do backend que vai autenticar o cuidador
      await axios.post("http://localhost:3000/login/cuidador", {
        email: formData.email,
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
            <p>E-mail</p>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Digite seu e-mail"
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
      <p>Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link></p>
    </div>
  );
}

export default LoginCuidador;
