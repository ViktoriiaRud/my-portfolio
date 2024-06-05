import * as React from 'react';
import Layout from "../components/tenplates/layout";
import AboutMe from "../components/organisms/about-me";
import {dataAboutMe, dataProjectCard} from "../data/data-main-page";
import ProjectCard from "../components/organisms/project-card";
import Experience from "../components/organisms/experience";
import {
    dataAboutMeExperience,
    dataContact,
    dataBannerWork,
    dataExperience,
    dataIconSkillsTooltip
} from "../data/data-page";
import AboutMeExperience from "../components/organisms/about-me-experience";
import BannerWork from "../components/organisms/banner-work";
import IconSkillsTooltip from "../components/organisms/icon-skills-tooltip";
import Contact from "../components/organisms/contact";

const IndexPage = () => {
    return (
        <Layout>
            <AboutMe {...dataAboutMe}/>
            <AboutMeExperience {...dataAboutMeExperience}/>
            <ProjectCard {...dataProjectCard}/>
            <BannerWork {...dataBannerWork}/>
            <IconSkillsTooltip {...dataIconSkillsTooltip}/>
            <Experience {...dataExperience}/>
            <Contact{...dataContact}/>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;