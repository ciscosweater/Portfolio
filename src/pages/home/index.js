import React, { useState } from "react";
import "./styles.css";

function Home() {
    const [texto, setTexto] = useState(true)

    return (
        <div id="home" className="hero-container">
            <header>
                <nav className="header-nav">
                    <div className="header-ul">
                        <span><a href="#home">Home</a></span>
                        <span><a href="#about">Sobre</a></span>
                        <span><a href="#portfolio">Projetos</a></span>
                        <span>Contato</span>
                    </div>
                </nav>
            </header>
            <h1 onClick={() => setTexto(!texto)}>{texto ? 'Procurando um desenvolvedor FullStack?' : 'Posso ser a sua solução!'}</h1>
            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
    )
}

export default Home;