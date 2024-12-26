import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type StyledInputProps    = {
    isFocused: boolean;
};

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    width: 80%;
`;

export const StyledInput = styled(TextInput)<StyledInputProps>`

${({ theme, isFocused }) => css`
  color: ${isFocused? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300};
  background-color: ${theme.COLORS.GRAY_500};

  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.LG}px;

  border-color: ${isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
`};
    flex: 1;
    height: 56px;
    border-width: 1px;
    border-radius: 8px;
    padding: 12px;
    margin-left: 15px;
`;

