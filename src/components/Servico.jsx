import oferecemos from '../images/oferecemos.png';
import intheforest from '../images/intheforest.png';
import piscina from '../images/piscina.png';
import doctor from '../images/doctor.png';
import '../App.css';

function Servicos() {
    return (
        <div className="servicos" id="servicos">
            <div className='nossosservicos'>
                <div className="oferecemos">
                    <h1>O que oferecemos?</h1>
                </div>

                <div className="objetivos">
                    <p>A equipe Santé é composta por profissionais dedicados e apaixonados que têm um objetivo claro: tornar a busca por uma casa geriátrica uma tarefa mais 
                    simples e eficiente. Compreendemos que encontrar o lugar ideal para um ente querido é uma decisão delicada, que envolve não apenas questões logísticas,
                     mas também emocionais.
                    Nosso projeto visa oferecer uma plataforma intuitiva e acessível, onde os clientes podem explorar diversas opções de casas geriátricas.
                    Através de uma pesquisa cuidadosa e criteriosa, buscamos resultados que atendam às necessidades específicas de cada cliente, priorizando o conforto
                     e o bem-estar dos idosos.</p>
                </div>

                <div className="objetivo">
                <p>
                    <strong>Nosso objetivo é garantir que você encontre um ambiente acolhedor que atenda às suas necessidades e preferências.</strong>
                </p>
            </div>

            </div>
    </div>
    );
}

export default Servicos;
