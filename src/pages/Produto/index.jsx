import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import {
    Container,
    Desc,
    Header,
    ImgContainer,
    Info,
    Main,
    Title
} from "./styles";

export function Produto() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [low, setLow] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 501) {
            setLow(true);
        }

        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    window.addEventListener("resize", () => {
        if (window.innerWidth < 501) {
            setLow(true);
        } else {
            setLow(false);
        }
    });

    return (
        <ImgContainer background="https://img.freepik.com/fotos-premium/estilo-de-comida-japonesa-sashimi-cru-de-salmao-fresco_1339-163507.jpg?w=2000">

            <Container>

                <Header>
                    <Link to={'/'}><IoIosArrowBack color="white" size={'25px'} /> Voltar</Link>
                    <h1>Sashimi De Salmão</h1>
                    <div className="vazio"></div>
                </Header>

            

                <Main>

                    

                    <Info>
                        <Title>Descrição</Title>
                        <Desc>
                            O sashimi é o famoso peixe cru cortado em fatias
                            perfeitas e finas.
                        </Desc>
                    </Info>

                    <Info>
                        <Title>Valor</Title>
                        <Desc>R$ 13,50</Desc>
                    </Info>

                    <Info>
                        <Title>Adicionais</Title>
                        <Desc>Wasabi +R$1,00</Desc>
                        <Desc>Gengibre +R$1,00</Desc>
                    </Info>
                </Main>

            </Container>

        </ImgContainer>
    );
}
