import styled from 'styled-components';
import Typography from "../../atoms/typography";

export const StyledWrapperExperience = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    
`;

export const StyledWrapperHow = styled.div`
    margin: 0 auto;
    width: 50%;
`;

export const StyledWrapperHowImage = styled.div`
    margin: 0 auto;
    width: 50%;
    max-width: 700px;
    
    img {
        object-fit: cover;
        width: 100%;
        max-width: 700px;
        min-height: 600px;
        height: 100%;
    }
`;

export const TypographySubtitleExp = styled(Typography)`
  margin-top: 20px;
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

export const TypographyTitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    text-transform: uppercase;
    margin-top: 100px;
`;
