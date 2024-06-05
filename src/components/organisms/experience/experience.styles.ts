import styled from 'styled-components';
import Typography from "../../atoms/typography";
import {breakpoint} from "../../../theme";

export const StyledWrapperExperience = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    ${breakpoint.lg} {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const StyledWrapperHow = styled.div`
    margin: 0 auto;
    width: 100%;

    ${breakpoint.lg} {
        width: 50%;
    }
`;

export const StyledWrapperHowImage = styled.div`
    margin: 100px auto;
    width: 100%;

    ${breakpoint.lg} {
        width: 50%;
        max-width: 700px;
    }
    
    img {
        object-fit: cover;
        width: 100%;
        height: 600px;

        ${breakpoint.lg} {
            max-width: 700px;
            min-height: 800px;
            height: 100%;
        }
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
  max-width: 100%;
    
    ${breakpoint.lg} {
        max-width: 820px;
    }
`;

export const TypographyData = styled(Typography)`
  font-family: ${({ theme }) => theme.font3};
  margin: 10px 10px;
`;

export const TypographyTitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    text-transform: uppercase;
    margin-top: 50px;

    ${breakpoint.lg} {
        margin-top: 100px;
    }
`;
