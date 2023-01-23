import { useEffect, useState } from 'react';
import { BsBatteryFull, BsWifi } from 'react-icons/bs';
import { FaSignal } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import {Celular, Container, Desc, Info, Main, MenuInferior, MenuSuperior} from './styles'

export function Produto() {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [low, setLow] = useState(false)

    useEffect(() => {

        if (window.innerWidth < 501) {
            setLow(true)
        }

        const intervalId = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(intervalId);
        
    }, []);

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
                        <h1 className='title'>Sashimi De Salmão</h1>
                        <div className='vazio'></div>
                    </div>

                    <img width={'100%'} src='https://images.tcdn.com.br/img/img_prod/842178/salmao_fresco_fatiado_tipo_sashimi_77_1_20200903170409.jpg'/>

                    <Info>
                        <span>Descrição</span>
                        <Desc>O sashimi é o famoso peixe cru cortado em fatias perfeitas e finas.</Desc>
                    </Info>

                    <Info>
                        <span>Valor</span>
                        <Desc>R$ 13,50</Desc>
                    </Info>

                    <Info>
                        <span>Adicionais</span>
                        <Desc>Wasabi +R$1,00</Desc>
                        <Desc>Gengibre +R$1,00</Desc>
                    </Info>

                </Main>

                {!low && <MenuInferior/>}

            </Celular>
        </Container>
    );
}