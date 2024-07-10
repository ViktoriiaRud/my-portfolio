import styled from 'styled-components';

import Typography from '../../atoms/typography';
import {breakpoint} from "../../../theme";

export const WrapperMenu = styled.ul`
    display: none;

    ${breakpoint.lg} {
        margin: auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
`;

export const StyledLi = styled.li`
    display: block;
    text-align: start;
    margin: 20px 0 0 40px;

    a {
        text-decoration: none;
        display: block;
        padding: 5px 0;
        font-size: 26px;
        line-height: 1;
        font-weight: bold;
        position: relative;
        z-index: 1;
        text-align: center;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
                to right,
                #23abd4,
                #23abd4 50%,
                #fff 50%);
        background-size: 200% 100%;
        background-position: -100%;
        transition: all 0.3s ease-in-out;

        &:before {
            display: block;
            content: '';
            width: 0;
            height: 3px;
            left: 0;
            bottom: -3px;
            z-index: 0;
            position: absolute;
            background: #23abd4;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            background-position: 0%;

            &:before {
                width: 100%;
            }
        }
    }
`;

export const TypographyLink = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    transition: all 0.09s linear 0s;
    letter-spacing: 2px;

    &:hover {
        text-decoration: underline;
    }
`;
