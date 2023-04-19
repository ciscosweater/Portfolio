import styled from "styled-components";

export const RollDown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const RollTitle = styled.span`
    font-family: 'Montserrat', sans-serif;
    color: #f4e7fd;
    font-size: 20px;
    margin: 70px 0px 30px 0px;

    @media(max-width: 1280px) {
        text-align: center;
        padding-top: 20px;
    }
`;

export const Arrows = styled.svg`
    width: 60px;
    height: 155px;
    bottom: 20px;

    path {
        stroke: #EFDDFD;
        fill: transparent;
        stroke-width: 1px;
        animation: arrow 2s infinite;
        -webkit-animation: arrow 2s infinite;
    }

    @keyframes arrow {
    0% {
        opacity: 0
    }

    40% {
        opacity: 1
    }

    80% {
        opacity: 0
    }

    100% {
        opacity: 0
    }
    }

    @-webkit-keyframes arrow {
        0% {
            opacity: 0
        }

        40% {
            opacity: 1
        }

        80% {
            opacity: 0
        }

        100% {
            opacity: 0
        }
    }

    path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s;
    }

    path.a2 {
        animation-delay: -0.5s;
        -webkit-animation-delay: -0.5s;
    }

    path.a3 {
        animation-delay: 0s;
        -webkit-animation-delay: 0s;
    }
`;