import * as React from 'react';
import Layout from "../components/tenplates/layout";
import AboutMe from "../components/organisms/about-me";
import {dataAboutMe} from "../data/data-main-page";



const IndexPage = () => {
  return (
   <Layout>
     <AboutMe {...dataAboutMe}/>
   </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;