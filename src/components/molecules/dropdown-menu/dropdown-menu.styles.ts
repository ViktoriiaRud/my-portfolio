import styled from 'styled-components';

import { breakpoint } from '../../../theme';
import Typography from '../../atoms/typography';

export const WrapperDropdownMenu = styled.div`
`;

export const StyledLi = styled.li`
  display: block;
  text-align: start;
  margin-top: 20px;
`;

export const TypographyLink = styled(Typography)`
  font-family: ${({ theme }) => theme.font2};
  position: relative;
  transition: all 0.09s linear 0s;

  &:hover {
    color: ${({ theme }) => theme.colors.blueDark5};

    &:after {
      content: ' ';
      position: absolute;
      width: 7px;
      height: 7px;
      margin-top: 7px;
      left: -20px;
      background-color: ${({ theme }) => theme.colors.greenyellow};
      z-index: 4;
      border-radius: 50%;
    }
  }
`;

export const StyledContentDropdown = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: unset;
  flex-direction: row;
  justify-content: start;
  gap: 82px;
  position: absolute;
  top: 15px;
  left: 20%;

  ${breakpoint.md} {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    max-width: 490px;
    margin: 0 auto;
    gap: 10px;
  }

  ${breakpoint.lg} {
    max-width: 100%;
    display: flex;
    flex-wrap: unset;
    flex-direction: row;
    justify-content: start;
    gap: 82px;
    position: absolute;
    top: 22px;
    left: 18%;
  }
`;

export const StyledDropdownMenu = styled.ul`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 25px 24px 34px;
  width: 271px;
  min-height: 196px;
  border-radius: 0 5px 5px 5px;
  z-index: 22;
  box-shadow: 0 34px 34px 0 #1530604d;
`;

export const ButtonDropdown = styled.button<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.white : '')};
  width: 120px;
  height: 40px;
  padding: 10px;
  max-height: 40px;
  font-size: 14px;
  font-weight: 800;
  line-height: 18px;
  letter-spacing: 0;
  border-radius: 5px 5px 0 0;
  font-family: ${({ theme }) => theme.font2};
  transition-property: background-color;
  transition-duration: 200ms;
  transition-timing-function: ease;
`;