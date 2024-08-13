import servicos from "../images/servicos.png"

function Servicos() {
    return(
        <div className="servicos" id="servicos">
            <div className="servico">
                <h2>Quais serviços temos a oferecer?</h2>
                <p>Explore as diversas opções disponíveis em nossa plataforma para encontrar o lar adotivo perfeito para você. Oferecemos uma variedade de atividades emocionantes, incluindo trilhas guiadas por profissionais experientes, sessões de fisioterapia aquática em piscinas aquecidas e exames de saúde regulares. Nosso objetivo é garantir que você encontre um ambiente acolhedor que atenda às suas necessidades e preferências. Na nossa plataforma, você pode descobrir facilmente as opções disponíveis e dar o primeiro passo em direção a uma nova e emocionante jornada em um lar adotivo.</p>
            </div>
            <div className="fotosservicos">
                <div className="foto">
                    <img src={servicos} alt="servicos" />
                </div>
            </div>
        </div>
    );
  }
  
  export default Servicos;