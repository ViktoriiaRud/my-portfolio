import styled from 'styled-components';
import {breakpoint} from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperFormContact = styled.div`
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    max-width: 505px;
    min-height: 466px;
`;

export const StyledButtonWidth = styled.div`
    width: 180px;
    margin: 30px auto;
`;

export const StyledWrapperForm = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;

    ${breakpoint.lg} {
        padding-top: 20px;
    }

    .message {
        min-height: 180px;
    }

    input {
        min-height: 52px;
        padding: 0 15px 0;
        font-family: ${({theme}) => theme.font3};
        font-size: 22px;
        color: ${({theme}) => theme.colors.white};
        border: 1px solid #F0700F;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

        &:focus {
            background-color: ${({theme}) => theme.colors.gray};
        }
    }
`;

export const StyledTypographyInput = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    margin-top: 9px;
    color: ${({theme}) => theme.colors.gray3};
`;
