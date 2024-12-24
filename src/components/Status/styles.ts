import styled, { css } from "styled-components/native";
import { TitleProps } from "@components/Header/styles";
export const Container = styled.View`
margin-top: 16px;
margin-horizontal: 20px;
padding: 5px;
padding-bottom: 8px;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom-width: 0.5px;
border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300}80;
`;
export const TitleContainer = styled.View`
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
margin: 5px;
`;
export const Counter = styled.View`
background-color: ${({ theme }) => theme.COLORS.GRAY_400};
width: 25px;
height: 20px;
border-radius: 15px;
justify-content: center;
align-items: center;
`;
export const CounterText = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.GRAY_200};
`};
`;