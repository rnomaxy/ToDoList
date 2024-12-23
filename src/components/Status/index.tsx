
import { Container, Counter, CounterText, Title, } from "./styles"
import { useTheme } from "styled-components/native";

export function Status() {
    const theme = useTheme();
    return (
        <Container>
            
            <Title color={theme.COLORS.BLUE}>Criadas </Title>
            <Counter>
                <CounterText>0</CounterText>
            </Counter>

            <Title color={theme.COLORS.PURPLE_DARK}>Concluídas </Title>
            <Counter>
                <CounterText>0</CounterText>
            </Counter>

        </Container>
    );
}