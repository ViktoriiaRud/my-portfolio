import styled from 'styled-components';

import Typography from '../../atoms/typography';
import {breakpoint} from "../../../theme";

export const WrapperMenu = styled.div`
    display: none;

    ${breakpoint.lg} {
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
`;

export const StyledLi = styled.li`
    display: block;
    text-align: start;
    margin: 20px 0 0 40px;
`;

export const TypographyLink = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    transition: all 0.09s linear 0s;
    letter-spacing: 2px;

    &:hover {
        text-decoration: underline;
    }
`;
