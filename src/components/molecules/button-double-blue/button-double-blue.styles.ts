import styled from 'styled-components';

import { breakpoint } from '../../../theme';

export const StyledDoubleButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px auto;
  gap: 60px;
  max-width: 170px;
  width: 100%;

  ${breakpoint.sm} {
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    max-width: 700px;
  }

  ${breakpoint.lg} {
    justify-content: start;
    margin: 40px auto;
    max-width: 1000px;
  }
`;
export const StyledButtonWidthOne = styled.div`
  width: 160px;
`;
export const StyledButtonWidthTwo = styled.div`
  width: 160px;
`;
