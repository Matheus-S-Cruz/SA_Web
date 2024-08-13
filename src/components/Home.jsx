import velhos from "../images/velhos.png"
import sante from "../images/sante.png"
import '../App.css'
function Home() {
  return (
    <div>
      <div className='pagina' id="home">
        <img src={sante} alt="sante" />
        <br />
        <img src={velhos} alt="velhos" />

        <br /><br />
        <div className="container">
          <div id="sobre" className="sobre">
            <h3>A melhor maneira de conectar pessoas e encontrar lares</h3>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;