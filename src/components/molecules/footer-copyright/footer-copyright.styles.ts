import styled from 'styled-components';

import { breakpoint } from '../../../theme';
import Typography from '../../atoms/typography';

export const StyledCopyrightWrapper = styled.div`
    padding: 40px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({theme}) => theme.gap.smd};

    ${breakpoint.md} {
        flex-direction: row;
        flex-wrap: wrap;
        max-width: ${({theme}) => theme.wrapperLg};
        justify-content: space-between;
        gap: ${({theme}) => theme.gap.sm};
    }

    ${breakpoint.xxl} {
        max-width: ${({theme}) => theme.wrapperXxl};
    }
`;
export const StyledSpanCopyright = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
`;
export const StyledTypographyLeft = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  text-align: left;
`;
export const StyledTypographyRight = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  text-align: right;
`;
export const StyledDataWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gap.md};

  ${breakpoint.lg} {
    flex-direction: row;
    margin: 0 0 0 3px;
  }
`;

export const StyledDataYear = styled.div``;

export const StyledPortfolio = styled.div`
  position: relative;

  &:before {
    content: ' ';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.lightgray};
    position: absolute;
    margin-left: -18px;
    top: 20%;
  }
`;

export const StyledDeveloper = styled(StyledPortfolio)``;


export const StyledName = styled(StyledPortfolio)``;


export const StyledPolicy = styled.div``;

export const StyledPolicyWrapper = styled.div`
  font-family: ${({ theme }) => theme.font2};
  margin: 0 auto;
  max-width: 281px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.md};

  ${breakpoint.md} {
    justify-content: space-between;
  }

  ${breakpoint.lg} {
    margin: 0;
  }
`;