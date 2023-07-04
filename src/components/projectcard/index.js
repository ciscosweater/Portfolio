import React from "react";
import "./styles.css";

function ProjectCard(props) {

    const handleClick = () => {
        props.setImages(props.imagesToSet)
        props.moreOpen(true)
    }

    return (
        <div className="card-container">
            <div className="show-more" onClick={() => handleClick()}>
                <div className="show-more-button">Ver mais</div>
            </div>
            <img className="card-image" src={props.image} alt="Captura de tela de um dos projetos." />
            <div className="card-info">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-description">{props.description}</p>
                <a href={props.link} target="blank">
                    <button className="card-button">{props.visit ? "Visitar" : "Link do Repositório"}</button>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;