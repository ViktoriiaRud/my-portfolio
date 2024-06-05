import React from 'react';

import Container from '../../atoms/container';
import FormContact from '../../molecules/form-contact';

import {
    StyledContact,
    StyledTitleFormContact,
    StyledWrapperForm,
    StyledWrapperTitle,
    TypographyContactSubtitle,
    TypographyEmailSubtitle,
    TypographyEmailTitle,
    TypographyPhoneNumber,
    TypographyPhoneSubtitle,
    WrapperContact,
} from './contact.styles';

import {ContactType} from "../../../types/components";
import {dataContactForm} from "../../../data/data-page";

const Contact = ({
                     subtitle,
                     phoneNumber,
                     phone,
                     email,
                     emailTitle,
                 }: ContactType) => {
    return (
        <WrapperContact>
            <Container>
                <StyledContact>
                    <StyledTitleFormContact>
                        <StyledWrapperForm>
                            <FormContact {...dataContactForm} />
                        </StyledWrapperForm>
                        <StyledWrapperTitle>
                            <TypographyContactSubtitle html={subtitle} variant="title_6" color={'white'}/>
                            <TypographyEmailSubtitle html={email} variant="title06" color="white"/>
                            <TypographyEmailTitle html={emailTitle} variant="description" color="white"/>
                            <TypographyPhoneSubtitle html={phone} variant="title06" color="white"/>
                            <TypographyPhoneNumber html={phoneNumber} variant="description" color="white"/>
                        </StyledWrapperTitle>
                    </StyledTitleFormContact>
                </StyledContact>
            </Container>
        </WrapperContact>
    );
};

export default Contact;