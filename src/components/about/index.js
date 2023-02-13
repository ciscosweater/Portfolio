import React from "react";
import perfilPic from "../../assets/perfil.jpg";
import jsPic from "../../assets/whitejs.png";
import nodePic from "../../assets/whitenode.png";
import reactPic from "../../assets/whitereact.png";
import "./styles.css";

function About() {
    return (
        <div id="about" className="about-container">
            <div className="profile-container">
                <div className="profile-content">
                    <div className="profile-card">
                        <img className="profile-image" src={perfilPic} alt="Foto do Desenvolvedor do Currículo." />
                        <span className="name-text">Gustavo Francisco</span>
                        <span className="profile-text">
                            Foco, disciplica e consistência.
                            Vamos revolucionar o mercado de tecnologia juntos?
                        </span>
                        <a href="https://www.instagram.com/guhfrancisco_/" target="blank">
                            <button className="profile-button">
                                Conhecer insta!
                            </button>
                        </a>
                        <div className="about-divider"></div>
                        <div className="icons-container">
                            <img className="icon-item" src={jsPic} alt="Logotipo do Javascript." />
                            <img className="icon-item" src={nodePic} alt="Logotipo do Node.js." />
                            <img className="icon-item" src={reactPic} alt="Logotipo do React." />
                        </div>
                    </div>
                </div>
                <p className="profile-sinopse">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius eleifend eros.
                    Proin hendrerit risus sit amet turpis mollis mattis non vel nulla. Nunc scelerisque maximus metus,
                    ullamcorper porta lacus porta tristique. Ut non nibh velit. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Nulla tortor dui, venenatis eget consectetur non,
                    egestas a est. Nullam nec scelerisque lectus. Sed bibendum ut enim non tempus. Vestibulum commodo nunc
                    at faucibus dignissim.
                </p>
            </div>
        </div>
    )
}

export default About;