import * as React from 'react';

const pageStyles = {
  color: '#2E3638',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 20,
  marginBottom: 64,
  maxWidth: 1320,
};
const headingAccentStyles = {
  color: '#3E9AB1',
  width: '1500px',
};
const paragraphStyles = {
  marginBottom: 48,
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#1C697D',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: 'About me',
  url: 'https://viktoriiarud.github.io/',
  color: '#3E9AB1',
};

const links = [
  {
    text: 'Project Vakansiia',
    url: 'https://project-gatsby-nine.vercel.app',
    description: '',
    color: '#EDEB35',
  },
  {
    text: 'Restaraunt',
    url: 'https://restaraunt-9e6fybg6g-rudnevaviktoriia1-gmailcom.vercel.app/',
    description: "",
    color: '#EDEB35',
  },
  {
    text: 'Trip',
    url: 'https://trip-mu.vercel.app/',
    description: "",
    color: '#EDEB35',
  },
];

const IndexPage = () => {
  return (
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          My name is Viktoriia Rudneva
          <br/>
          <a
              style={linkStyle}
              href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
          <br/>

          <br/>
          <span style={headingAccentStyles}>
           I am a dedicated and aspiring Front-end Developer with one year
of professional experience at For Better Future Software House. I
am pro cient in developing web pages and online stores,
specializing in React and utilizing additional technologies such as
Typescript and Gatsby to enhance project functionality.
Demonstrated versatility by successfully creating an online store
using Magento 2. I acquired valuable experience as a freelance
developer by delivering two one-page websites (Landing Pages)
before joining the company. I am committed to staying abreast of
industry trends and continually expanding my skills to contribute
effectively to dynamic development projects.
        </span>
        </h1>

        <h2>Work Experience</h2>
        <h3>For Better Future Soft House</h3>
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
          {/*<br/>*/}
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

        <p style={paragraphStyles}>
        </p>
        <ul style={listStyles}>
          <li style={docLinkStyle}>
        <h3>My project</h3>
          </li>
          {links.map(link => (
              <li key={link.url} style={{...listItemStyles, color: link.color}}>
            <span>
              <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
              </li>
          ))}
        </ul>
      </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;