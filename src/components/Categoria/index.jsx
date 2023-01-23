import {Container} from './styles'

export function Categoria({data}) {
    return (
        <Container to={`/categoria/${data.id}`}>
            <h1>{data.nome}</h1>
            <img width={'100%'} height={'100%'} src={data.imagem}/>
        </Container>
    );
}