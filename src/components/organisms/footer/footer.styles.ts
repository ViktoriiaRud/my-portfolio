// import { Link } from 'gatsby';
import styled from 'styled-components';

import { breakpoint } from '../../../theme';
// import Typography from '../../atoms/typography';

// export const StyledWrapper = styled.div``;

export const StylesWrapperFooter = styled.div`
  margin: 50px 0 32px 0;
  display: flex;
  max-width: 180px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.md};

  ${breakpoint.sm} {
    margin: 50px auto;
  }

  ${breakpoint.md} {
    max-width: 475px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: ${({ theme }) => theme.gap.mdx};
  }

  ${breakpoint.lg} {
    margin: 102px 0 72px 0;
    max-width: ${({ theme }) => theme.wrapperLgx};
  }

  ${breakpoint.xxl} {
    margin: 102px 0 72px 0;
    max-width: ${({ theme }) => theme.wrapperXxl};
  }
`;

// export const StyledTypography = styled(Typography)`
//   font-family: ${({ theme }) => theme.font2};
//   margin-top: 20px;
//   text-align: left;
//
//   ${breakpoint.md} {
//     font-size: 13px;
//   }
// `;

// export const SlyledLink = styled(Link)`
//   font-family: ${({ theme }) => theme.font2};
//   margin-top: 20px;
//   text-align: left;
//   font-size: 13px;
//   font-weight: 300;
//   line-height: 18px;
//   letter-spacing: 0;
//
//   ${breakpoint.md} {
//     font-size: 13px;
//   }
//
//   &:hover {
//     color: ${({ theme }) => theme.colors.blue};
//   }
// `;
//
// export const StyledUl = styled.ul`
//   margin-top: 20px;
// `;
