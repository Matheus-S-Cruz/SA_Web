

function Sante() {
    return (
        <div className="sante" id="sante">
            <div className="sobre">
                <h1>Afinal, o que é a Santé</h1>
                <p>A Santé é uma ideia realizada por quatro alunos da Escola Sesi, onde tiveram a mesma ideia de criar um site simples e rápido e que pudesse ajudar  outras pessoas. O projeto Santé tem por objetivo tornar a busca por uma casa geriátrica uma tarefa mais fácil, buscando por resultados que busquem conforto conforme o cliente desejar.</p>
                <p>Santé se refere a saúde em francês, sendo um termo utilizado em clínicas médicas, espero que consigamos atender o seu conforto.</p>
            </div>
            <div className="integrantes">
                <div className="integrante">
                    <img src={aleksander} alt="aleksander" />
                    <h3>Pedro Aleksander</h3>
                    <p>Designer</p>
                </div>
                <div className="integrante">
                    <img src={matheus} alt="matheus" />
                    <h3>Matheus Cruz</h3>
                    <p>Líder e Desenvolvedor Back-End</p>
                </div>
                <div className="integrante">
                    <img src={vinicius} alt="vinicius" /> 
                    <h3>Vinicius de Marco</h3>
                    <p>Desenvolvedor Back e Front-End</p>
                </div>
                <div className="integrante">
                    <img src={ian} alt="ian" />
                    <h3>Ian Novatzki</h3>
                    <p>Designer</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default Sante;