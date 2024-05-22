import styled from 'styled-components';
import {breakpoint} from "../../../theme";

export const StyledColorHeader = styled.div`
  background-color: #F5F9FF;
  width: 100%;
`;

export const StyledWrapperHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLogo = styled.div`
    margin-left: 0;
    
    img {
        padding: 8px 0;
        width: 60px;
        height: 60px;
        margin-left: -10px;
    }

    ${breakpoint.xl} {
        margin-left: -100px;
    }
`;

export const StyledButtonWidth = styled.div`
  width: 140px;
`;

export const StyledButtonNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 10px;
`;