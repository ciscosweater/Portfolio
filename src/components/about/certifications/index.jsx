import { Button, ButtonDiv, Container, Divider, Icon, Indicator, PageSelectorLine, Render, Subtitle, Text, Title } from "./styles";
import NextIcon from "../../../assets/next.png";
import PreviousIcon from "../../../assets/previous.png";
import { useState } from "react";
import { useEffect } from "react";

function Certifications() {
    const [actualPage, setActualPage] = useState(1);
    const [certsPerPage, setCertsPerPage] = useState(2); // Defina o número padrão de certificações por página

    useEffect(() => {
        // Verifica a largura da janela ao carregar a página e atualiza o número de certificações por página com base nela
        function updateCertsPerPage() {
            if (window.innerWidth >= 1920) {
                setCertsPerPage(3);
            } else {
                setCertsPerPage(2);
            }
        }

        updateCertsPerPage(); // Executa a função inicialmente

        // Adiciona um ouvinte de redimensionamento da janela para atualizar o número de certificações por página quando a tela for redimensionada
        window.addEventListener("resize", updateCertsPerPage);

        return () => {
            // Remove o ouvinte de redimensionamento da janela ao desmontar o componente
            window.removeEventListener("resize", updateCertsPerPage);
        };
    }, []);

    function nextPage() {
        if (actualPage < Math.ceil(certifications.length / certsPerPage)) {
            setActualPage(actualPage + 1);
        }
    }

    function previousPage() {
        if (actualPage > 1) {
            setActualPage(actualPage - 1);
        }
    }

    const certifications = [
        {
            title: "Profissão Programador",
            text: `Paulo Borges<br />
            Front-end, Back-end, Arquitetura e
            padrões de projeto, cloud, dentre outros
            do mundo de Desenvolvimento de
            Sistemas.<br />
            Jan. de 2023 - Abril de 2023`
        },
        {
            title: "FreeCodeCamp",
            text: `Design Responsivo para Web,
            Algoritmos e estruturas de dados em
            JavaScript e Bibliotecas de
            desenvolvimento em Front-End.<br />
            Dez. de 2022 - Mar. de 2023`
        },
        {
            title: "Next.js e React - Curso Completo",
            text: `COD3R Cursos<br />
            Next.js, React.js, estratégias SPA, SSR e SSG, Firebase, 
            integração com Tailwind CSS e TypeScript, deploy na nuvem.<br />
            Jun. de 2023 - Jul. de 2023`
        }
    ];

    const startIndex = (actualPage - 1) * certsPerPage;
    const endIndex = startIndex + certsPerPage;
    const toRender = certifications.slice(startIndex, endIndex)

    function renderizarCertifications() {
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
                <Subtitle>Certificações</Subtitle>
                {renderizarCertifications()}
            </Render>
            <PageSelectorLine>
                <Indicator>{actualPage} de {Math.round(certifications.length / certsPerPage)} página{Math.round(certifications.length / certsPerPage) > 1 ? 's' : ''}</Indicator>
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

export default Certifications;