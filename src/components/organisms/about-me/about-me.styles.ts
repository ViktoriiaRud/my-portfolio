import styled from 'styled-components';

import { breakpoint } from '../../../theme';
import Typography from "../../atoms/typography";

export const WrapperAboutMe = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledWrapperAboutMe = styled.div`
  margin: 0 auto;
  min-height: 399px;
  display: flex;
  flex-direction: column;

  ${breakpoint.md} {
    max-width: 1045px;
    flex-direction: row;
    justify-content: space-between;
  }

  ${breakpoint.xl} {
    max-width: 1212px;
  }
`;

export const StyledWrapperTitle = styled.div`
  width: 100%;
  padding: 50px 20px;
  text-align: center;

  ${breakpoint.md} {
    padding: 0;
    margin: 230px 90px 200px 0;
    max-width: 680px;
    width: 70%;
    text-align: start;
  }
`;

export const StyledWrapperImg = styled.div`
  width: 100%;
  text-align: center;
  margin: 30px 0 30px;
  
  img {
    height: 540px;
    width: 100%;
    object-fit: cover;
  }
`;

export const TypographySubtitle = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
`;

export const TypographyTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.font1};
  margin-top: 25px;
  max-width: 595px;
  line-height: 42px;
`;
