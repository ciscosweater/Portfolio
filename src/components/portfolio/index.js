import React from "react";
import ProjectCard from "../projectcard";
import EnigmaImg from "../../assets/screenshots/enigma.jpg";
import BatmanImg from "../../assets/screenshots/batman.png";
import YoutubeImg from "../../assets/screenshots/youtube.png";
import Youtube2Img from "../../assets/screenshots/youtube2.png";
import CardapioImg from "../../assets/screenshots/cardapio.png";
import WhatsappImg from "../../assets/screenshots/whatsapp.png";
import MontyHallImg from "../../assets/screenshots/montyhall.png";
import "./styles.css";
import Footer from "../footer";

function Portfolio() {
    return (
        <div id="portfolio" className="portfolio-container">
            <div className="projects-container">
                <ProjectCard
                    image={BatmanImg}
                    link="https://ciscosweater.github.io/batman/"
                    title="Batman - 2022"
                    description="Este projeto de site promocional para o filme do Batman foi desenvolvido utilizando HTML e CSS. 
                    Apresenta uma interface elegante e atraente, com um design limpo e moderno para promover o filme e atrair o público."
                    visit={true}
                />
                <ProjectCard
                    image={CardapioImg}
                    link="https://ciscosweater.github.io/cardapiodelicie/"
                    title="Cardápio - Delivery"
                    description="Cardápio interativo desenvolvido utilizando React e seus Hooks, 
                    retorna ao usuário o seu carrinho de compras, o total a ser pago pelos itens, 
                    e envia para o WhatsApp do estabelecimento uma mensagem com o resumo do pedido."
                    visit={true}
                />
                <ProjectCard
                    image={EnigmaImg}
                    link="https://ciscosweater.github.io/enigma/"
                    title="Enigma"
                    description="Uma aplicação desafiadora e divertida construída com React. 
                    Aqui, você terá a chance de testar seu conhecimento e habilidades em adivinhação com charadas. 
                    A aplicação é rápida, fácil de usar e oferece uma experiência de usuário incrível."
                    visit={true}
                />
                <ProjectCard
                    image={MontyHallImg}
                    link="https://portas-nine.vercel.app/"
                    title="Problema de Monty Hall"
                    description="Um projeto Next.JS inspirado no problema de Monty Hall, oferecendo uma aplicação interativa 
                    para o usuário escolher a quantidade de portas que serão geradas e em qual porta estará o presente,
                    a fim de recriar e debater o paradoxo."
                    visit={true}
                />
                <ProjectCard
                    image={WhatsappImg}
                    link="https://github.com/ciscosweater/frontend-whatsapp"
                    title="WhatsApp - Chat"
                    description="Chat em tempo real desenvolvido com React, TypeScript, MariaDB, Node.JS e Socket-io.
                    Ainda em desenvolvimento, mas conta com um chat geral, cadastro e login de contas, design limpo e intuitivo
                    que se aproxima fielmente ao WhatsApp que conhecemos."
                    visit={false}
                />
                <ProjectCard
                    image={YoutubeImg}
                    link="https://ciscosweater.github.io/youtube/"
                    title="YouTube - Interface"
                    description="Clone apenas da interface do YouTube, com responsividade para mobile,
                    desenvolvido utilizando o React, apresenta menu lateral e header funcionais, diversas páginas,
                    e uma aparência limpa e moderna que se aproxima do verdadeiro Youtube."
                    visit={true}
                />
                <ProjectCard
                    image={Youtube2Img}
                    link="https://github.com/ciscosweater/youtube"
                    title="YouTube - Completo"
                    description="O projeto do YouTube levado além. Conta com o cadastro e login
                    de usuários, envio e pesquisa de vídeos, além de páginas com listagens
                    personalizadas, feito com Node.JS e MariaDB. Infelizmente não é possível
                    visitá-lo, então confira o repositório!"
                    visit={false}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;