import logoImg from "@assets/rocket.png"
import { useTheme } from "styled-components/native";

import { Container, Logo, Title } from "./styles"

export function Header() {
    const theme = useTheme(); 

    return (
        <Container>
           <Logo source={logoImg} />
           <Title color={theme.COLORS.BLUE}>to</Title>
           <Title color={theme.COLORS.PURPLE_DARK}>do</Title>
        </Container>
    );
}