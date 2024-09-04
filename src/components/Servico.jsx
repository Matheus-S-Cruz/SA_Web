import oferecemos from '../images/oferecemos.png'
import intheforest from '../images/intheforest.png'
import piscina from '../images/piscina.png'
import doctor from '../images/doctor.png'

function Servicos() {
    return (
        <div className="servicos" id="servicos">
            <div className="oferecemos">
                <img src={oferecemos} alt="oferecemos" />
            </div>

            <p className="oferecemosp">Encontre o lar adotivo ideal em nossa plataforma, com diversas opções e atividades enriquecedoras incluindo:</p>

            <div className="fotoservicos" id="servicos">
                <div className="foto" id='forest'>
                    <div className='forest'>
                        <img src={intheforest} alt="forest" height={632} />
                    </div>
                </div>

                <div className="foto" id="piscina">
                    <div className="piscina">
                        <img src={piscina} alt="piscina" height={763} />
                    </div>

                </div>

                <div className="foto" id="doctor">
                    <div className="doctor">
                        <img src={doctor} alt="doctor" height={696} />
                    </div>

                </div>

            </div>
        </div>
    );
}
export default Servicos;