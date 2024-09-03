import velhos from "../images/velhos.png"
import santcasa from "../images/santcasa.png"
import '../App.css'
function Home() {
  return (
    <div>
       <div className='pagina' id="home" style={{ backgroundImage: `url(${velhos})` }}>
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