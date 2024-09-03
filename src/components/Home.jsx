import velhos from "../images/velhos.png"
import '../App.css'

<<<<<<< HEAD


=======
>>>>>>> 8a16d0d0513a1fdd5679a198886bdc5c65c9d79e
function Home() {
  return (
    <div className="paginahome">
       <div className='pagina' id="home" style={{ backgroundImage: `url(${velhos})` }}>
<<<<<<< HEAD
        
        <br/><br />
          </div>
        </div>
=======
        <br /><br />
      </div>
      <div className="sante" id="sante">
            <div className="sobre">
                <h1>Quem somos nós?</h1>
                <p>A Santé é uma ideia realizada por quatro alunos da Escola Sesi, onde tiveram a mesma ideia de criar um site simples e rápido e que pudesse ajudar  outras pessoas. O projeto Santé tem por objetivo tornar a busca por uma casa geriátrica uma tarefa mais fácil, buscando por resultados que busquem conforto conforme o cliente desejar.</p>
                <p>Santé se refere a saúde em francês, sendo um termo utilizado em clínicas médicas, espero que consigamos atender o seu conforto.</p>
            </div>
            <div className="integrantes">
                <div className="integrante">
                    <h3>Pedro Aleksander</h3>
                    <p>Designer</p>
                </div>
                <div className="integrante">
                    <h3>Matheus Cruz</h3>
                    <p>Líder e Desenvolvedor Back-End</p>
                </div>
                <div className="integrante">
                    <h3>Vinicius de Marco</h3>
                    <p>Desenvolvedor Back e Front-End</p>
                </div>
                <div className="integrante">
                    <h3>Ian Novatzki</h3>
                    <p>Designer</p>
                </div>
            </div>
        </div>
    </div>
)}
>>>>>>> 8a16d0d0513a1fdd5679a198886bdc5c65c9d79e



const Header = () => {
  const myStyle = {

    color: "green",
    padding: "40px",
    fontFamily: "Bantayog"

  };


return(
  <>
  <h1 style={myStyle}>Sante</h1>
  <p>A melhor maneira de conectar pessoas e encontrar lares</p>
  </>
);
}


export default Home;