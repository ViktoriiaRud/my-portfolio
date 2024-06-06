import styled from 'styled-components';

import { breakpoint } from '../../../theme';

import { TypographyType } from '.';

export const StyledTypography = styled.div<Pick<TypographyType, 'color'>>`
    color: ${({theme, color}) => (color ? theme.colors[color] : theme.colors.black)};

    strong {
        text-decoration: underline;
        text-decoration-skip-ink: none;
        text-decoration-color: ${({theme}) => theme.colors.rosybrownDark};
    }

    &[data-variant='title'] {
        font-size: 66px;
        font-weight: 400;
        line-height: 88px;
        letter-spacing: 6px;
    }

    &[data-variant='title_2'] {
        font-size: 42px;
        font-weight: 400;
        line-height: 52px;
        letter-spacing: 0;
    }

    &[data-variant='title_1'] {
        font-size: 32px;
        font-weight: 400;
        letter-spacing: 0;
    }

    &[data-variant='title_3'] {
        font-size: 38px;
        font-weight: 500;
        letter-spacing: 0;
    }

    &[data-variant='title_2'] {
        font-size: 26px;
        line-height: 36px;
    }

    &[data-variant='title_4'] {
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.2em;
    }

    &[data-variant='title_5'] {
        font-size: 20px;
        font-weight: 500;
    }


    &[data-variant='title_6'],
    &[data-variant='title06'] {
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 4px;
    }

    &[data-variant='title06'] {
        font-size: 13px;
    }

    &[data-variant='title_7'] {
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0;
    }
        
    &[data-variant='description'] {
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.09em;
    }

    &[data-variant='title_8'] {
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.04em;
    }
`;
