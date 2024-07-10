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
  border-radius: 4px;
  

  ${({ variant }) => {
    switch (variant) {
      case 'orange':
        return (
          'background-color: #F0700F; color: #FFFFFF; ' +
          ' &:hover {background-color: #FCC5BF; color: #000000;}'
        );
        
      case 'blue':
        return (
            'background-color: #225E81; color: #FFFFFF; ' +
            ' &:hover {background-color: #689CA1; color: #000000;}'
        );

      case 'gray':
        return (
          'background-color: #575757; color: #FFFFFF;' +
          ' &:hover {background-color: #C2C4BF; color: #000000; text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);\n' +
          '-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\n' +
          '-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);\n' +
          'transition: all 0.4s ease 0s;}'
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
