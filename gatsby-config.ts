import type { GatsbyConfig } from 'gatsby';
import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: 'http://localhost/8000',
  title: 'Portfolio',
  description: '',
  twitterUsername: '',
  image: '',
};

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-image`,
];

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,
  plugins,
};

export default gatsbyConfig;