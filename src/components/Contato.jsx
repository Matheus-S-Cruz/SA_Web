import { Link } from "react-router-dom";
import React from "react";

function Contato() {
    return (
        <div className="contatoedownload" id="contato">
            <div className="contato">
                <h2>Contato e Nosso Projeto</h2>
                <div className="informacoes">
                    <p>Para obter informações adicionais sobre nossos serviços e produtos, convidamos 
                    você a entrar em contato com nossa equipe de suporte especializada. Alternativamente, 
                    você pode simplificar o processo de acesso ao nosso aplicativo móvel escaneando o 
                    QR code abaixo com a câmera do seu dispositivo. Estamos aqui para auxiliá-lo(a) em 
                    todas as suas necessidades e garantir uma experiência conveniente e eficiente.</p>
                </div>
            </div>
            <Link to="/home">
                <button className="home">
                    Nossa Página
                </button>
            </Link>
        </div>
    );
}

export default Contato;