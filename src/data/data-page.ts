import {
    AboutMeExperienceType, ContactType,
    BannerWorkType,
    ButtonDoubleBlueType, ContactFormType,
    ExperienceType,
    IconSkillsTooltipType
} from "../types/components";
import ImgExperience from '../assets/image/pexels-mizunokozuki-12899196.jpg';
import AboutMeExperienceImg from '../assets/image/myPhoto.png';
import {MenuType} from "../types/header";
import BannerImgWork from '../assets/image-background/pexels1.jpg';
import myLogo from "../assets/logo/logo-new/logo.png";


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
    hrefButtonOne: '../CV_ViktoriiaRudneva-Front-end_Developer.pdf',
    titleButtonOne: 'Download CV',
    hrefButtonTwo: '/#portfolio',
    titleButtonTwo: 'Portfolio',
}

export const dataAboutMeExperience: AboutMeExperienceType = {
    subtitle: 'About me',
    title: "My name is Viktoriia Rudneva",
    description: 'I am a dedicated and success-oriented',
    description2: ' Front-end Developer with over one year\n' +
        'of professional experience at For Better Future Software House.',
    description3: ' I have skills in web and e-commerce development, specializing in React and using additional' +
        ' technologies such as Typescript and Gatsby to enhance the project functionality. I also have experience with Magento 2.\n' +
        'I gained valuable experience as a freelance developer by developing two single-page websites (landing pages) before joining the company.',
    description4: 'I strive to stay current with industry trends and continually expand my skills to effectively contribute to dynamic development projects.',
    srcImage: AboutMeExperienceImg,
    altText: 'AboutMe',
}

export const dataMenu: MenuType = {
    items: {
        links: [
            { url: '/#about-me', title: 'About me' },
            { url: '/#portfolio', title: 'Portfolio' },
            { url: '/#skills', title: 'Skills' },
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

export const dataContactForm: ContactFormType = {
    name: 'Name*',
    email: 'E-mail*',
    message: 'Message*',
    button: 'send',
    hrefButton: '#',
};

export const dataContact: ContactType = {
    subtitle: 'contact info',
    email: 'e-mail',
    emailTitle: 'viktoriiadeveloper@gmail.com',
    phone: 'phone',
    phoneNumber: '+48 731 148 433',
    srcImage: myLogo,
    altText: "logo",
    linksSocial: [
        {
            url: 'https://github.com/ViktoriiaRud',
            icon: 'github',
        },
        {
            url: 'https://www.linkedin.com/in/viktoriia-rudneva',
            icon: 'linkedin',
        },
        {
            url: 'https://t.me/ViktoriiaRudneva_pl',
            icon: 'telegram',
        },
        {
            url: 'https://www.facebook.com/rudnevaviktoriia',
            icon: 'facebook',
        },
    ],
};