import React from 'react';

import {
    StyledCopyrightWrapper,
    StyledPortfolio,
    StyledDataWrapper,
    StyledDataYear,
    StyledDeveloper,
    StyledTypographyLeft,
    StyledName,
} from './footer-copyright.styles';

export type FooterCopyrightType = {
    titlePortfolio: string;
    titleDeveloper: string;
    titleName: string;
    titlePrivacy: string;
    url: string;
};

const FooterCopyright = ({titlePortfolio, titleName, titlePrivacy, titleDeveloper, url}: FooterCopyrightType) => (
    <>
        <StyledCopyrightWrapper>
            <StyledDataWrapper>
                <StyledDataYear>
                    <StyledTypographyLeft variant={"title_4"} color={'white'}>{new Date().getFullYear()}</StyledTypographyLeft>
                </StyledDataYear>
                <StyledPortfolio>
                    <StyledTypographyLeft html={titlePortfolio} variant="title_4" color={'white'}/>
                </StyledPortfolio>
                <StyledDeveloper>
                    <StyledTypographyLeft html={titleDeveloper} variant="title_4" color={'white'}/>
                </StyledDeveloper>
                <StyledName>
                    <StyledTypographyLeft html={titleName} variant="title_4" color={'white'}/>
                </StyledName>
            </StyledDataWrapper>
        </StyledCopyrightWrapper>
    </>
);
export default FooterCopyright;
