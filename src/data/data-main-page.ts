import myImage from '../assets/image-background/pexels-junior-teixeira.jpg';
import ImgGen from '../assets/image/Gen.png';
import ImgRestaurant from '../assets/image/Restaurant.png';
import ImgTrip from '../assets/image/Trip.png';
import ImgHoustipster from '../assets/image/Houstipster.png';
import ImgApartment from '../assets/image/Apartment.png';
import ImgHrk from '../assets/image/Hrk.png';


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
                name: 'Project-GEN-B',
                title: 'Project-GEN-B',
                description: "Commercial project. I created the project myself. I used CSS, XML, StyledComponents, React, TypeScript, and Gatsby. Worked footer, banner, header, button, tooltip, dropdown menu, flipping cards, carousel, slider, reviews, hamburger menu, blog pages. Make basic components like the container, theme, typography.",
                titleButton: 'View Project',
                hrefButton: 'https://project-gen-b.vercel.app',
                srcImage: ImgGen,
                altText: 'Project-GEN-B',
            },
            {
                name: 'Housetipster',
                title: 'Housetipster',
                description: "Creating with team from scratch. I used Magento 2, JavaScript, XML, jQuery, Docker. Worked on the blog pages, product categories, footer.",
                titleButton: 'View Project',
                hrefButton: 'https://housetipster.com/',
                srcImage: ImgHoustipster,
                altText: 'Housetipster',
            },
            {
                name: 'Hrk',
                title: 'Hrk',
                description: "Creating with team from scratch. I used CSS, XML, StyledComponents, React, TypeScript, and Gatsby. Worked on creating an icon components.",
                titleButton: 'View Project',
                hrefButton: 'https://www.hrk.pl/',
                srcImage: ImgHrk,
                altText: 'Hrk',
            },
            {
                name: 'TourApartment',
                title: 'TourApartment',
                description: "Freelance project. I used CSS, XML, Tailwind, React, TypeScript, Next.js.",
                titleButton: 'View Project',
                hrefButton: 'https://tour-apartment.vercel.app/',
                srcImage: ImgApartment,
                altText: 'TourApartment',
            },
            {
                name: 'Restaurant',
                title: 'Restaurant',
                description: "Freelance project. I created the project myself. I used CSS, XML, StyledComponents, React, TypeScript.",
                titleButton: 'View Project',
                hrefButton: 'https://restaraunt-seven.vercel.app',
                srcImage: ImgRestaurant,
                altText: 'Restaurant',
            },
            {
                name: 'Trip',
                title: 'Trip',
                description: "Freelance project. My first project on react. I created the project myself. I used CSS, XML, StyledComponents, React.",
                titleButton: 'View Project',
                hrefButton: 'https://trip-mu.vercel.app',
                srcImage: ImgTrip,
                altText: 'Trip',
            },
        ],
    },
};
