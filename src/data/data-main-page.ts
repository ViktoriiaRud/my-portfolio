import myImage from '../assets/image-background/pexels-junior-teixeira.jpg';
import ProjectImg1 from '../assets/image/project-gen-b.png';
import ProjectImg2 from '../assets/image/project2.png';
import ProjectImg3 from '../assets/image/project1.png';
import ProjectImg4 from '../assets/image/Houstipster.png';

export const dataAboutMe: {
    srcImage: {};
    altText: string;
    subtitle: string;
    title: string;
} = {
    subtitle: 'Hello, i’m Viktoriia Rudneva',
    title: 'Front-End Developer',
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
                name: 'Housetipster',
                title: 'Housetipster',
                description: "Creating with team. I used Magento 2, JavaScript, XML, jQuery, Docker.",
                titleButton: 'View Project',
                hrefButton: 'https://housetipster.com/',
                srcImage: ProjectImg4,
                altText: 'Housetipster',
            },
            {
                name: 'Project-GEN-B',
                title: 'Project-GEN-B',
                description: "I used CSS, XML, StyledComponents, React, TypeScript, and Gatsby. ",
                titleButton: 'View Project',
                hrefButton: 'https://project-gen-b.vercel.app',
                srcImage: ProjectImg1,
                altText: 'Project-GEN-B',
            },
            {
                name: 'Restaurant',
                title: 'Restaurant',
                description: "I used CSS, XML, StyledComponents, React, TypeScript.",
                titleButton: 'View Project',
                hrefButton: 'https://restaraunt-seven.vercel.app',
                srcImage: ProjectImg2,
                altText: 'Restaurant',
            },
            {
                name: 'Trip',
                title: 'Trip',
                description: "I used CSS, XML, StyledComponents, React",
                titleButton: 'View Project',
                hrefButton: 'https://trip-mu.vercel.app',
                srcImage: ProjectImg3,
                altText: 'Trip',
            },

            {
                name: 'Restaurant',
                title: 'Restaurant',
                description: "I used CSS, XML, StyledComponents, React, TypeScript.",
                titleButton: 'View Project',
                hrefButton: 'https://restaraunt-seven.vercel.app',
                srcImage: ProjectImg2,
                altText: 'Restaurant',
            },
            {
                name: 'Trip',
                title: 'Trip',
                description: "I used CSS, XML, StyledComponents, React",
                titleButton: 'View Project',
                hrefButton: 'https://trip-mu.vercel.app',
                srcImage: ProjectImg3,
                altText: 'Trip',
            },
        ],
    },
};
