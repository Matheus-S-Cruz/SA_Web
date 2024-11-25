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

                <p className="oferecemosp"><strong>Encontre o lar adotivo ideal em nossa plataforma, com diversas opções e atividades enriquecedoras, incluindo:</strong></p>

                <div className="fotoservicos">
                    <div className="foto" id="forest">
                        <div className="forest-container">
                            <div className="text-container left">
                                <p>Trilhas guiadas por profissionais experientes e habilitados.</p>
                            </div>
                        </div>
                    </div>

                    <div className="foto" id="piscina">
                        <div className="piscina-container">
                            <div className="text-container right">
                                <p>Sessões de fisioterapia aquática em piscinas aquecidas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="foto" id="doctor">
                        <div className="doctor-container">
                            <div className="text-container doctor">
                                <p>Consultas diagnósticas constantes para acompanhar seu bem estar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pservicos-container">
                <p className='pservicos'>
                    Nosso objetivo é garantir que você encontre um ambiente acolhedor que atenda às suas necessidades e preferências.
                </p>
            </div>
    </div>
    );
}

export default Servicos;
