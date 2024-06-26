import React from 'react';

import { StyledButton } from './button.styles';

export type ButtonPropsType = {
  href?: string;
  variant?:
    | 'orange'
    | 'lightpink'
    | 'gray'
    | 'greenyellow'
    | 'blue'
    | 'transparent'
  size?: 'sm' | 'md' | 'lg';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void | React.MouseEventHandler<HTMLButtonElement>;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
const Button: React.FC<ButtonPropsType> = ({
  variant = 'blue',
  size = 'sm',
  onClick,
  href,
  children,
}) => (
  <StyledButton variant={variant} size={size} as={onClick ? 'button' : 'a'} href={href}>
    {children}
  </StyledButton>
);

export default Button;
