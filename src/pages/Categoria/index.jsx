import { useEffect, useState } from 'react';
import { BsBatteryFull, BsWifi } from 'react-icons/bs';
import { FaSignal } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { Busca } from '../../components/Busca';
import {Celular, Container, Grid, Main, MenuInferior, MenuSuperior} from './styles'
import {Produto} from '../../components/Produto'
import {IoIosArrowBack} from 'react-icons/io'

export function Categoria() {

    const {id} = useParams()

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [busca, setBusca] = useState('')

    const [low, setLow] = useState(false)

    const [produtos, setProdutos] = useState(
    [
        {
            id: 1,
            categoriaId: id,
            nome: 'sashimi de salmão',
            imagem: 'https://images.tcdn.com.br/img/img_prod/842178/salmao_fresco_fatiado_tipo_sashimi_77_1_20200903170409.jpg',
            descricao: 'O sashimi é o famoso peixe cru cortado em fatias perfeitas e finas.',
            valor: 15.50,
            adicionais: null
        },

        {
            id: 2,
            categoriaId: id,
            nome: 'sashimi de atum',
            imagem: 'https://i.pinimg.com/originals/c5/b9/5a/c5b95aa72655a992d20e625bc28e9831.jpg',
            descricao: 'O sashimi é o famoso peixe cru cortado em fatias perfeitas e finas.',
            valor: 13.50,
            adicionais: null
        },
    ])

    const [produtosMostrados, setProdutosMostrados] = useState(produtos)

    useEffect(() => {

        if (window.innerWidth < 501) {
            setLow(true)
        }

        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(intervalId);
        
    }, []);

    useEffect(() => {

        function replaceSpecialChars(str) {

            str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
            str = str.replace(/[àáâãäå]/,"a");
            str = str.replace(/[ÈÉÊË]/,"E");
            str = str.replace(/[Ç]/,"C");
            str = str.replace(/[ç]/,"c");

            // o resto

            return str.replace(/[^a-z0-9]/gi,''); 
        }

        if (busca != '') {
            setProdutosMostrados(produtos.filter(produto => replaceSpecialChars(produto.nome).includes(busca.toLowerCase())))
        } else {
            setProdutosMostrados(produtos)
        }

    }, [busca])

    window.addEventListener('resize', () => {
        if (window.innerWidth < 501) {
            setLow(true)
        } else {
            setLow(false)
        }
    })

    return (

        <Container>
            <Celular>

                {!low && <MenuSuperior>

                    <span title={time}>{time.substring(0, 5)}</span>

                    <div>
                        <FaSignal color='white' size={20}/>
                        <BsWifi color='white' size={22}/>
                        <BsBatteryFull color='white' size={23}/>
                    </div>

                </MenuSuperior>}

                <Main>

                    <div className='row'>
                        <Link to={'/'}><IoIosArrowBack color='white' size={30}/> Voltar</Link>
                        <h1 className='title'>Sushi</h1>
                        <div className='vazio'></div>
                    </div>
                    <Busca setValor={setBusca}/>

                    <Grid>

                        {produtosMostrados.map(produto => <Produto key={produto.id} data={produto}/>)}

                    </Grid>

                </Main>

                {!low && <MenuInferior/>}

            </Celular>
        </Container>
    );
}