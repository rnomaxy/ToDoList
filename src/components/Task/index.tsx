import React from "react";
import { Alert, TouchableOpacity } from "react-native";

import { Trash } from "phosphor-react-native";
import { useTheme } from "styled-components";
import { Check, Container, Content } from "./styles";

interface TasksProps {
    task: string;
    isChecked: boolean;
    onRemove: () => void;
    onCheck: () => void;
}

export function Tasks({ task, isChecked, onRemove, onCheck }: TasksProps) {
    const theme = useTheme();

    async function handleTaskRemove() {
        Alert.alert(
            'Remover',
            'Deseja remover esta tarefa?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: onRemove }
            ]
        );
    }

    return (
        <Container>
            <Check
                value={isChecked}
                onValueChange={onCheck} 
                color={isChecked ? theme.COLORS.PURPLE : theme.COLORS.BLUE}
            />

            <Content style={{
                textDecorationLine: isChecked ? 'line-through' : "none",
                color: isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100,
            }}>
                {task}
            </Content>

            <TouchableOpacity style={{ marginRight: 12 }} onPress={handleTaskRemove}>
                <Trash size={20} color={theme.COLORS.GRAY_300} />
            </TouchableOpacity>
        </Container>
    );
}