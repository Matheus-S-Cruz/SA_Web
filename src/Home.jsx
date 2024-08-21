import { Link } from "react-router-dom";
import React from 'react'
import './App.css'
import logo from './images/iconsante.png'
function PageHome() {
    return (
        <div className="loginecadastro">
            <div className='cadastrotudo'>
                <div className='cadastrologo'>
                    <img src={logo} alt="logo-sante"  />
                </div>
                <div className='botoesCadastro'>
                    <Link to="/login">
                        <button onClick='É ctg Teteu'>Entrar</button>
                    </Link>
                    <Link to="/cadastroCliente">
                        <button className="voltar">
                            Cadastrar Cliente
                        </button>
                    </Link>
                    <Link to="/cadastroCuidador">
                        <button className="voltar">
                            Cadastrar Cuidador
                        </button>
                    </Link>
                </div>
            </div>

            <div className='voltar'>
                <Link to="/">
                    <button className="voltar">
                        Voltar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PageHome;