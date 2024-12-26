import { useState } from "react";
import { useTheme } from "styled-components/native";

import { Container, StyledInput } from "./styles";

type InputProps = {
    value: string;
    onChangeText: (text: string) => void;
};

export function Input({ value, onChangeText }: InputProps) {
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
                value={value} 
                onChangeText={onChangeText} 
            />
        </Container>
    );
}