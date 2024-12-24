import { Container, Counter, CounterText, Title, TitleContainer} from "./styles"
import { useTheme } from "styled-components/native";
export function Status() {
    const theme = useTheme();
    return (
        <Container>
            <TitleContainer>
                <Title color={theme.COLORS.BLUE}>Criadas </Title>
                <Counter>
                    <CounterText>0</CounterText>
                </Counter>
            </TitleContainer>
            <TitleContainer>
                <Title color={theme.COLORS.PURPLE_DARK}>Concluídas </Title>
                <Counter>
                    <CounterText>0</CounterText>
                </Counter>
            </TitleContainer>
        </Container>
    );
}