import styled from "styled-components";

export const HabilityDiv = styled.div`
    width: 80px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    cursor: pointer;

    @media(max-width: 1280px) {
        width: 50px;
        margin: 10px;
    };
`;

export const HabilityImg = styled.img`
    width: 100%;
    aspect-ratio: 1/1;
    transition: 0.2s;

    :hover {
        transform: scale(1.02)
    };
`;

export const HabilityTitle = styled.span`
    font-size: 12px;
    margin: 10px 0px 15px 0px;
    text-align: center;

    @media(max-width: 1280px) {
        font-size: 10px;
    };
`;