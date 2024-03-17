import styled from 'styled-components';

import { breakpoint } from '../../../theme';

const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  max-width: 100%;
  padding-inline: ${({ theme }) => theme.gap.sm};

  ${breakpoint.lg} {
    max-width: ${({ theme }) => theme.wrapperLgx};
    padding: 0;
  }

  ${breakpoint.xxl} {
    max-width: ${({ theme }) => theme.wrapperXxl};
    margin-inline: auto;
  }
`;

export { Wrapper };
