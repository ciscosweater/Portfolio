import React from "react";
import "./styles.css";

function Footer() {
    return (
        <div className="footer-content">
            <nav className="footer-nav">
                <div className="footer-list">
                    <a href="#home"><span>Home</span></a>
                    <div className="list-divider"></div>
                    <a href="#about"><span>Sobre</span></a>
                    <div className="list-divider"></div>
                    <a href="#portfolio"><span>Projetos</span></a>
                    <div className="list-divider"></div>
                    <a href="#portfolio"><span>Contato</span></a>
                </div>
            </nav>
        </div>
    )
}

export default Footer;