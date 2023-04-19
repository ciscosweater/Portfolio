import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatarPic from "../../assets/avatar.png"
import "./styles.css";

function Title() {
    const [texto, setTexto] = useState(true)
    return (
        <div id="home" className="hero-container">
            <header>
                <nav className="header-nav">
                    <div className="header-ul">
                        <span><a href="#home">Home</a></span>
                        <span><a href="#about">Sobre</a></span>
                        <span><a href="#portfolio">Projetos</a></span>
                        <span><Link to="/contact">Contato</Link></span>
                    </div>
                </nav>
            </header>
            <div className="welcome-div">
                <img className="avatar" src={avatarPic} alt="Avatar representando o Desenvolvedor." />
                <h1 onClick={() => setTexto(!texto)}>{texto ? 'Bem vindo, me chamo Gustavo.' : 'O desenvolvedor que está procurando!'}</h1>
            </div>
            <a href="#about">
                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </a>
        </div>
    );
};

export default Title;