import Sante from '../images/sante.png'

function NavBar() {
    return (
        <div>
            <div className="topnav">
                <div className="nav-links">
                    <a href="#home" className="logo">
                        <img src={Sante} alt="Sante" />
                    </a>
                    <a href="#sante">Santé</a>
                    <a href="#contato">Contato</a>
                    <a href="#servicos">Serviços</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;