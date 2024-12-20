import React, { useState } from "react";
import CadastroCliente from "./CadastroCliente";
import CadastroCuidador from "./CadastroCuidador";
import { Link } from "react-router-dom";
import "../App.css";

function Cadastro() {
  const cliente = [
    {
      cpf: "",
      email: "",
      senha: "",
      senhaRep: "",
      restricao: "",
      instituicao: "",
    },
  ];

  const cuidador = [
    {
      cpf: "",
      email: "",
      senha: "",
      senhaRep: "",
      restricao: "",
      instituicao: "",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("cliente");

  return (
    <section id="project">
      <div className="cadastroContainer">
        <div>
          <h2 id="materias">Crie sua conta na Santé!</h2>
          <p>Cadastrar-se como:</p>
        </div>

        <div className="opcoes">
          <button
            className={`opcao ${
              selectedCategory === "cliente" ? "ativo" : "inativo"
            }`}
            onClick={() => setSelectedCategory("cliente")}
          >
            Cliente
          </button>
          <button
            className={`opcao ${
              selectedCategory === "cuidador" ? "ativo" : "inativo"
            }`}
            onClick={() => setSelectedCategory("cuidador")}
          >
            Cuidador
          </button>
        </div>

        <div className="materias-content">
          {selectedCategory === "cliente" && (
            <div className="flex flex-wrap">
              {cliente.map((projeto, index) => (
                <CadastroCliente key={index} {...projeto} />
              ))}
            </div>
          )}
          {selectedCategory === "cuidador" && (
            <div className="flex flex-wrap">
              {cuidador.map((projeto, index) => (
                <CadastroCuidador key={index} {...projeto} />
              ))}
            </div>
          )}
        </div>
        <Link to="../home">
          <button className="entrar">Voltar</button>
        </Link>
      </div>
    </section>
  );
}

export default Cadastro;