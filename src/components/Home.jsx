import velhos from "../images/velhos.png"
import santcasa from "../images/santcasa.png"
import '../App.css'



function Home() {
  return (
    <div>
       <div className='pagina' id="home" style={{ backgroundImage: `url(${velhos})` }}>
        
        <br/><br />
          </div>
        </div>


  );
}

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