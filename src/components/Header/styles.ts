import styled, {css} from "styled-components/native";

export type TitleProps = {
    color: string;
  };

export const Container = styled.View`
background-color: ${({ theme }) => theme.COLORS.GRAY_700};
width: "100%";
height: 173px;

flex-direction: row;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
 width: 20px;
 height: 32px;
 margin-right: 10px;
`;

export const Title = styled.Text<TitleProps>`
 text-align: center;

 ${({ theme,color }) => css`

font-size: ${theme.FONT_SIZE.XL}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${color};
`};
`;

