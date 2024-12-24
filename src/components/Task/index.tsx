import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Trash } from "phosphor-react-native";

import { useTheme } from "styled-components";
import { Check, Container, Content } from "./styles";

export function Tasks() {
    const [isChecked, setIsChecked] = useState(false);
    const theme = useTheme();

    return (
        <Container>
            <Check
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? theme.COLORS.PURPLE : theme.COLORS.BLUE}
            />

            <Content style={{
                textDecorationLine: isChecked ? 'line-through' : "none" ,
                color: isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100, 
            }}>
                Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Content>

            <TouchableOpacity style={{ marginRight: 10 }}>
                <Trash
                    size={20}
                    color={theme.COLORS.GRAY_300}
                    style={{ opacity: 0.7 }}
                />
            </TouchableOpacity>

        </Container>
    );
}