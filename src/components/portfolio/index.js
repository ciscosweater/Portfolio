import React from "react";
import ProjectCard from "../projectcard";
import EnigmaImg from "../../assets/screenshots/enigma.jpg";
import BatmanImg from "../../assets/screenshots/batman.png";
import YoutubeImg from "../../assets/screenshots/youtube.png";
import CardapioImg from "../../assets/screenshots/cardapio.png";
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
                    title="Batman - 2022"
                    description="Este projeto de site promocional para o filme do Batman foi desenvolvido utilizando HTML e CSS. 
                    Apresenta uma interface elegante e atraente, com um design limpo e moderno para promover o filme e atrair o público." />
                <ProjectCard
                    image={YoutubeImg}
                    link="https://ciscosweater.github.io/youtube/"
                    title="Interface do YouTube"
                    description="Clone apenas da interface do YouTube, com responsividade para mobile,
                    desenvolvido utilizando o React, apresenta menu lateral e header funcionais, diversas páginas,
                    e uma aparência limpa e moderna que se aproxima do verdadeiro Youtube." />
                <ProjectCard
                    image={CardapioImg}
                    link="https://ciscosweater.github.io/cardapiodelicie/"
                    title="Cardápio Delivery"
                    description="Cardápio interativo desenvolvido utilizando React e seus Hooks, 
                    retorna ao usuário o seu carrinho de compras, o total a ser pago pelos itens, 
                    e envia para o WhatsApp do estabelecimento uma mensagem com o resumo do pedido" />
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;