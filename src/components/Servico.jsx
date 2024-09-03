import servicos from "../images/servicos.png"
import oferecemos from '../images/oferecemos.png'

function Servicos() {
    return (
        <div className="servicos" id="servicos">
            <div className="oferecemos">
                <img src={oferecemos} alt="oferecemos" />
            </div>
            <p className="oferecemosp">Encontre o lar adotivo ideal em nossa plataforma, com diversas opções e atividades enriquecedoras incluindo:</p>
            <div className="fotosservicos">
                <div className="foto">
                    <img src={servicos} alt="servicos" />
                </div>
            </div>
        </div>
    );
}

export default Servicos;