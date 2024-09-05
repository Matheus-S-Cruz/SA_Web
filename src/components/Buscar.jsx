import SidebarCuidador from "./SideBarCuidador";

function Buscar() {
    return(
        <div>
           <SidebarCuidador />
                <h1>Clientes perto de você</h1>
               
                <div className="buscarb">

                <div className="Nomeb">
                    <p>Nome completo</p><br />
                    <p>Gleyson Fernandez</p><br />
                    <p>Orivaldo Antonio</p><br />
                    <p>Luiz Dorival</p><br />
                    <p>João Campos</p><br />
                    <p>Clidson Herneto</p><br />

                </div>

                <div className="Idadeb">
                    <p>Idade</p><br />
                    <p>73</p><br />
                    <p>91</p><br />
                    <p>64</p><br />
                    <p>78</p><br />
                    <p>86</p><br />
                </div>

                <div className="Observacoesb">
                    <p>Observações</p><br />
                    <p>Grandes problemas respiratorios...</p><br />
                    <p>Apresenta Parkinson severo e...</p><br />
                    <p>Diagnosticado com Cancer no Pâncreas...</p><br />
                    <p>Sérios problemas com Alzheimer...</p><br />
                    <p>Não respeita os outros e tem dêmencia...</p><br />
                </div>

                <div className="Instb">
                    <p>Instiuições</p><br />
                    <p>Residencial Serenidade</p><br />
                    <p>Lar dos Encantos</p><br />
                    <p>Refúgio da Paz</p><br />
                    <p>Casa dos Sorrisos</p><br />
                    <p>Vila Harmonia</p><br />
                </div>
            </div>
        </div>
        );
  }
  
  export default Buscar;