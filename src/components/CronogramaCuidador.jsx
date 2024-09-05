import React, { useState } from "react";
import SidebarCuidador from "./SidebarCuidador";

function CronogramaCuidador() {
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda");

  const atividadesPorDia = {
    Segunda: [
      "Atividade 1 - 08:00",
      "Atividade 2 - 10:00",
      "Atividade 3 - 14:00",
    ],
    Terça: [
      "Atividade 1 - 09:00",
      "Atividade 2 - 11:00",
      "Atividade 3 - 15:00",
    ],
    Quarta: [
      "Atividade 1 - 08:30",
      "Atividade 2 - 10:30",
      "Atividade 3 - 16:00",
    ],
    Quinta: [
      "Atividade 1 - 07:00",
      "Atividade 2 - 09:00",
      "Atividade 3 - 13:00",
    ],
    Sexta: [
      "Atividade 1 - 08:00",
      "Atividade 2 - 12:00",
      "Atividade 3 - 14:30",
    ],
    Sábado: [
      "Atividade 1 - 09:00",
      "Atividade 2 - 10:00",
      "Atividade 3 - 11:00",
    ],
    Domingo: [
      "Atividade 1 - 08:00",
      "Atividade 2 - 11:00",
      "Atividade 3 - 14:00",
    ],
  };

  const clientesPorDia = {
    Segunda: ["Cliente 1", "Cliente 2", "Cliente 3"],
    Terça: ["Cliente 4", "Cliente 5", "Cliente 6"],
    Quarta: ["Cliente 7", "Cliente 8", "Cliente 9"],
    Quinta: ["Cliente 10", "Cliente 11", "Cliente 12"],
    Sexta: ["Cliente 13", "Cliente 14", "Cliente 15"],
    Sábado: ["Cliente 16", "Cliente 17", "Cliente 18"],
    Domingo: ["Cliente 19", "Cliente 20", "Cliente 21"],
  };

  return (
    <div className="cronograma">
      <SidebarCuidador />
      <div className="conteudo">
        <h1>Cronograma de Cuidador</h1>
        <div className="dias-da-semana">
          {Object.keys(atividadesPorDia).map((dia) => (
            <button
            key={dia}
            className={`dia ${diaSelecionado === dia ? "selecionado" : ""}`}
            onClick={() => setDiaSelecionado(dia)}
          >
              {dia}
            </button>
          ))}
        </div>
        <div className="cronograma-detalhes">
          <div className="atividades">
            <h2>Atividades</h2>
            <ul>
              {atividadesPorDia[diaSelecionado].map((atividade, index) => (
                <li key={index}>{atividade}</li>
              ))}
            </ul>
          </div>
          <div className="cuidadores">
            <h2>Clientes</h2>
            <ul>
              {clientesPorDia[diaSelecionado].map((cliente, index) => (
                <li key={index}>{cliente}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CronogramaCuidador;
