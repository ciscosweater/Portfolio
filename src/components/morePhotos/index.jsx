import { ButtonsLine, CloseButton, CloseImage, NavigateImage, PageDescription, PageIndicator, PhotoButton, PhotosContainer, PhotosContent, ProjectPhoto } from "./styles";
import CloseIcon from "../../assets/closeIcon.svg";
import NextIcon from "../../assets/next.png";
import PreviousIcon from "../../assets/previous.png";
import { useState } from "react";
import { useEffect } from "react";

function MorePhotos(props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.photos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.photos.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, [props])

    return (
        <>
            {props.moreOpen ? <PhotosContainer>
                <PhotosContent>
                    <ProjectPhoto src={props.photos[currentIndex].src} />
                    <CloseButton onClick={() => props.setMoreOpen(!props.moreOpen)}>
                        <CloseImage src={CloseIcon} alt="Ícone de fechar" />
                    </CloseButton>
                    <ButtonsLine>
                        <PhotoButton onClick={handlePrevious}>
                            <NavigateImage src={PreviousIcon} alt="" />
                        </PhotoButton>
                        <PhotoButton onClick={handleNext}>
                            <NavigateImage src={NextIcon} alt="" />
                        </PhotoButton>
                    </ButtonsLine>
                    <PageDescription>{props.photos[currentIndex].title}</PageDescription>
                    <PageIndicator>{`${currentIndex + 1} de ${props.photos.length}`}</PageIndicator>
                </PhotosContent>
            </PhotosContainer> : false}
        </>
    )
}

export default MorePhotos;