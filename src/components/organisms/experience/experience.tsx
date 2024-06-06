import React from 'react';

import {
    StyledWrapperExperience,
    TypographySubtitleExp,
    TypographySubtitle,
    TypographyDescription,
    TypographyData,
    TypographyTitle,
    StyledWrapperHow,
    StyledWrapperHowImage,
} from './experience.styles';
import Container from "../../atoms/container";

import {ExperienceType} from "../../../types/components";

const Experience = ({title, subTitle, srcImage, altText, subtitle2, subtitle4, subtitle5, subtitle6, subtitle7, subtitle8, subtitle9, subtitle3, subtitle10, subtitle12, subtitle13, subtitle11, subtitle14, subtitle15, subtitle16, subtitle17}: ExperienceType) => {
    return <>
        <Container>
            <StyledWrapperExperience id={'experience'}>
                    <StyledWrapperHow>
                        <TypographyTitle html={title} variant="title_6"/>
                        <TypographySubtitleExp html={subTitle} variant="title_3" color={'orange'}/>
                        <TypographySubtitle html={subtitle2} variant={'title_5'}/>
                        <TypographyData html={subtitle3} variant={'title_4'}/>
                        <TypographyDescription variant={'description'}>
                            {subtitle4}
                            <br/>
                            {subtitle5}
                            <br/>
                            {subtitle6}
                            <br/>
                            {subtitle7}
                            <TypographyData html={subtitle8} variant={'title_4'}/>
                            {subtitle9}
                            <TypographyData html={subtitle10} variant={'title_4'}/>
                            {subtitle11}
                            <TypographyData html={subtitle12} variant={'title_4'}/>
                            <br/>
                            <br/>
                        </TypographyDescription>
                        <TypographySubtitle html={subtitle13} variant={'title_5'}/>
                        <TypographyData html={subtitle14} variant={'title_4'}/>
                        <TypographyDescription variant={'description'}>
                            {subtitle15}
                            <br/>
                            {subtitle16}
                            <br/>
                            {subtitle17}
                        </TypographyDescription>
                    </StyledWrapperHow>
                    <StyledWrapperHowImage>
                        <img src={srcImage} alt={altText}/>
                    </StyledWrapperHowImage>
            </StyledWrapperExperience>
        </Container>
    </>
}

export default Experience;