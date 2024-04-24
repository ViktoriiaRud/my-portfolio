import React from 'react';

import {
    StyledCopyrightWrapper,
    StyledPortfolio,
    StyledDataWrapper,
    StyledDataYear,
    StyledDeveloper,
    StyledPolicy,
    StyledPolicyWrapper,
    StyledSpanCopyright,
    StyledTypographyLeft,
    StyledTypographyRight,
    StyledName,
} from './footer-copyright.styles';
import {Link} from "gatsby";

export type FooterCopyrightType = {
    titlePortfolio: string;
    titleDeveloper: string;
    titleName: string;
    titlePrivacy: string;
    url: string;
};

const FooterCopyright = ({titlePortfolio, titleName, titlePrivacy, titleDeveloper, url}: FooterCopyrightType) => (
    <>
        <StyledSpanCopyright/>
        <StyledCopyrightWrapper>
            <StyledDataWrapper>
                <StyledDataYear>
                    <StyledTypographyLeft variant={"title_4"}>{new Date().getFullYear()}</StyledTypographyLeft>
                </StyledDataYear>
                <StyledPortfolio>
                    <StyledTypographyLeft html={titlePortfolio} variant="title_4"/>
                </StyledPortfolio>
                <StyledDeveloper>
                    <StyledTypographyLeft html={titleDeveloper} variant="title_4"/>
                </StyledDeveloper>
                <StyledName>
                    <StyledTypographyLeft html={titleName} variant="title_4"/>
                </StyledName>
            </StyledDataWrapper>
            <StyledPolicyWrapper>
                <StyledPolicy>
                    <Link to={url}>
                        <StyledTypographyRight html={titlePrivacy} variant="title_4"/>
                    </Link>
                </StyledPolicy>
            </StyledPolicyWrapper>
        </StyledCopyrightWrapper>
    </>
);
export default FooterCopyright;
