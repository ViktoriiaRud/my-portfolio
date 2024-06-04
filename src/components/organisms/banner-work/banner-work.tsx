import React from 'react';

import { StyledWrapperImg } from './banner-work.styles';

import {BannerWorkType} from "../../../types/components";

const BannerWork = ({srcImage, altText}:BannerWorkType) => (
  <StyledWrapperImg>
      <img src={srcImage} alt={altText}/>
  </StyledWrapperImg>
);

export default BannerWork;