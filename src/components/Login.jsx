import { Link } from "react-router-dom";
import React from 'react'

function Login() {
    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>

            <div>
                <h1>Faça Login</h1>
                <h2>Insira seu email e sua senha para fazer login no site</h2>
                </div>
            <div className='voltar'>
            <Link to="/user">

                <button className="Entrar">
                    Entrar
                </button>

            </Link>
            </div>
        </div>
    )
}

export default Login;