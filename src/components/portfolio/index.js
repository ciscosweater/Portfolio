import React from "react";
import ProjectCard from "../projectcard";

import BatmanImg from "../../assets/screenshots/batman.png";
import BatmanHome from "../../assets/screenshots/batman/home.png";
import BatmanComments from "../../assets/screenshots/batman/comentarios.png";
import BatmanMobile from "../../assets/screenshots/batman/mobile.png";

import CardapioImg from "../../assets/screenshots/cardapio.png";
import CardapioDesktop from "../../assets/screenshots/cardapio/home.png";
import CardapioHome from "../../assets/screenshots/cardapio/homemobile.png";
import CardapioCheckout from "../../assets/screenshots/cardapio/checkout.png";
import CardapioOrder from "../../assets/screenshots/cardapio/ordermobile.png";

import EnigmaImg from "../../assets/screenshots/enigma.jpg";
import EnigmaDesktop from "../../assets/screenshots/enigma/desktop.png";
import EnigmaMobile from "../../assets/screenshots/enigma/mobile.png";

import MontyHallImg from "../../assets/screenshots/montyhall.png";
import MontyHallHome from "../../assets/screenshots/montyhall/home.png";
import MontyHallPortas from "../../assets/screenshots/montyhall/portas.png";
import MontyHallPresente from "../../assets/screenshots/montyhall/presente.png";

import WhatsappImg from "../../assets/screenshots/whatsapp.png";
import WhatsappHome from "../../assets/screenshots/whatsapp/home.png";
import WhatsappChat from "../../assets/screenshots/whatsapp/chat.png";

import YoutubeImg from "../../assets/screenshots/youtube.png";
import YoutubeHome from "../../assets/screenshots/youtube/home.png";
import YoutubeMenu from "../../assets/screenshots/youtube/home2.png";
import YoutubeMobile from "../../assets/screenshots/youtube/mobile.png";

import Youtube2Img from "../../assets/screenshots/youtube2.png";
import Youtube2Home from "../../assets/screenshots/youtube2/home.png";
import Youtube2Login from "../../assets/screenshots/youtube2/login.png";
import Youtube2Menu from "../../assets/screenshots/youtube2/openmenu.png";
import Youtube2Search from "../../assets/screenshots/youtube2/search.png";
import Youtube2Sended from "../../assets/screenshots/youtube2/sended.png";
import Youtube2Shorts from "../../assets/screenshots/youtube2/shorts.png";
import Youtube2Signup from "../../assets/screenshots/youtube2/signup.png";
import Youtube2Subscriptions from "../../assets/screenshots/youtube2/subscriptions.png";
import Youtube2Upload from "../../assets/screenshots/youtube2/upload.png";

import "./styles.css";
import Footer from "../footer";
import MorePhotos from "../morePhotos";
import { useState } from "react";

