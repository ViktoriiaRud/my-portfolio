import styled from 'styled-components';
import {breakpoint} from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperFormContact = styled.div`
    max-width: 344px;
    width: 100%;
    height: 100%;

    ${breakpoint.lg} {
        max-width: 505px;
        min-height: 466px;
    }
`;

export const StyledButtonWidth = styled.div`
    width: 180px;
    margin: 30px auto;
`;

export const StyledWrapperForm = styled.div`
    padding: 50px 30px 0 30px;
    display: flex;
    flex-direction: column;

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
