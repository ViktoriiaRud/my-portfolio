import * as React from 'react';
import Layout from "../components/tenplates/layout";
import AboutMe from "../components/organisms/about-me";
import {dataAboutMe, dataProjectCard} from "../data/data-main-page";
import ProjectCard from "../components/organisms/project-card";
import Experience from "../components/organisms/experience";
import {dataExperience} from "../data/data-page";


const IndexPage = () => {
    return (
        <Layout>
            <AboutMe {...dataAboutMe}/>
            <ProjectCard {...dataProjectCard}/>
            <Experience {...dataExperience}/>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;