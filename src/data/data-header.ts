import myLogo from "../assets/logo/logo_portfolio.png";
import {DropdownMenuType} from "../types/header";

export const dataHeader = {
    srcImage: myLogo,
    altText: "logo",
    url: "/",
}

export const dataDropdownMenu: DropdownMenuType = {
    dropdownItems: {
        items: [
            {
                button: 'Portfolio',
                links: [
                    { url: '/#portfolio', title: 'Project-GEN-B' },
                    { url: '/#portfolio', title: 'Project Restaurant' },
                    { url: '/#portfolio', title: 'Project Trip' },
                ],
            },
            {
                button: 'Experience',
                links: [
                    { url: '/#experience', title: 'Freelancer' },
                    { url: '/#experience', title: 'For Better Future Soft House' },
                    { url: '/#experience', title: 'Freelancer' },
                ],
            },
            {
                button: 'Technologies',
                links: [
                    { url: '/#technologies', title: 'HTML5' },
                    { url: '/#technologies', title: 'CSS' },
                    { url: '/#technologies', title: 'JavaScript' },
                    { url: '/#technologies', title: 'TypeScript' },
                    { url: '/#technologies', title: 'React' },
                    { url: '/#technologies', title: 'Gatsby' },
                ],
            },
        ],
    },
};