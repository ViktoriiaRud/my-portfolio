import styled from 'styled-components';
import {breakpoint} from "../../../theme";

export const StyledColorHeader = styled.div`
    background-color: ${({theme}) => theme.colors.orange};
    width: 100%;
    max-height: 85px;
`;

export const StyledWrapperHeader = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLogo = styled.div`
    margin-left: 0;
    position: absolute;
    
    img {
        width: 130px;
        height: 130px;
        margin-left: -10px;
        object-fit: cover;
    }

    ${breakpoint.xl} {
        margin-left: -100px;
    }
`;

export const StyledButtonWidth = styled.div`
  width: 160px;
`;

export const StyledButtonNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 10px;
`;