import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <div className="contact-content">
                    <h2>Entre em contato</h2>
                    <form action="https://formspree.io/f/xqkoqzjq" method="POST">
                        <label className="contact-label">
                            Seu nome
                            <input type="text" name="name" className="contact-input" required />
                        </label>
                        <label className="contact-label">
                            Seu email
                            <input type="email" name="email" className="contact-input" required />
                        </label>
                        <label className="contact-label">
                            Sua mensagem
                            <textarea name="message" className="contact-textarea" required />
                        </label>
                        <button className="contact-button" type="submit">Enviar</button>
                        <Link className="home-link" to="/portfolio"><div className="home-icon"></div></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;