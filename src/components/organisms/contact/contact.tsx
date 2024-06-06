import React from 'react';

import Container from '../../atoms/container';
import FormContact from '../../molecules/form-contact';

import {
    StyledContact,
    StyledTitleFormContact,
    StyledWrapperForm,
    StyledWrapperTitleSocial,
    TypographyContactSubtitle,
    TypographyEmailSubtitle,
    TypographyEmailTitle,
    TypographyPhoneNumber,
    TypographyPhoneSubtitle,
    WrapperContact,
    StyledWrapperSocial,
    WrapperSocialIcon,
    StyledWrapperTitleLogo,
    WrapperLogo,
    WrapperTitle,
} from './contact.styles';

import {ContactType} from "../../../types/components";
import {dataContactForm} from "../../../data/data-page";
import Icon from "../../atoms/icon";
import {Link} from "gatsby";

const Contact = ({
                     subtitle,
                     phoneNumber,
                     phone,
                     email,
                     emailTitle,
                     linksSocial,
                     srcImage,
                     altText,
                 }: ContactType) => {
    return (
        <WrapperContact>
            <Container>
                <StyledContact>
                    <StyledTitleFormContact>
                        <StyledWrapperForm>
                            <FormContact {...dataContactForm} />
                        </StyledWrapperForm>
                        <StyledWrapperTitleSocial>
                          <StyledWrapperTitleLogo>
                              <WrapperTitle>
                                  <TypographyContactSubtitle html={subtitle} variant="title_6" color={'white'}/>
                                  <TypographyEmailSubtitle html={email} variant="title06" color="white"/>
                                  <TypographyEmailTitle html={emailTitle} variant="description" color="white"/>
                                  <TypographyPhoneSubtitle html={phone} variant="title06" color="white"/>
                                  <TypographyPhoneNumber html={phoneNumber} variant="description" color="white"/>
                              </WrapperTitle>
                              <WrapperLogo>
                                  <img src={srcImage} alt={altText}/>
                              </WrapperLogo>
                          </StyledWrapperTitleLogo>
                            <StyledWrapperSocial>
                                {linksSocial
                                    ? linksSocial.map((item) => (
                                        <WrapperSocialIcon>
                                            <Link to={item.url}>
                                                <Icon name={item.icon} />
                                            </Link>
                                        </WrapperSocialIcon>
                                    ))
                                    : null}
                            </StyledWrapperSocial>
                        </StyledWrapperTitleSocial>
                    </StyledTitleFormContact>
                </StyledContact>
            </Container>
        </WrapperContact>
    );
};

export default Contact;