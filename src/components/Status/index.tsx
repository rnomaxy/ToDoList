import { Container, Counter, CounterText, Title, TitleContainer } from "./styles"
import { useTheme } from "styled-components/native";

interface StatusProps {
    createdCount: number;
    completedCount: number;
}

export function Status({ createdCount, completedCount }: StatusProps) {
    const theme = useTheme();

    return (
        <Container>
            <TitleContainer>
                <Title color={theme.COLORS.BLUE}>Criadas </Title>
                <Counter>
                    <CounterText>{createdCount}</CounterText>
                </Counter>
            </TitleContainer>
            <TitleContainer>
                <Title color={theme.COLORS.PURPLE_DARK}>Concluídas </Title>
                <Counter>
                    <CounterText>{completedCount}</CounterText>
                </Counter>
            </TitleContainer>
        </Container>
    );
}