import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const InputAndButton = styled.View`
 flex-direction: row; 
    align-items: center; 
    gap: 8px; 
    margin-top: -30px; 
    width: 100%; 
    `;

export const AddButton = styled.TouchableOpacity`
    height: 53px;
    width: 53px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;