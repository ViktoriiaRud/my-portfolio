import React from 'react';

import { StyledWrapperButton } from '../../atoms/button/button.styles';
import {
  StyledButtonWidthOne,
  StyledButtonWidthTwo,
  StyledDoubleButton,
} from './button-double-blue.styles';

import {ButtonDoubleBlueType} from "../../../types/components";
import Button from "../../atoms/button";
const ButtonDoubleBlue = ({
  hrefButtonOne,
  titleButtonOne,
  titleButtonTwo,
  hrefButtonTwo,
}: ButtonDoubleBlueType) => (
  <StyledDoubleButton>
    <StyledButtonWidthOne>
      <StyledWrapperButton>
        <Button variant="blue" size="sm" href={hrefButtonOne}>
          {titleButtonOne}
        </Button>
      </StyledWrapperButton>
    </StyledButtonWidthOne>
    <StyledButtonWidthTwo>
      <StyledWrapperButton>
        <Button variant="transparent" size="sm" href={hrefButtonTwo}>
          {titleButtonTwo}
        </Button>
      </StyledWrapperButton>
    </StyledButtonWidthTwo>
  </StyledDoubleButton>
);

export default ButtonDoubleBlue;