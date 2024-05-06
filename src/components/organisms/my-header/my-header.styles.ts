import styled from 'styled-components';
import {breakpoint} from "../../../theme";

export const StyledColorHeader = styled.div`
    width: 100%;
    min-height: 100px;
`;

export const StyledWrapperHeader = styled.div`
`;

export const StyledLogo = styled.div`
    max-width: 100px;
    min-height: 100px;
    display: flex;
    justify-content: start;
    align-items: center;
  
    img {
        width: 70px;
        height: 70px;
      margin-left: -80px;
    }
`;

export const StyledDropdownMenuDesktop = styled.div`
  display: none;

  ${breakpoint.lg} {
    display: block;
    margin-left: 120px;
  }
`;

export const StyledDropdownMenuMobile = styled.div`
  display: block;

  ${breakpoint.lg} {
    display: none;
  }
`;