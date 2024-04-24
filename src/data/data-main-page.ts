import myImage from '../assets/image/myPhoto.png';
import ProjectImg1 from '../assets/image/project3.png';
import ProjectImg2 from '../assets/image/project2.png';
import ProjectImg3 from '../assets/image/project1.png';

export const dataAboutMe: {
    titleAboutMe: string;
    srcImage: {};
    altText: string;
    subtitle: string;
    description: string;
    title: string;
    url: string;
} = {
    subtitle: 'My name is Viktoriia Rudneva',
    description: 'I am a dedicated and aspiring Front-end Developer with one year\n' +
        'of professional experience at For Better Future Software House. \n' +
        'am pro client in developing web pages and online stores,\n' +
        'specializing in React and utilizing additional technologies such as\n' +
        'Typescript and Gatsby to enhance project functionality.\n' +
        'Demonstrated versatility by successfully creating an online store\n' +
        'using Magento 2. I acquired valuable experience as a freelance\n' +
        'developer by delivering two one-page websites (Landing Pages)\n' +
        'before joining the company. I am committed to staying abreast of\n' +
        'industry trends and continually expanding my skills to contribute\n' +
        'effectively to dynamic development projects.',
    titleAboutMe: 'About me',
    title: 'I am Front-end Developer',
    url: 'https://viktoriiarud.github.io/',
    srcImage: myImage,
    altText: 'Front-end Developer Viktoriia Rudneva',
};

export const dataProjectCard: {
    contentCard: {
        cards: ({
            srcImage: {};
            titleButton: string;
            altText: string;
            hrefButton: string;
            name: string;
            description: string;
            title: string;
        })[]
    }
} = {
    contentCard: {
        cards: [
            {
                name: 'Project-GEN-B',
                title: 'Project-GEN-B',
                description: "I used CSS, StyledComponents, React, TypeScript, and Gatsby. ",
                titleButton: 'read more',
                hrefButton: 'https://project-gen-b.vercel.app',
                srcImage: ProjectImg1,
                altText: 'Project-GEN-B',
            },
            {
                name: 'Restaurant',
                title: 'Restaurant',
                description: "I used CSS, StyledComponents, React, TypeScript, and Gatsby",
                titleButton: 'read more',
                hrefButton: 'https://restaraunt-seven.vercel.app',
                srcImage: ProjectImg2,
                altText: 'Restaurant',
            },
            {
                name: 'Trip',
                title: 'Trip',
                description: "I used CSS, StyledComponents, React",
                titleButton: 'read more',
                hrefButton: 'https://trip-mu.vercel.app',
                srcImage: ProjectImg3,
                altText: 'Trip',
            },
        ],
    },
};
