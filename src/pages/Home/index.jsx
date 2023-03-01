import {
    Container,
    Grid,
    Header,
    Main,
} from "./styles";
import { useEffect, useState } from "react";
import { Busca } from "../../components/Busca";
import { Categoria } from "../../components/Categoria";

export function Home() {
    // const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [busca, setBusca] = useState("");

    const [low, setLow] = useState(true);

    const [categorias, setCategorias] = useState([
        {
            id: 1,
            nome: "sushi",
            imagem: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1-1024x1024.png"
        },

        {
            id: 2,
            nome: "steaks",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/da3dd9e0dfc073a9278eecf902a909a6_XL.jpg"
        },

        {
            id: 3,
            nome: "sushi",
            imagem: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1-1024x1024.png"
        },

        {
            id: 4,
            nome: "steaks",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/da3dd9e0dfc073a9278eecf902a909a6_XL.jpg"
        },

        {
            id: 5,
            nome: "sushi",
            imagem: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1-1024x1024.png"
        },

        {
            id: 6,
            nome: "steaks",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/da3dd9e0dfc073a9278eecf902a909a6_XL.jpg"
        },

        {
            id: 7,
            nome: "sushi",
            imagem: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1-1024x1024.png"
        },

        {
            id: 8,
            nome: "steaks",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/da3dd9e0dfc073a9278eecf902a909a6_XL.jpg"
        },

        {
            id: 9,
            nome: "sushi",
            imagem: "https://www.ufrgs.br/laranjanacolher/wp-content/uploads/2021/08/1-1024x1024.png"
        },

        {
            id: 10,
            nome: "steaks",
            imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/da3dd9e0dfc073a9278eecf902a909a6_XL.jpg"
        }
    ]);

    const [categoriasMostradas, setCategoriasMostradas] = useState(categorias);

    useEffect(() => {

        if (window.innerWidth < 420) {
            setLow(true);
        } else {
            setLow(false)
        }
        
    }, []);

    useEffect(() => {
        function replaceSpecialChars(str) {
            str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
            str = str.replace(/[àáâãäå]/, "a");
            str = str.replace(/[ÈÉÊË]/, "E");
            str = str.replace(/[Ç]/, "C");
            str = str.replace(/[ç]/, "c");

            // o resto

            return str.replace(/[^a-z0-9]/gi, "");
        }

        if (busca != "") {
            setCategoriasMostradas(
                categorias.filter((categoria) =>
                    replaceSpecialChars(categoria.nome).includes(
                        busca.toLowerCase()
                    )
                )
            );
        } else {
            setCategoriasMostradas(categorias);
        }
    }, [busca]);

    window.addEventListener("resize", () => {
        if (window.innerWidth < 420) {
            setLow(true);
        } else {
            setLow(false);
        }
    });

    window.ontouchmove = function(event) {
        event.preventDefault();
    };

    return (
        <Container>

            <Header>
                <h1>{!low && 'Cardápio'} Route Serrana</h1>
                <Busca setValor={setBusca} />
            </Header>

            <Main>

                <Grid>
                    {categoriasMostradas.map((categoria) => (
                        <Categoria key={categoria.id} data={categoria} />
                    ))}
                </Grid>

            </Main>

        </Container>
    );
}
