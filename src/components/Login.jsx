import { Link } from "react-router-dom";
import React from 'react'

function Login() {
    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>

            <div className='voltar'>
                <div className="Login">
                    <h1>Faça Login</h1>
                    <h2>Insira seu email e sua senha para fazer login no app </h2>
                    <input type="Cpf ou email" /><br /><br />
                    <input type="Senha" />
                </div>
                <Link to="/user">
                    <button className="Entrar">
                        Entrar
                    </button>
                </Link>
                <br />
                <button>Logar com google</button><br />
            </div>
        </div>
    )
}

export default Login;