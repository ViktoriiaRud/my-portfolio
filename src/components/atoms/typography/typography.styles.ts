import styled from 'styled-components';

import { breakpoint } from '../../../theme';

import { TypographyType } from '.';

export const StyledTypography = styled.div<Pick<TypographyType, 'color'>>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};

  strong {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-decoration-color: ${({ theme }) => theme.colors.blue};
  }

  &[data-variant='title'],
  &[data-variant='title2'] {
    font-size: 42px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0;
  }

  &[data-variant='title1'] {
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 0;
  }

  &[data-variant='title15'] {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: 0;
  }

  &[data-variant='title2'] {
    font-size: 28px;
  }

  &[data-variant='title3'],
  &[data-variant='title4'] {
    font-size: 12px;
    font-weight: 400;
  }

  &[data-variant='title3'] {
    letter-spacing: 0.2em;
  }

  &[data-variant='title5'] {
    font-size: 20px;
    font-weight: 500;
  }

  &[data-variant='title6'],
  &[data-variant='title06'] {
    font-size: 15px;
    line-height: 18px;
    font-weight: 800;
    letter-spacing: 0;
  }

  &[data-variant='title06'] {
    font-size: 13px;

    ${breakpoint.md} {
      font-size: 13px;
    }
  }

  &[data-variant='title7'],
  &[data-variant='title8'],
  &[data-variant='title9'] {
    font-size: 13px;
    line-height: 18px;
    font-weight: 300;
    letter-spacing: 0;

    ${breakpoint.md} {
      font-size: 13px;
    }
  }

  &[data-variant='title8'] {
    font-size: 11px;
  }

  &[data-variant='title9'] {
    line-height: 26px;
  }

  &[data-variant='title10'] {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
  }

  &[data-variant='title11'] {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.2em;
  }

  &[data-variant='title12'] {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0em;
  }

  &[data-variant='title13'] {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.2em;
  }

  &[data-variant='title14'] {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  &[data-variant='body1'],
  &[data-variant='body2'],
  &[data-variant='body3'] {
    font-size: 17px;
    line-height: 32px;
    font-weight: 300;
    letter-spacing: 0.05em;
  }

  &[data-variant='body2'] {
    font-size: 15px;
    line-height: 26px;
  }

  &[data-variant='body3'] {
    font-size: 16px;
    line-height: 22px;
  }

  &[data-variant='body4'],
  &[data-variant='body5'] {
    font-size: 15px;
    font-style: italic;
    font-weight: 800;
    letter-spacing: 0.05em;
  }

  &[data-variant='body5'] {
    font-weight: 300;
  }

  &[data-variant='body6'],
  &[data-variant='body7'] {
    font-size: 13px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0.05em;
  }

  &[data-variant='body7'] {
    font-size: 15px;
    line-height: 26px;
  }

  &[data-variant='body8'] {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
    color: #0000006b;
  }

  &[data-variant='body9'] {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
  }

  &[data-variant='body10'] {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.05em;
  }
`;
