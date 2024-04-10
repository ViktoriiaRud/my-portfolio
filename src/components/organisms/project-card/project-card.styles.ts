import styled from 'styled-components';

import { breakpoint } from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperProjectCard = styled.div`
  width: 100%;
  height: 100%;
  min-height: 680px;
  background-color: ${({ theme }) => theme.colors.lightgray};
`;
export const StyledWrapperCard = styled.div`
  max-width: 1256px;
  margin: 52px auto;

  ${breakpoint.lg} {
    max-width: 1986px;
  }
`;

export const StyledContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 25px;

  ${breakpoint.md} {
    gap: 60px;
  }

  ${breakpoint.lg} {
    gap: 25px;
    justify-content: space-around;
  }

  ${breakpoint.xl} {
    gap: 20px;
  }
`;

export const Card = styled.div`
  max-width: 360px;
  min-height: 360px;
  width: 100%;
  height: 100%;
`;


export const StyledContentFront = styled.div`
  max-width: 360px;
  min-height: 360px;
  width: 100%;
  height: 100%;
  padding: 35px 30px 60px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
`;

export const StyledContentBack = styled.div`
  max-width: 360px;
  max-height: 360px;
  width: 100%;
  height: 100%;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
`;

export const StyledContentText = styled.div`
  max-width: 144px;
`;


export const TypographyTitleFront = styled(Typography)`
  font-family: ${({ theme }) => theme.font1};
  margin: 20px 10px 20px;
  line-height: 36px;
  display: block;
  text-align: start;
`;


export const TypographyTitleDescription = styled(Typography)`
  font-family: ${({ theme }) => theme.font2};
  margin: 20px 10px 20px;
  line-height: 20px;
`;

export const StyledImgCard = styled.div`
  max-width: 360px;
  width: 100%;
  height: 100%;

  img {
    width: 360px;
    height: 360px;
    object-fit: cover;
    position: absolute;
  }
`;

export const StyledButtonWidth = styled.div`
  width: 100%;
`;

export const TypographySubtitleKb = styled(Typography)`
  padding-top: 60px;
  font-family: ${({ theme }) => theme.font3};
`;