import * as React from 'react';
import Layout from "../components/tenplates/layout";
import AboutMe from "../components/organisms/about-me";
import {dataAboutMe, dataProjectCard} from "../data/data-main-page";
import ProjectCard from "../components/organisms/project-card";



const IndexPage = () => {
  return (
   <Layout>
     <AboutMe {...dataAboutMe}/>
       <ProjectCard {...dataProjectCard}/>
   </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;