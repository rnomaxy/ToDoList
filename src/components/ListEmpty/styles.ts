import styled, { css } from "styled-components/native";

export const Container = styled.View`
width: "100%";
margin-horizontal: 20px;
margin-top: 7px;
padding: 5px;
padding-bottom: 15px;
align-items: center;
border-top-width: 0.5px;
border-top-color: ${({ theme }) => theme.COLORS.GRAY_300}80;
`;

export const Img = styled.Image`
margin-top: 40px;
`;

export const Title = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.GRAY_300};
`};
margin-top: 20px;
`;

export const Subtitle = styled.Text`
${({ theme }) => css`
font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
color: ${theme.COLORS.GRAY_300};
`};
margin-top: 3px;
`;