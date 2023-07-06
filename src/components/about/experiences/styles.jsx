import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #0e0416;
    border: #210934 2px solid;
    border-radius: 10px;
`;

export const Render = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PageSelectorLine = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    width: 100%;
`;

export const Subtitle = styled.span`
    font-family: 'Montserrat', sans-serif;
    color: #f4e7fd;
    font-size: 28px;
    font-weight: bold;

    @media(max-width: 1280px) {
        text-align: center;
    }
`;

export const Title = styled.span`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 22px;
    margin-top: 15px;
    font-weight: 600;

    @media(max-width: 1280px) {
        text-align: center;
    }
`;

export const Text = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 18px;
    margin-top: 0px;
    line-height: 1.3;

    @media(max-width: 1280px) {
        text-align: center;
    }
`;

export const Divider = styled.div`
    border: 1px solid #210934;
    width: 90%;
    align-self: center;

    :last-of-type {
        display: none
    }
`;

export const Indicator = styled.span`
    font-size: 18px;
`;

export const ButtonDiv = styled.div`
    display: flex;
    width: 70px;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.div`
    width: 30px;
    height: 30px;
    background-color: #0e0416;
    border-radius: 50%;
    cursor: pointer;
    transition: .2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: #1b082b;
    }
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`;