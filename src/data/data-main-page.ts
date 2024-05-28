import myImage from '../assets/image-background/pexels-junior-teixeira.jpg';
import ProjectImg1 from '../assets/image/project3.png';
import ProjectImg2 from '../assets/image/project2.png';
import ProjectImg3 from '../assets/image/project1.png';

export const dataAboutMe: {
    srcImage: {};
    altText: string;
    subtitle: string;
    title: string;
} = {
    subtitle: 'My name is Viktoriia Rudneva',
    title: 'I\'m a Front-End Developer',
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
