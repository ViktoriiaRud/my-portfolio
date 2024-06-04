import {
    AboutMeExperienceType,
    BannerWorkType,
    ButtonDoubleBlueType,
    ExperienceType,
    IconSkillsTooltipType
} from "../types/components";
import ImgExperience from '../assets/image/pexels-mizunokozuki-12899196.jpg';
import AboutMeExperienceImg from '../assets/image/myPhoto.png';
import {MenuType} from "../types/header";
import BannerImgWork from '../assets/image-background/pexels1.jpg';

export const dataExperience: ExperienceType = {
    srcImage: ImgExperience,
    altText: 'Experience',
    title: 'Experience',
    subTitle: 'How can I be useful',
    subtitle2: 'For Better Future Soft House',
    subtitle3: '( February 2023 - Present )',
    subtitle4: ' I specialize in React and work on web pages and online stores.',
    subtitle5: ' I used design Figma.',
    subtitle6: 'Online store project.',
    subtitle7: 'I used Magento 2, HTML, Less I did footer, blog, changed styles, changed photos, added products to the store using les csv',
    subtitle8: '( 02/2023-05/2023 )',
    subtitle9: '  Project Recruitment website I used React, TypeScript. Created icon components.',
    subtitle10: '( 05/2023- 06/2023 )',
    subtitle11: '  Project IT Company website\n' +
        '                        I used CSS, StyledComponents, React, TypeScript, and Gatsby. I\n' +
        '                        made components and styles. I created a footer, banner, header,\n' +
        '                        button, tooltip menu, drop down menu, ipping cards, carousel\n' +
        '                        slider, and carousel with reviews. Also, I created basic components,\n' +
        '                        such as a container and theme.',
    subtitle12: '( 06/2023-04/2024)',
    subtitle13: 'Freelancer',
    subtitle14: '( October 2022 - February 2023 )',
    subtitle15: 'Project: “Trip’’ (Landing Page) (10/2022 - 12/2022)',
    subtitle16: 'Project: “Restaurant’’ (Landing Page) (12/2022 - 2/2023)',
    subtitle17: 'I used technology: CSS, StyledComponents, React, TypeScript',
}

export const dataButtonDoubleBlue: ButtonDoubleBlueType = {
    hrefButtonOne: 'https://www.linkedin.com/in/viktoriia-rudneva/overlay/1635555348034/single-media-viewer/?profileId=ACoAADZldC4BVpSouJHG6mMzqa_xueBtUOD6tTI',
    titleButtonOne: 'Download CV',
    hrefButtonTwo: '/#portfolio',
    titleButtonTwo: 'Portfolio',
}

export const dataAboutMeExperience: AboutMeExperienceType = {
    subtitle: 'About me',
    title: "My name is Viktoriia Rudneva",
    description: 'I am a dedicated and aspiring',
    description2: ' Front-end Developer with one year\n' +
        'of professional experience at For Better Future Software House.',
    description3: ' I\n' +
        'am proficient in developing web pages and online stores,\n' +
        'specializing in React and utilizing additional technologies such as\n' +
        'Typescript and Gatsby to enhance project functionality.\n' +
        'Demonstrated versatility by successfully creating an online store\n' +
        'using Magento 2. I acquired valuable experience as a freelance\n' +
        'developer by delivering two one-page websites (Landing Pages)\n' +
        'before joining the company.',
    description4: 'I am committed to staying abreast of\n' +
        'industry trends and continually expanding my skills to contribute\n' +
        'effectively to dynamic development projects.',
    srcImage: AboutMeExperienceImg,
    altText: 'AboutMe',
}

export const dataMenu: MenuType = {
    items: {
        links: [
            { url: '/#about-me', title: 'About me' },
            { url: '/#portfolio', title: 'Portfolio' },
            { url: 'skills', title: 'Skills' },
            { url: '/#experience', title: 'Experience' },
        ],
    },
};

export const dataBannerWork: BannerWorkType = {
    srcImage: BannerImgWork,
    altText: "work",
};

export const dataIconSkillsTooltip: IconSkillsTooltipType = {
    linkText: 'SHOW EXAMPLE',
    icons: [
        {
            name: 'tooltip-javascript',
            smallIcon: 'tooltip-javascript',
            title: 'JavaScript',
            description:
                'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. ',
        },
        {
            name: 'tooltip-typescript',
            smallIcon: 'tooltip-typescript',
            title: 'TypeScript',
            description:
                'The solution to extensive development projects that need swappable components and strong architectural stability.',
        },
        {
            name: 'tooltip-react',
            smallIcon: 'tooltip-react',
            title: 'React',
            description:
                'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.',
        },
        {
            name: 'tooltip-next',
            smallIcon: 'tooltip-next',
            title: 'Next.js',
            description:
                'Next.js is a flexible React framework that gives you building blocks to create fast, full-stack web applications.',
        },
    ],
};