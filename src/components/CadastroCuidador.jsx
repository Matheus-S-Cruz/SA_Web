import React from "react";
import { Link } from "react-router-dom";

function CadastroCuidador({ cpf, email, senha, senhaRep, area, instituicao }) {
  return (
    <div className="cadastrocard">
      <div>
        <div>
          <label>
            <p className="cpf">{cpf}</p>
            <input name="cpf" placeholder="CPF" />
          </label>
          <p className="email">{email}</p>
          <input name="email" placeholder="Digite seu email" />
          <label>
            <p className="senha">{senha}</p>
            <input name="senha" placeholder="Digite sua senha" />
          </label>
          <label>
            <p className="senhaRep">{senhaRep}</p>
            <input name="senhaRep" placeholder="Repita a senha" />
          </label>
          <label>
            <p className="area">{area}</p>
            <input name="area" placeholder="Area cuidadora" />
          </label>
          <label>
            <p className="instituicao">{instituicao}</p>
            <input name="instituicao" placeholder="Instituição cuidadora" />
          </label>
        </div>
        <Link to="/cuidador">
          <button className="entrar">Cadastrar-se</button>
        </Link>
      </div>
    </div>
  );
}

export default CadastroCuidador;
