import styled from 'styled-components';

import { ButtonPropsType } from './button';


export const StyledButton = styled.a<ButtonPropsType>`
  display: block;
  width: 100%;
  border: none;
  margin: 0 auto;
  position: relative;
  font-family: ${({ theme }) => theme.font2};
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
  

  ${({ variant }) => {
    switch (variant) {
      case 'rosybrownDark':
        return (
          'background-color: #8C2C61; color: #FFFFFF; ' +
          ' &:hover {background-color: #C54B73; color: #FFFFFF;}'
        );

      case 'lightpink':
        return (
          'background-color: #FCDEEF; color: #FFFFFF; ' +
          ' &:hover {background-color: #C54B73; color: black;}'
        );

      case 'gray':
        return (
          'background-color: #575757; color: #FFFFFF;' +
          ' &:hover {background-color: #C54B73; color: #FFFFFF;}'
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
