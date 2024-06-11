import styled from 'styled-components';

import {breakpoint} from '../../../theme';
import Icon from '../../atoms/icon';
import Typography from '../../atoms/typography';

export const StyledWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.orange};
    padding: 0 0 120px;
`;

export const StyledWrapperTooltip = styled.div`
    margin: 10px auto;
    max-width: ${({theme}) => theme.wrapperXxs};
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${({theme}) => theme.gap.xl};

    ${breakpoint.sm} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: ${({theme}) => theme.gap.xxl};
    }

    ${breakpoint.md} {
        max-width: 540px;
    }

    ${breakpoint.xl} {
        flex-wrap: unset;
        margin: 0 auto;
        max-width: 1044px;
        gap: 0;
    }

    ${breakpoint.xxl} {
        max-width: 1255px;
    }
`;

export const IconContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;
    max-width: 40px;
    margin: 50px auto;

    ${breakpoint.lg} {
        width: unset;
    }

    &:hover div {
        opacity: 1;
        visibility: visible;
    }
`;

export const Tooltip = styled.div`
    width: 254px;
    height: 247px;
    position: absolute;
    bottom: 100%;
    top: -95px;
    left: 90%;
    transform: translateX(-50%);
    padding-top: 20px;
    background-color: ${({theme}) => theme.colors.white};
    opacity: 0;
    box-shadow: 0 14px 24px 0 #00000040;
    visibility: hidden;
    transition: opacity 0.6s, visibility 0.6s;
    z-index: 10;
    border-radius: 10px;
    border: 1px;
`;

export const SmallIcon = styled(Icon)`
    display: block;
    margin: 10px auto;
    width: 40px;
    height: 40px;
`;

export const StyledTooltipTitle = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    letter-spacing: 0;
    display: block;
    text-align: center;
    margin-top: 0;
    line-height: 26px;
`;

export const StyledTooltipDescription = styled(Typography)`
    font-family: ${({theme}) => theme.font3};
    display: block;
    text-align: center;
    padding: 15px 15px 10px;
`;

export const StyledWrapperText = styled.div`
    padding: 0 20px 120px;
`;

export const StyledIconFront = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 100%;
    top: -95px;
    transform: translateX(-50%);
    padding: 30px;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: 0 14px 24px 0 #00000040;
    transition: opacity 0.6s, visibility 0.6s;
    z-index: 0;
    border-radius: 10px;
`;