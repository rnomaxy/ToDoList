import styled, { css } from "styled-components/native";
import { TitleProps } from "@components/Header/styles";

export const Container = styled.View`
margin-top: 16px;
flex-direction: row;
justify-content: space-between;
padding: 5px;
border-bottom-width: 0.5px;
border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300}
`;

const InfoBox = styled.View`
flex-direction: row;
align-items: center;
`;

export const Title = styled.Text<TitleProps>`
 text-align: center;

 ${({ theme, color }) => css`

font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${color};
`};
margin: 8px;
`;

export const Counter = styled.View`
background-color: ${({ theme }) => theme.COLORS.GRAY_400};
padding: 8px 8px;
border-radius: 12px;
`;

export const CounterText = styled.Text`
${({ theme }) => css`

font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.GRAY_200};
`};
`;
