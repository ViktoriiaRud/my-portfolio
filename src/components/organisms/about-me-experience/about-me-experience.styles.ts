import styled from 'styled-components';

import { breakpoint } from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperAboutMeExperience = styled.div`
  margin: 56px 0 50px;
  width: 100%;
  height: 100%;

  ${breakpoint.lg} {
    margin: 106px 0 99px;
  }
`;

export const StyledWrapperAboutMeExperience = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 994px;

  ${breakpoint.lg} {
    flex-direction: row;
    justify-content: center;
    gap: 60px;
  }
`;

export const StyledWrapperTitle = styled.div`
  margin: 40px auto;
  width: 100%;
  padding: 20px;

  ${breakpoint.lg} {
    max-width: 561px;
    margin: 0 auto;
    width: 60%;
    padding: 0;
  }
`;

export const StyledWrapperImg = styled.div`
  margin: 10px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 298px;

  img {
    height: 410px;
    object-fit: cover;
    border-radius: 10px;
  }

  ${breakpoint.lg} {
    margin: 0 auto;
    width: 40%;
  }
`;

export const StyledTypographyDescription = styled(Typography)`
  font-family: ${({ theme }) => theme.description};
  margin-top: 10px;

  .bold {
    font-family: ${({ theme }) => theme.fontBold};
    font-weight: 800;
    font-style: italic;
  }
`;

export const TypographySubtitle = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  text-align: start;
  text-transform: uppercase;
`;

export const TypographyTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  margin-top: 20px;
  width: 100%;
  text-align: start;
`;