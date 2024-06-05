import styled from 'styled-components';
import {breakpoint} from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperProjectCard = styled.div`
    width: 100%;
    height: 100%;
    min-height: 680px;
    background-color: ${({theme}) => theme.colors.white};
`;

export const StyledWrapperCard = styled.div`
    max-width: 1256px;
    margin: 50px auto;

    ${breakpoint.lg} {
        max-width: 1986px;
    }
`;

export const StyledContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding-bottom: 50px;

    ${breakpoint.lg} {
        flex-wrap: unset;
        justify-content: center;
        margin: 0 auto;
        padding-bottom: 0;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
    min-height: 294px;
`;

export const StyledContentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    max-width: 480px;
    min-height: 294px;
    width: 100%;
    height: 100%;
    padding: 35px 30px 60px 30px;
    background-color: ${({theme}) => theme.colors.greenyellow};
    transition-property: background-color;
    transition-duration: 200ms;
    transition-timing-function: ease;
    border: 1px solid ${({theme}) => theme.colors.orange};
`;

export const WrapperImgFront = styled.div``;

export const StyledContentText = styled.div``;

export const TypographyTitleFront = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    line-height: 42px;
    display: block;
    text-align: center;
`;

export const TypographyTitleDescription = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    margin: 20px 10px 20px;
    line-height: 32px;
    text-align: center;
`;

export const StyledImgFront = styled.div`
    max-width: 480px;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        filter:  drop-shadow(2px 4px 6px #575757);
    }
`;

export const StyledButtonWidth = styled.div`
    width: 160px;
    margin: 0 auto;
`;

export const StyledWrapperButtonGray = styled.div`
`;

export const TypographySubtitleKb = styled(Typography)`
    margin-top: 20px;
    font-family: ${({theme}) => theme.font3};
    text-align: start;
    
    ${breakpoint.md} {
        text-align: center;
    }
`;

export const TypographyTitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    text-align: start;
    text-transform: uppercase;
    padding-top: 100px;
    
    ${breakpoint.md} {
        text-align: center;
    }
`;

export const StyledWrapperContentText = styled.div``;