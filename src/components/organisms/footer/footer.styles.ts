import styled from 'styled-components';
import { breakpoint } from '../../../theme';

export const StylesWrapperFooter = styled.div`
  padding-top: 220px;
  height: 100%;
  min-height: 300px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};

  ${breakpoint.sm} {
    margin: 50px auto;
  }
`;
