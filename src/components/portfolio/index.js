import React from "react";
import ProjectCard from "../projectcard";
import EnigmaImg from "../../assets/screenshots/enigma.jpg";
import BatmanImg from "../../assets/screenshots/batman.png";
import "./styles.css";
import Footer from "../footer";

function Portfolio() {
    return (
        <div id="portfolio" className="portfolio-container">
            <div className="projects-container">
                <ProjectCard
                    image={EnigmaImg}
                    link="https://ciscosweater.github.io/enigma/"
                    title="Enigma"
                    description="Uma aplicação desafiadora e divertida construída com React. 
                    Aqui, você terá a chance de testar seu conhecimento e habilidades em adivinhação com charadas. 
                    A aplicação é rápida, fácil de usar e oferece uma experiência de usuário incrível." />
                <ProjectCard
                    image={BatmanImg}
                    link="https://ciscosweater.github.io/batman/"
                    title="Batman"
                    description="Este projeto de site promocional para o filme do Batman foi desenvolvido utilizando HTML e CSS. 
                    Apresenta uma interface elegante e atraente, com um design limpo e moderno para promover o filme e atrair o público." />
                <ProjectCard />
                <ProjectCard />
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;