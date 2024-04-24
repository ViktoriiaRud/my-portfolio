import styled from 'styled-components';
import Typography from "../../atoms/typography";

export const StyledWrapperExperience = styled.div`
    margin: 0 auto;
    width: 100%;
`;

export const TypographySubtitleExp = styled(Typography)`
  padding-top: 100px;
  font-family: ${({ theme }) => theme.font3};
`;

export const TypographySubtitle = styled(Typography)`
  margin-top: 20px;
  font-family: ${({ theme }) => theme.font3};
`;


export const TypographyDescription = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  margin-top: 25px;
  max-width: 820px;
`;

export const TypographyData = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  margin: 10px 10px;
`;