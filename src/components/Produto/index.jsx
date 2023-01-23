import { Link } from 'react-router-dom';
import {Container} from './styles'

export function Produto({data}) {
    return (
        <Container>
            <Link title={data.descricao} to={`/produto/${data.id}`}>
            <img width={'100%'} height={'100%'} src={data.imagem} />
            </Link>
            <h1>{data.nome}</h1>
            <span>R$ {data.valor.toString().length == 5 ? data.valor.toString().replace('.', ',') : data.valor.toString().replace('.', ',') + '0'}</span>
        </Container>
    );
}