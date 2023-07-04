import styled from "styled-components";

export const PhotosContainer = styled.div`
    position: absolute;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: #0009;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PhotosContent = styled.div`
    position: relative;
    width: 70%;
    max-width: 1280px;
    height: 80%;
    max-height: 720px;
    background-color: #1b082b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    border-radius: 10px;
    padding: 2px;
`;

export const ProjectPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 0%;
    border-radius: 10px;
    z-index: 0;
`;

export const CloseButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 10px;
    right: 15px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background-color: #0005;

    :hover {
        transform: scale(1.1);
        background-color: #0007;
    }
`;

export const CloseImage = styled.img`
    width: 50%;
    height: 50%;
    filter: invert(94%) sepia(47%) saturate(5162%) hue-rotate(183deg) brightness(104%) contrast(98%);
`;

export const ButtonsLine = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    top: 47.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
`;

export const PhotoButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 15px;
    right: 20px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background-color: #0005;

    :hover {
        transform: scale(1.1);
        background-color: #0007;
    }
`;

export const NavigateImage = styled.img`
    width: 70%;
    height: 70%;
`;

export const PageIndicator = styled.span`
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 1rem;
    text-shadow: 3px 3px 20px #000;
    background-color: #0005;
    padding: 5px 10px;
    border-radius: 20px;

    :hover {
        background-color: #0007;
    }
`;

export const PageDescription = styled.span`
    position: absolute;
    bottom: 10px;
    left: 15px;
    font-size: 1rem;
    text-shadow: 3px 3px 20px #000;
    background-color: #0005;
    padding: 5px 10px;
    border-radius: 20px;

    :hover {
        background-color: #0007;
    }
`;