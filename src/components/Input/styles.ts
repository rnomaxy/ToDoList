import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type StyledInputProps    = {
    isFocused: boolean;
};

export const Container = styled.View`

flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: -30px;
    width: 100%;
`;

export const StyledInput = styled(TextInput)<StyledInputProps>`

${({ theme, isFocused }) => css`
  color: ${isFocused? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300};
  background-color: ${theme.COLORS.GRAY_500};

  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.LG};

  border-color: ${isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
`};
    flex: 1;
    height: 56px;
    border-width: 1px;
    border-radius: 8px;
    padding: 12px;
    margin-left: 15px;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
    height: 53px;
    width: 53px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;
