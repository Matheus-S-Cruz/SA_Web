import velhos from "../images/velhos.png"
import '../App.css'

function Home() {
  return (
    <div className="paginahome">
       <div className='pagina' id="home" style={{ backgroundImage: `url(${velhos})` }}>
        <br /><br />
      </div>
      <div className="sante" id="sante">
            <div className="sobre">
                <h1>Desenvolvedores</h1>
                <div className="lemonada">
                <p>Santé se refere a <strong>saúde</strong> em francês, sendo um termo utilizado em clínicas médicas, espero que consigamos atender o seu conforto.</p>
                </div>
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
                    <p>Desenvolvedor Front-End</p>
                </div>
                <div className="integrante">
                    <h3>Ian Novatzki</h3>
                    <p>Designer</p>
                </div>
            </div>
        </div>
    </div>
)}

export default Home;