function Portfolio() {
    const [moreOpen, setMoreOpen] = useState(false);
    const [moreImages, setMoreImages] = useState([]);

    return (
        <div id="portfolio" className="portfolio-container">
            <MorePhotos photos={moreImages} moreOpen={moreOpen} setMoreOpen={setMoreOpen} />
            <div className="projects-container">
                <ProjectCard
                    image={BatmanImg}
                    link="https://ciscosweater.github.io/batman/"
                    title="Batman - 2022"
                    description="Este projeto de site promocional para o filme do Batman foi desenvolvido utilizando HTML e CSS. 
                    Apresenta uma interface elegante e atraente, com um design limpo e moderno para promover o filme e atrair o público."
                    visit={true}
                    imagesToSet={[
                        {
                            src: BatmanHome,
                            title: "Home"
                        },
                        {
                            src: BatmanComments,
                            title: "Comentários"
                        },
                        {
                            src: BatmanMobile,
                            title: "Responsividade"
                        }
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
                />
                <ProjectCard
                    image={CardapioImg}
                    link="https://ciscosweater.github.io/cardapiodelicie/"
                    title="Cardápio - Delivery"
                    description="Cardápio interativo desenvolvido utilizando React e seus Hooks, 
                    retorna ao usuário o seu carrinho de compras, o total a ser pago pelos itens, 
                    e envia para o WhatsApp do estabelecimento uma mensagem com o resumo do pedido."
                    visit={true}
                    imagesToSet={[
                        {
                            src: CardapioDesktop,
                            title: "Versão Desktop"
                        },
                        {
                            src: CardapioHome,
                            title: "Versão Mobile"
                        },
                        {
                            src: CardapioCheckout,
                            title: "Checkout do pedido"
                        },
                        {
                            src: CardapioOrder,
                            title: "Opções do pedido"
                        }
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
                />
                <ProjectCard
                    image={EnigmaImg}
                    link="https://ciscosweater.github.io/enigma/"
                    title="Enigma"
                    description="Uma aplicação desafiadora e divertida construída com React. 
                    Aqui, você terá a chance de testar seu conhecimento e habilidades em adivinhação com charadas. 
                    A aplicação é rápida, fácil de usar e oferece uma experiência de usuário incrível."
                    visit={true}
                    imagesToSet={[
                        {
                            src: EnigmaDesktop,
                            title: "Versão Desktop"
                        },
                        {
                            src: EnigmaMobile,
                            title: "Versão Mobile"
                        }
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
                />
                <ProjectCard
                    image={MontyHallImg}
                    link="https://portas-nine.vercel.app/"
                    title="Problema de Monty Hall"
                    description="Um projeto Next.JS inspirado no problema de Monty Hall, oferecendo uma aplicação interativa 
                    para o usuário escolher a quantidade de portas que serão geradas e em qual porta estará o presente,
                    a fim de recriar e debater o paradoxo."
                    visit={true}
                    imagesToSet={[
                        {
                            src: MontyHallHome,
                            title: "Página inicial - Configurações"
                        },
                        {
                            src: MontyHallPortas,
                            title: "Em funcionamento - Portas"
                        },
                        {
                            src: MontyHallPresente,
                            title: "Em funcionamento - Presente"
                        }
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
                />
                <ProjectCard
                    image={WhatsappImg}
                    link="https://github.com/ciscosweater/frontend-whatsapp"
                    title="WhatsApp - Chat"
                    description="Chat em tempo real desenvolvido com React, TypeScript, MariaDB, Node.JS e Socket-io.
                    Ainda em desenvolvimento, mas conta com um chat geral, cadastro e login de contas, design limpo e intuitivo
                    que se aproxima fielmente ao WhatsApp que conhecemos."
                    visit={false}
                    imagesToSet={[
                        {
                            src: WhatsappHome,
                            title: "Página inicial"
                        },
                        {
                            src: WhatsappChat,
                            title: "Chat Geral"
                        }
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
                />
                <ProjectCard
                    image={YoutubeImg}
                    link="https://ciscosweater.github.io/youtube/"
                    title="YouTube - Interface"
                    description="Clone apenas da interface do YouTube, com responsividade para mobile,
                    desenvolvido utilizando o React, apresenta menu lateral e header funcionais, diversas páginas,
                    e uma aparência limpa e moderna que se aproxima do verdadeiro Youtube."
                    visit={true}
                    imagesToSet={[
                        {
                            src: YoutubeHome,
                            title: "Página inicial"
                        },
                        {
                            src: YoutubeMenu,
                            title: "Menu Lateral"
                        },
                        {
                            src: YoutubeMobile,
                            title: "Responsividade"
                        }
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
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
                    imagesToSet={[
                        {
                            src: Youtube2Home,
                            title: "Página inicial"
                        },
                        {
                            src: Youtube2Menu,
                            title: "Menu Lateral"
                        },
                        {
                            src: Youtube2Login,
                            title: "Login de usuário"
                        },
                        {
                            src: Youtube2Signup,
                            title: "Página de cadastro"
                        },
                        {
                            src: Youtube2Upload,
                            title: "Envio de vídeos"
                        },
                        {
                            src: Youtube2Sended,
                            title: "Vídeos enviados pelo usuário"
                        },
                        {
                            src: Youtube2Search,
                            title: "Busca de vídeos"
                        },
                        {
                            src: Youtube2Subscriptions,
                            title: "Inscrições"
                        },
                        {
                            src: Youtube2Shorts,
                            title: "Shorts"
                        },
                    ]}
                    setImages={setMoreImages}
                    moreOpen={setMoreOpen}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;