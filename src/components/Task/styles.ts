import styled, { css } from "styled-components/native";
import Checkbox from "expo-checkbox";

export const Container = styled.View`

${({ theme }) => css`
background-color: ${theme.COLORS.GRAY_500};
border-color: ${theme.COLORS.GRAY_400};
`};

width: "100%";
margin: 10px;

border-radius: 5px;
border-width: 1px;

flex-direction: row;
align-items: center;
`;

export const Content = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_100};
font-family: ${theme.FONT_FAMILY.REGULAR} ;
font-size: ${theme.FONT_SIZE.MD}px;
`};
flex: 1;
margin: 10px;
`;

export const Check = styled(Checkbox)`
  margin-left: 10px;
  margin-right: 5px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.COLORS.BLUE};
  border-width: 2px;
  width: 20px;
  height: 20px;
`;

    