import { Link } from "react-router-dom";
import React from 'react';
import './App.css';
import logo from './images/iconsante.png';

function PageHome() {
    return (
        <div className="loginecadastro">
            <div className="cadastroContainer">
                <div className="cadastrologo">
                    <img src={logo} alt="logo-sante" />
                </div>
                <form className="formCadastro">
                    <h2>Faça seu Login</h2>
                    <div className="inputGroup">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
                    </div>
<<<<<<< HEAD
                    <Link to="/user">
                        <button className="login">Entrar</button>
                    </Link>
=======
                    <button className="entrarButton" type="submit">Entrar</button>
>>>>>>> 9e2ae2c24990140ff6d430b95d944f7db09f397e
                </form>
                <div className="opcoesCadastro">
                    <Link to ="/cuidador">
                        <button className="googleButton">Entrar com Google</button>
                    </Link>
                    <p>Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link></p>
                </div>
                <div className="voltar">
                    <Link to="/">
                        <button className="voltar">Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageHome;