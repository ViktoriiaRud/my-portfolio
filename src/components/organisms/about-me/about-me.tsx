import React from 'react';
import Container from "../../atoms/container";
import Typography from "../../atoms/typography";

import {
    StyledWrapperAboutClient,
    StyledWrapperContact,
    StyledWrapperTitle,
    TypographyDescription,
    TypographySubtitle,
    TypographyTitle,
   WrapperAboutClient,
    TypographySubtitleKb,
} from "./about-me.styles";
import {Link} from "gatsby";


export type AboutMeType = {
};

const AboutMe = ({subtitle, titleAboutMe, altText, title, url, srcImage, description}: AboutMeType) => {
    return <>
        <WrapperAboutClient>
            <Container>
                <StyledWrapperAboutClient>
                    <StyledWrapperTitle>
                        <TypographySubtitle html={subtitle} variant="title" color={'rosybrownDark'}/>
                        <TypographyTitle html={title} variant="title1"/>
                        <TypographyDescription html={description} variant="body2"/>
                        <Link to={url}>
                            <h3>{titleAboutMe}</h3>
                        </Link>
                        <TypographySubtitleKb html={'My projects'} variant="title5" color={'rosybrown'}/>
                        <ul>
                            <li> <Link to={'https://project-gen-b.vercel.app'}>
                                <h3>Project-GEN-B</h3>
                            </Link></li>
                            <li><Link to={'https://restaraunt-seven.vercel.app'}>
                                <h3>Restaurant</h3>
                            </Link></li>
                            <li>
                                <Link to={'https://trip-mu.vercel.app'}>
                                    <h3>Trip</h3>
                                </Link>
                            </li>
                        </ul>
                    </StyledWrapperTitle>
                    <StyledWrapperContact>
                        <img src={srcImage} alt={altText}/>
                    </StyledWrapperContact>
                </StyledWrapperAboutClient>

                <TypographySubtitle>Work Experience</TypographySubtitle>
                <Typography html={'For Better Future Soft House'} variant={'title2'}/>
                <h4>( February 2023 - Present )</h4>
                <p>
                    I specialize in React and work on web pages and online stores.
                    <br/>
                    I used design Figma.
                    <br/>
                    Online store project.
                    <br/>
                    I used Magento 2, HTML, Less I did footer, blog, changed styles,
                    changed photos, added products to the store using les csv
                    <h5>(02/2023-05/2023)</h5>

                    Project Recruitment website
                    I used React, TypeScript. Created icon components.
                    <h5>(05/2023- 06/2023)</h5>
                    Project IT Company website
                    I used CSS, StyledComponents, React, TypeScript, and Gatsby. I
                    made components and styles. I created a footer, banner, header,
                    button, tooltip menu, drop down menu, ipping cards, carousel
                    slider, and carousel with reviews. Also, I created basic components,
                    such as a container and theme.
                    <h5>(06/2023...)</h5>
                    <br/>
                    <br/>
                </p>
                <h2>Freelancer</h2>
                <h4>( October 2022 - February 2023 )</h4>
                <p>
                    Project: “Trip’’ (Landing Page) (10/2022 - 12/2022)
                    <br/>
                    Project: “Restaurant’’ (Landing Page) (12/2022 - 2/2023)
                    <br/>
                    I used technology: CSS, StyledComponents, React, TypeScript</p>
            </Container>
        </WrapperAboutClient>
    </>
}


export default AboutMe;