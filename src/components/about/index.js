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
import Certifications from "./certifications";
import Experiences from "./experiences";

function About() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/curriculo.pdf'; // Substitua com o caminho correto para o seu currículo
        link.download = 'curriculo.pdf';
        link.click();
      };
    

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
                        <button className="curriculum-button" onClick={handleDownload}>
                            <img className="download-icon" src={downloadPic} alt="Icone de download." />
                            Meu currículo
                        </button>
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
                        Sou um estudante de engenharia civil em transição para a área de programação, apaixonado por tecnologia. 
                        Tenho habilidades no ecossistema JavaScript, incluindo TypeScript, Node.JS, React e Next.js com experiência em projetos menores voluntários. 
                        Busco constantemente desafios para aprimorar minhas habilidades e contribuir para o sucesso de projetos futuros. Com conhecimento avançado em inglês, 
                        estou pronto para integrar equipes inovadoras e aplicar minhas habilidades técnicas.
                        </p>
                    </div>
                    <Certifications />
                    <Experiences />
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