import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Busca } from '../../components/Busca';
import { Container, Grid, Header, Main} from './styles'
import {Produto} from '../../components/Produto/index'
import { IoIosArrowBack } from 'react-icons/io';

export function Categoria() {

    const {id} = useParams()

    const [busca, setBusca] = useState('')

    const [low, setLow] = useState(true)

    const [produtos, setProdutos] = useState(
    [
        {
            id: 1,
            categoriaId: id,
            nome: 'sashimi de salmão',
            imagem: 'https://img.freepik.com/fotos-premium/estilo-de-comida-japonesa-sashimi-cru-de-salmao-fresco_1339-163507.jpg?w=2000',
            descricao: 'O sashimi é o famoso peixe cru cortado em fatias perfeitas e finas.',
            valor: 15.50,
            adicionais: null
        },

        {
            id: 2,
            categoriaId: id,
            nome: 'sashimi de atum',
            imagem: 'https://www.rd.com/wp-content/uploads/2022/02/GettyImages-1284722254.jpg',
            descricao: 'O sashimi é o famoso peixe cru cortado em fatias perfeitas e finas.',
            valor: 13.50,
            adicionais: null
        },
    ])

    const [produtosMostrados, setProdutosMostrados] = useState(produtos)

    useEffect(() => {

        if (window.innerWidth < 420) {
            setLow(true)
        } else {
            setLow(false)
        }
        
    }, []);

    useEffect(() => {

        function replaceSpecialChars(str) {

            str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
            str = str.replace(/[àáâãäå]/,"a");
            str = str.replace(/[ÈÉÊË]/,"E");
            str = str.replace(/[Ç]/,"C");
            str = str.replace(/[ç]/,"c");

            return str.replace(/[^a-z0-9]/gi,''); 
        }

        if (busca != '') {
            setProdutosMostrados(produtos.filter(produto => replaceSpecialChars(produto.nome).includes(busca.toLowerCase())))
        } else {
            setProdutosMostrados(produtos)
        }

    }, [busca])

    window.addEventListener('resize', () => {
        if (window.innerWidth < 420) {
            setLow(true)
        } else {
            setLow(false)
        }
    })

    return (
        <Container>
            
            <Header>
                <Link to={'/'}><IoIosArrowBack color="white" size={'30px'} /><h1>{!low && 'Cardápio'} Route Serrana</h1></Link>
                <Busca setValor={setBusca} />
            </Header>

            <Main>

                <Grid>
                    {produtosMostrados.map((produto) => (
                        <Produto key={produto.id} data={produto} />
                    ))}
                </Grid>

            </Main>
        </Container>
    );
}