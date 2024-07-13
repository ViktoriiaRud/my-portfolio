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
};

const FooterCopyright = ({titlePortfolio, titleName, titleDeveloper}: FooterCopyrightType) => (
    <>
        <StyledCopyrightWrapper>
            <StyledDataWrapper>
                <StyledDataYear>
                    <StyledTypographyLeft variant={"title06"} color={'white'}>Copyright © {new Date().getFullYear()}</StyledTypographyLeft>
                </StyledDataYear>
                <StyledPortfolio>
                    <StyledTypographyLeft html={titlePortfolio} variant="title06" color={'white'}/>
                </StyledPortfolio>
                <StyledName>
                    <StyledTypographyLeft html={titleName} variant="title06" color={'white'}/>
                </StyledName>
                <StyledDeveloper>
                    <StyledTypographyLeft html={titleDeveloper} variant="title06" color={'white'}/>
                </StyledDeveloper>
            </StyledDataWrapper>
        </StyledCopyrightWrapper>
    </>
);
export default FooterCopyright;
