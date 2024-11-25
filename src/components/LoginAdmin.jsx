import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginAdmin() {
  const [formData, setFormData] = useState({
    usuario_admin: "",
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
      await axios.post("http://localhost:3000/admins", {
        usuario_admin: formData.usuario_admin,
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginAdmin;
