import { Link } from "react-router-dom";
import React from 'react'
import Cadastro from "./components/Cadastro";
import './App.css'
function PageHome() {
    return (
        <div>
            <div>
                <h1>Olá</h1>
            </div>
            <div className='voltar'>
            <Link to="/">
            <Cadastro/>

                <button className="voltar">
                    Voltar
                </button>

            </Link>
            </div>
        </div>
    )
}

export default PageHome;