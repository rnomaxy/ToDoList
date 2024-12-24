import { useState } from "react";
import { useTheme } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, StyledInput, AddButton } from "./styles";

export function Input() {
    const { COLORS } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Container>
            <StyledInput
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={COLORS.GRAY_300}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                isFocused={isFocused}
            />
            <AddButton>
                <MaterialIcons name="add-circle-outline" size={24} color={COLORS.GRAY_100} />
            </AddButton>
        </Container>
    );
}