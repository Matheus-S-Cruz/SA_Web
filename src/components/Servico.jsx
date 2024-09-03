import servicos from "../images/servicos.png"
import oferecemos from '../images/oferecemos.png'

function Servicos() {
    return (
        <div className="servicos" id="servicos">
<<<<<<< HEAD
            <div className="servico">
                <h1 style={{color: "greek garden"}}>Quais serviços temos a oferecer?</h1>
                <p>Explore as diversas opções disponíveis em nossa plataforma para encontrar o lar adotivo perfeito para você. Oferecemos uma variedade de atividades emocionantes, incluindo trilhas guiadas por profissionais experientes, sessões de fisioterapia aquática em piscinas aquecidas e exames de saúde regulares. Nosso objetivo é garantir que você encontre um ambiente acolhedor que atenda às suas necessidades e preferências. Na nossa plataforma, você pode descobrir facilmente as opções disponíveis e dar o primeiro passo em direção a uma nova e emocionante jornada em um lar adotivo.</p>
=======
            <div className="oferecemos">
                <img src={oferecemos} alt="oferecemos" />
>>>>>>> 8a16d0d0513a1fdd5679a198886bdc5c65c9d79e
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