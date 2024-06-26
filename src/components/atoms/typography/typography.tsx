import React from 'react';

import RichText from '../rich-text';

import { StyledTypography } from './typography.styles';
import {CustomThemeColorType} from "../../../theme/styled";

export type TypographyVariantType =
  | 'title'
  | 'title_1'
  | 'title_2'
  | 'title_3'
  | 'title_4'
  | 'title_5'
  | 'title_6'
  | 'title06'
  | 'title_7'
  |'title_8'
  | 'description';

export type TypographyComponentType = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'li' | 'cite';

export type TypographyType = {
  variant?: TypographyVariantType;
  component?: TypographyComponentType;
  color?: CustomThemeColorType;
  className?: string;
  html?: string;
};

const Typography = ({
  children,
  html,
  component = html ? 'div' : 'p',
  variant = 'body1',
  color = 'black',
  className,
}: React.PropsWithChildren<TypographyType>) => (
  <StyledTypography data-variant={variant} as={component} {...{ color, className }}>
    {html ? <RichText {...{ html }} /> : children}
  </StyledTypography>
);

export default Typography;
