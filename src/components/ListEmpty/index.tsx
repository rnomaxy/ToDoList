import emptyImg from "@assets/Clipboard.png"
import { Container, Img, Title, Subtitle } from "./styles"

export function ListEmpty(){
    return(
        <Container>
            <Img source={emptyImg}/>
            <Title>Você ainda não tem tarefas cadastradas</Title>
            <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
        </Container>
    );
}
