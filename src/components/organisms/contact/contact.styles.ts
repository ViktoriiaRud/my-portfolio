import styled from 'styled-components';

import {breakpoint} from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperContact = styled.div`
    width: 100%;
    background: ${({theme}) => theme.colors.background};
`;

export const StyledContact = styled.div`
    padding: 100px 0 100px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

export const StyledTitleFormContact = styled.div`
    display: flex;
    flex-direction: column;

    ${breakpoint.md} {
        flex-direction: row;
        justify-content: center;
    }
`;

export const StyledWrapperTitleSocial = styled.div`
    padding: 60px 40px 20px;
    max-width: 590px;
    width: 100%;
    background: linear-gradient(90deg, rgba(252, 74, 26, 1) 0%, rgba(247, 183, 51, 1) 100%);
    border-radius: 10px;
`;


export const TypographyContactSubtitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    text-transform: uppercase;
`;

export const TypographyEmailSubtitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    margin-top: 20px;
    text-transform: uppercase;
    line-height: 46px;
`;

export const TypographyEmailTitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    line-height: 18px;
`;

export const TypographyPhoneSubtitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    margin-top: 20px;
    text-transform: uppercase;
    line-height: 46px;
`;

export const TypographyPhoneNumber = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    line-height: 18px;
`;

export const StyledWrapperForm = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    ${breakpoint.md} {
        width: 50%;
    }

    ${breakpoint.lg} {
        width: 50%;
    }
`;

export const StyledWrapperSocial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperSocialIcon = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: ${({theme}) => theme.colors.white};
    border-radius: 20%;
`;

export const StyledWrapperTitleLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const WrapperLogo = styled.div`
    max-width: 150px;
    height: 150px;
    
    img {
        border-radius: 50%;  
    }
`;

export const WrapperTitle = styled.div`
margin-left: 40px`;