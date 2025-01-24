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
    gap: 30px;
    padding-bottom: 50px;

    ${breakpoint.lg} {
        margin: 0 auto;
        padding-bottom: 0;
    }

    ${breakpoint.xxl} {
        justify-content: space-between;
        width: 100%;
    }
`;

export const Card = styled.div`
    width: 100%;
    height: 100%;
    max-width: 680px;
    min-height: 420px;
    background-color: ${({theme}) => theme.colors.grayCard};
    margin-bottom: 40px;
`;

export const StyledContentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 680px;
    min-height: 420px;
    width: 100%;
    height: 100%;
    padding: 35px 30px 0px 30px;
    background-color: ${({theme}) => theme.colors.grayCard};
    transition-property: background-color;
    transition-duration: 200ms;
    transition-timing-function: ease;
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
    min-height: 259px;
`;

export const StyledImgFront = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 420px;
        object-fit: cover;
        filter:  drop-shadow(2px 4px 6px #575757);
    }
`;

export const StyledButtonWidth = styled.div`
    width: 680px;
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