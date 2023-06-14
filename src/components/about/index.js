import React from "react";
import perfilPic from "../../assets/perfil.jpg";
import downloadPic from "../../assets/download.png";
import jsPic from "../../assets/abilitiesIcons/javascript.png";
import nodePic from "../../assets/abilitiesIcons/node.png";
import reactPic from "../../assets/abilitiesIcons/react.png";
import htmlPic from "../../assets/abilitiesIcons/html.png";
import cssPic from "../../assets/abilitiesIcons/css.png";
import mariadbPic from "../../assets/abilitiesIcons/mariadb.png";
import gitPic from "../../assets/abilitiesIcons/git.png";
import githubPic from "../../assets/abilitiesIcons/github.png";
import mysqlPic from "../../assets/abilitiesIcons/mysql.png";
import typescriptPic from "../../assets/abilitiesIcons/typescript.png";
import nextjsPic from "../../assets/abilitiesIcons/nextjs.png";
import styledPic from "../../assets/abilitiesIcons/styledcomponents.png";
import "./styles.css";
import Ability from "../abilities";
import { Arrows, RollDown, RollTitle } from "./styles";

function About() {
    const abilitiesArray = [
        {
            title: 'JavaScript',
            src: jsPic
        },
        {
            title: 'Node.js',
            src: nodePic
        },
        {
            title: 'React',
            src: reactPic
        },
        {
            title: 'HTML',
            src: htmlPic
        },
        {
            title: 'TypeScript',
            src: typescriptPic
        },
        {
            title: 'CSS',
            src: cssPic
        },
        {
            title: 'MySQL',
            src: mysqlPic
        },
        {
            title: 'MariaDB',
            src: mariadbPic
        },
        {
            title: 'GitHub',
            src: githubPic
        },
        {
            title: 'Git',
            src: gitPic
        }
        ,
        {
            title: 'Next.js',
            src: nextjsPic
        }
        ,
        {
            title: 'Styled Components',
            src: styledPic
        }
    ];

    abilitiesArray.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return -1;
        }
        if (titleA > titleB) {
            return 1;
        }
        return 0;
    });

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
                        <div className="buttons-line">
                            <a href="https://www.linkedin.com/in/guhfrancisco/" target="blank">
                                <button className="profile-button">
                                    Perfil do LinkedIn
                                </button>
                            </a>
                            <a href="https://github.com/ciscosweater" target="blank">
                                <button className="profile-button">
                                    Link do GitHub
                                </button>
                            </a>
                        </div>
                        <a href="https://drive.google.com/file/d/1eY0nAcv6-rxSlC0bW8pCICvjElH3ryFh/view?usp=share_link" target="blank">
                            <button className="curriculum-button">
                                <img className="download-icon" src={downloadPic} alt="Icone de download." />
                                Meu currículo
                            </button>
                        </a>
                        <div className="about-divider"></div>
                        <span className="abilities-title">Minhas habilidades</span>
                        <div className="icons-container">
                            {abilitiesArray.map((item) => (
                                <Ability
                                    img={item.src}
                                    title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="profile-info">
                    <div className="bio-container">
                        <span className="subtitle-text">Sobre mim</span>
                        <p className="profile-sinopse">
                            Sou um Desenvolvedor FullStack Junior apaixonado por tecnologia e com habilidades principalmente no ecossistema JavaScript voltado para o Desenvolvimento Web e Mobile.
                            Possuo conhecimentos nas tecnologias Javascript, HTML, CSS, React, Node.js, Git, GitHub, Docker, AWS, MongoDB, Express, MariaDB, MySQL, entre outras.
                            Com conhecimento avançado da língua inglesa, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e crescer na carreira.
                            Comecei a estudar desenvolvimento de software neste ano e já sou capaz de criar projetos de qualidade. Estou animado para me juntar a uma equipe inovadora e contribuir para o sucesso de projetos futuros.
                        </p>
                    </div>
                    <div className="certifications-container">
                        <span className="subtitle-text">Certificações</span>
                        <span className="certifications-title">Profissão Programador</span>
                        <p className="certifications-text">
                            Paulo Borges<br />
                            Front-end, Back-end, Arquitetura e
                            padrões de projeto, cloud, dentre outros
                            do mundo de Desenvolvimento de
                            Sistemas.<br />
                            Jan. de 2023 – Abril de 2023
                        </p>
                        <div className="certifications-divider" />
                        <span className="certifications-title">FreeCodeCamp</span>
                        <p className="certifications-text">
                            Design Responsivo para Web,
                            Algoritmos e estruturas de dados em
                            JavaScript e Bibliotecas de
                            desenvolvimento em Front-End.<br />
                            Dez. de 2022 – Mar. de 2023
                        </p>
                    </div>
                    <div className="experiences-container">
                        <span className="subtitle-text">Experiência Profissional</span>
                        <span className="certifications-title">Desenvolvedor Full Stack</span>
                        <p className="certifications-text">
                            Deliciê Brigadeiros, Barreiras, BA<br />
                            Mar. de 2023 – Freelance<br />
                            Desenvolvi do zero, como freelancer, uma aplicação de
                            cardápio online para agilizar a demanda dessa doceria
                            no período de páscoa
                        </p>
                        <div className="certifications-divider" />
                        <span className="certifications-title">Designer Gráfico</span>
                        <p className="certifications-text">
                            Cisco - Design Gráfico, Barreiras, BA<br />
                            Jun. de 2021 – Ago. de 2022<br />
                            Trabalhei como freelancer de design gráfico,
                            atendendo diversos tipos de clientes, desenvolvendo
                            desde logotipos e identidades visuais, até artes para
                            postagens em redes sociais.
                        </p>
                    </div>
                </div>
            </div>
            <RollDown>
                <RollTitle>
                    <a href="#portfolio">Confira alguns dos meus projetos desenvolvidos!</a>
                </RollTitle>
                <a href="#portfolio">
                    <Arrows>
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </Arrows>
                </a>
            </RollDown>
        </div>
    )
}

export default About;