import { Button, ButtonDiv, Container, Divider, Icon, Indicator, PageSelectorLine, Render, Subtitle, Text, Title } from "./styles";
import NextIcon from "../../../assets/next.png";
import PreviousIcon from "../../../assets/previous.png";
import { useState } from "react";

function Experiences() {
    const [actualPage, setActualPage] = useState(1);

    function nextPage() {
        if (actualPage < Math.ceil(experiences.length / 2)) {
            setActualPage(actualPage + 1);
        }
    }

    function previousPage() {
        if (actualPage > 1) {
            setActualPage(actualPage - 1);
        }
    }

    const experiences = [
        {
            title: "Desenvolvedor Full Stack",
            text: `Cardápio Delivery<br />
            Mar. de 2023 – Freelance<br />
            Desenvolvi do zero, como freelancer, uma aplicação de
            cardápio online para agilizar a demanda da doceria Deliciê Brigadeiros
            no período de páscoa.`
        },
        {
            title: "Desenvolvedor Full Stack",
            text: `Front-End de Sistema de Gerenciamento de Rastreamento Veicular<br />
            Jul. de 2023 – Freelance<br />
            Como membro de uma equipe de programadores,
            trabalhei em colaboração no desenvolvimento
            completo do Front-End de um sistema abrangente de
            gerenciamento e relatórios para a Movetrak, uma
            empresa especializada em Rastreamento Veicular.`
        },
        {
            title: "Designer Gráfico",
            text: `Cisco - Design Gráfico, Barreiras, BA<br />
            Jun. de 2021 – Ago. de 2022<br />
            Trabalhei como freelancer de design gráfico,
            atendendo diversos tipos de clientes, desenvolvendo
            desde logotipos e identidades visuais, até artes para
            postagens em redes sociais.`
        }
    ];

    const startIndex = (actualPage - 1) * 2;
    const endIndex = startIndex + 2;
    const toRender = experiences.slice(startIndex, endIndex)

    function renderizarExperiences() {
        return toRender.map((item) => {
            return (
                <>
                    <Title>{item.title}</Title>
                    <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                    <Divider />
                </>
            );
        });
    }

    return (
        <Container>
            <Render>
                <Subtitle>Experiência Profissional</Subtitle>
                {renderizarExperiences()}
            </Render>
            <PageSelectorLine>
                <Indicator>{actualPage} de {Math.ceil(experiences.length / 2)} página{Math.ceil(experiences.length / 2) >= 2 ? 's' : ''}</Indicator>
                <ButtonDiv>
                    <Button onClick={previousPage}>
                        <Icon src={PreviousIcon} />
                    </Button>
                    <Button onClick={nextPage}>
                        <Icon src={NextIcon} />
                    </Button>
                </ButtonDiv>
            </PageSelectorLine>
        </Container>
    );
};

export default Experiences;