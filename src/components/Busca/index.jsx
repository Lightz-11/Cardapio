import {Container, Input} from './styles'
import {BiSearchAlt} from 'react-icons/bi'
import { useState } from 'react';

export function Busca({setValor}) {

    return (
        <Container>
            <BiSearchAlt color='#ffffff90' size={23}/>
            <Input type="text" placeholder='Procurar' onChange={(e) => setValor(e.target.value)} />
        </Container>
    );
}