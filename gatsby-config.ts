import type { GatsbyConfig } from 'gatsby';
import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: 'http://localhost:8000',
  title: 'Portfolio',
  description: 'Portfolio',
  telegramUsername: '@ViktoriiaRudneva_pl',
  image: '',
};

const plugins: GatsbyConfig['plugins'] = [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Portfolio Viktoriia Rudneva`,
      short_name: `Portfolio`,
      start_url: `/`,
      display: `standalone`,
      icon: `src/assets/logo/favicon/android-chrome-512x512.png`,
    },
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-transition-link`,
];

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,
  plugins,
};

export default gatsbyConfig;