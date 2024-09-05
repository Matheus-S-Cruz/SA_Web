import { useState } from "react";
import Sidebar from "./Sidebar";

function CronogramaCliente() {
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda");

  const atividadesPorDia = {
    Segunda: ["Atividade 1 - 09:00", "Atividade 2 - 14:00"],
    Terça: ["Atividade 3 - 10:00", "Atividade 4 - 15:00"],
    Quarta: ["Atividade 5 - 11:00", "Atividade 6 - 16:00"],
    Quinta: ["Atividade 7 - 09:00", "Atividade 8 - 13:00"],
    Sexta: ["Atividade 9 - 08:00", "Atividade 10 - 12:00"],
    Sábado: ["Atividade 11 - 10:00", "Atividade 12 - 16:00"],
    Domingo: ["Atividade 13 - 11:00", "Atividade 14 - 17:00"],
  };

  const cuidadoresPorDia = {
    Segunda: ["Cuidador 1", "Cuidador 2"],
    Terça: ["Cuidador 3", "Cuidador 4"],
    Quarta: ["Cuidador 5", "Cuidador 6"],
    Quinta: ["Cuidador 7", "Cuidador 8"],
    Sexta: ["Cuidador 9", "Cuidador 10"],
    Sábado: ["Cuidador 11", "Cuidador 12"],
    Domingo: ["Cuidador 13", "Cuidador 14"],
  };

  return (
    <div className="cronograma">
      <Sidebar />
      <div className="conteudo">
        <h1>Cronograma do Cliente</h1>
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
            <h2>Cuidadores</h2>
            <ul>
              {cuidadoresPorDia[diaSelecionado].map((cuidador, index) => (
                <li key={index}>{cuidador}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CronogramaCliente;
