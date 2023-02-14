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
                            Foco, disciplina e consistência.
                            Vamos revolucionar o mercado de tecnologia juntos?
                        </span>
                        <a href="https://www.linkedin.com/in/guhfrancisco/" target="blank">
                            <button className="profile-button">
                                Perfil do LinkedIn
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
                    Sou um Desenvolvedor FullStack Junior apaixonado por tecnologia e com habilidades principalmente no ecossistema JavaScript voltado para o Desenvolvimento Web e Mobile.
                    Possuo conhecimentos nas tecnologias Javascript, HTML, CSS, React, Node.js, Git, GitHub, Docker, AWS, MongoDB, Express, MariaDB, MySQL, entre outras.
                    Com conhecimento avançado da língua inglesa, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e crescer na carreira.
                    Comecei a estudar desenvolvimento de software neste ano e já sou capaz de criar projetos de qualidade. Estou animado para me juntar a uma equipe inovadora e contribuir para o sucesso de projetos futuros.
                </p>
            </div>
        </div>
    )
}

export default About;