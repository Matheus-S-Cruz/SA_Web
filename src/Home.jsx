import { Link } from "react-router-dom";
import React from 'react'
import './App.css'
import logo from './images/iconsante.png'
function PageHome() {
    return (
        <div>
            <div className='cadastrotudo'>
                <div className='cadastrologo'>
                    <img src={logo} alt="logo-sante" />
                </div>
                <div className='botoesCadastro'>
                    <Link to="/login">
                        <button onClick='É ctg Teteu'>Entrar</button>
                    </Link>

                    <button onClick='É ctg Teteu'>Cadastrar Cliente</button>
                    <button onClick='É ctg Teteu'>Cadastrar Cuidador</button>
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