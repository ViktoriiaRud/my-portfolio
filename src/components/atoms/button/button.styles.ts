import styled from 'styled-components';

import { ButtonPropsType } from './button';


export const StyledButton = styled.a<ButtonPropsType>`
  display: block;
  width: 100%;
  border: none;
  margin: 0 auto;
  position: relative;
  font-family: ${({ theme }) => theme.font3};
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
  

  ${({ variant }) => {
    switch (variant) {
      case 'orange':
        return (
          'background-color: #F0700F; color: #FFFFFF; ' +
          ' &:hover {background-color: #FCC5BF; color: #000000;}'
        );

      case 'lightpink':
        return (
          'background-color: #FCDEEF; color: #FFFFFF; ' +
          ' &:hover {background-color: #C54B73; color: #000000;}'
        );

      case 'greenyellow':
        return (
            'background-color: #C2EC22; color: #FFFFFF; ' +
            ' &:hover {background-color: #C54B73; color: #000000;}'
        );

      case 'blue':
        return (
            'background-color: #225E81; color: #FFFFFF; ' +
            ' &:hover {background-color: #689CA1; color: #000000;}'
        );

      case 'transparent':
        return (
            'background-color: transparent; color: #FFFFFF; ' +
            ' &:hover {color: #C2C4BF;}'
        );

      case 'gray':
        return (
          'background-color: #575757; color: #FFFFFF;' +
          ' &:hover {background-color: #C2C4BF; color: #000000;}'
        );
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return 'padding: 8px 15px;';
      case 'md':
        return 'padding: 8px 26px;';
      case 'lg':
        return 'padding: 8px 42px;';
      default:
        return '';
    }
  }}
`;

export const StyledWrapperButton = styled.div`
  margin: 0 auto;
  display: flex;
`;
