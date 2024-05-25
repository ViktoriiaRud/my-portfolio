import React from 'react';

import Container from '../../atoms/container';

import {
  StyledTypographyDescription,
  StyledWrapperImg,
  WrapperAboutMeExperience,
  StyledWrapperTitle,
  TypographySubtitle,
  TypographyTitle,
  StyledWrapperAboutMeExperience,
} from './about-me-experience.styles.ts';
import {AboutMeExperienceType} from "../../../types/components";


const AboutMeExperience = ({
  subtitle,
  description,
  title,
  srcImage,
  altText,
}: AboutMeExperienceType) => (
  <WrapperAboutMeExperience>
    <Container>
      <StyledWrapperAboutMeExperience>
        <StyledWrapperImg>
          <img src={srcImage} alt={altText}/>
        </StyledWrapperImg>
        <StyledWrapperTitle>
        <TypographySubtitle html={subtitle} variant="title_2" />
          <TypographyTitle html={title} variant="title_3" color={'blueDark5'}/>
          <StyledTypographyDescription variant="description">
            {description}
          </StyledTypographyDescription>
        </StyledWrapperTitle>
      </StyledWrapperAboutMeExperience>
    </Container>
  </WrapperAboutMeExperience>
);

export default AboutMeExperience;