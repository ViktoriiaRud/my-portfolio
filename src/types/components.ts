import myLogo from "../assets/logo/logo-new/logo_transparent.png";

export type ProjectCardType = {
    contentCard: {
        cards: {
            name: string,
            title: string,
            description: string,
            titleButton: string,
            hrefButton: string,
            srcImage: string,
            altText: string,
        }[];
    };
};

export type ExperienceType = {
    srcImage?: {};
    altText: string,
    title: string;
    subTitle: string;
    subtitle2: string;
    subtitle3: string;
    subtitle4: string;
    subtitle5: string;
    subtitle6: string;
    subtitle7: string;
    subtitle8: string;
    subtitle9: string;
    subtitle10: string;
    subtitle11: string;
    subtitle12: string;
    subtitle13: string;
    subtitle14: string;
    subtitle15: string;
    subtitle16: string;
    subtitle17: string;
};

export type ButtonDoubleBlueType = {
    titleButtonOne: string;
    hrefButtonOne: string;
    titleButtonTwo: string;
    hrefButtonTwo: string;
};

export type AboutMeExperienceType = {
    srcImage: {};
    altText: string;
    subtitle: string;
    description: string;
    description2: string;
    description3: string;
    title: string;
    description4: string;
};

export type BannerWorkType = {
    srcImage: {};
    altText: string;
};

export type IconSkillsTooltipType = {
    linkText: string;
    icons: {
        name: string;
        smallIcon: string;
        title: string;
        description: string;
    }[];
};

export type ContactFormType = {
    name: string;
    email: string;
    message: string;
    button: string;
    hrefButton: string;
};

export type ContactType = {
    subtitle: string;
    email: string;
    emailTitle: string;
    phone: string;
    phoneNumber: string;
    srcImage: {};
    altText: string;
    linksSocial: {
        url: string;
        icon: string;
    }[];
};