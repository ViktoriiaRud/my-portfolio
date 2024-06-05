import React from 'react';
import {Field, Form, Formik} from 'formik';

import Button from '../../atoms/button';
import {
    StyledButtonWidth,
    StyledTypographyInput,
    StyledWrapperForm,
    WrapperFormContact,
} from './form-contact.styles';

import {ContactFormType} from "../../../types/components";
import {StyledWrapperButton} from "../../atoms/button/button.styles";

const FormContact = ({
                         button,
                         message,
                         name,
                         email,
                     }: ContactFormType) => {
    return (
        <WrapperFormContact>
            <Formik
                initialValues={{email: {email}}}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <StyledWrapperForm>
                        <Field type="name" name={name}/>
                        <StyledTypographyInput html={name} variant="body8"/>
                        <Field type="email" name={email}/>
                        <StyledTypographyInput html={email} variant="body8"/>
                        <Field className='message' type="message" name={message}/>
                        <StyledTypographyInput html={message} variant="body8"/>
                    </StyledWrapperForm>
                    <StyledButtonWidth>
                        <StyledWrapperButton>
                            <Button variant="orange" size="sm" href="#">
                                {button}
                            </Button>
                        </StyledWrapperButton>
                    </StyledButtonWidth>
                </Form>
            </Formik>
        </WrapperFormContact>
    );
};

export default FormContact;
