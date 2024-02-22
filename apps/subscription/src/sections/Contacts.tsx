import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import OpenInNewWindowSVG from '../../public/assets/images/open-in-new-window.svg';
import {
  Button,
  Container,
  H2,
  H4,
  Input,
  Item,
  Paragraph,
  Section,
  Textarea,
} from '../components';
import { breakpoints } from '../helpers';
import { translate } from '../locales';
import { LocaleText } from '../renderer/LocaleText';
import { usePageContext } from '../renderer/usePageContext';

const StyledForm = styled(Item)`
  background-color: #fff;
  border-top: 0.5rem solid #121118;
  box-shadow: 0 0 5rem rgba(18, 17, 24, 0.1);
  padding: 3rem 2rem;

  ${Button} {
    background-image: linear-gradient(to bottom right, #121118 50%, #0d52ff 0);

    &:hover {
      color: #fff;
    }
  }

  ${breakpoints.desktop} {
    padding: 6rem 5rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: 100;
  line-height: 2.7rem;
`;

const StyledLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 100;
  line-height: 2.7rem;
  margin-bottom: 2rem;
  text-decoration: none;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    transition: 0.3s ease width;
    background-color: #fff;
  }

  &:hover::after {
    width: 100%;
  }
`;

const isEmpty = (value: string) => value.length === 0;

const isCorrectEmail = (email: string) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );

interface FormData {
  name: string;
  message: string;
  email: string;
}

const defaultFormData: FormData = { name: '', message: '', email: '' };
const defaultIsDirty: Record<keyof FormData, boolean> = {
  name: false,
  email: false,
  message: false,
};
const defaultErrors: Partial<Record<keyof FormData, string>> = {};
const defaultIsSubmitted = false;

const validateField = (fieldName: keyof FormData, value: string) => {
  switch (fieldName) {
    case 'name':
    case 'message':
      return isEmpty(value) ? 'Field is required' : undefined;

    case 'email':
      return !isCorrectEmail(value) ? 'Please use correct email address' : undefined;

    default:
      return undefined;
  }
};

const useForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(defaultIsSubmitted);
  const [data, setData] = useState(defaultFormData);
  const [isDirty, setIsDirty] = useState(defaultIsDirty);
  const [errors, setErrors] = useState(defaultErrors);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const fieldName = e.target.id as keyof FormData;
      const value = e.target.value;

      setData((prevData) => ({ ...prevData, [fieldName]: value }));
      setErrors((prevData) => ({ ...prevData, [fieldName]: validateField(fieldName, value) }));
      setIsDirty((prevData) => ({ ...prevData, [fieldName]: true }));
    },
    [setData, setErrors, setIsDirty],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const formSubmissionQuery = new URLSearchParams(data as any).toString();
      const resp = await fetch(`/api/v2/feedback-form?${formSubmissionQuery}`, {
        method: 'POST',
      });

      if (resp.status === 200) {
        setIsSubmitted(true);
      }
    },
    [data, setIsSubmitted],
  );

  const isDisabled =
    Object.values(data).every((value) => isEmpty(value)) ||
    Object.values(errors).some((error) => error !== undefined);

  const resetForm = useCallback(() => {
    setData(defaultFormData);
    setErrors(defaultErrors);
    setIsDirty(defaultIsDirty);
    setIsSubmitted(defaultIsSubmitted);
  }, [setData, setErrors, setIsDirty, setIsSubmitted]);

  return { data, errors, isDisabled, isDirty, isSubmitted, resetForm, handleChange, handleSubmit };
};

export const Contacts = () => {
  const { errors, isDirty, isSubmitted, isDisabled, data, resetForm, handleChange, handleSubmit } =
    useForm();
  const { locale } = usePageContext();

  return (
    <Section background="primary" id="contacts">
      <Container>
        <Item flexBasis="50%">
          <H2 color="light">
            <LocaleText>Contact us</LocaleText>
          </H2>
          <StyledParagraph color="light" size={1.7}>
            <LocaleText>
              We appreciate you taking the time to help us improve the application so we are able to
              continue raising awareness, and generating support for our comrades in Ukraine.
            </LocaleText>
          </StyledParagraph>
          <StyledParagraph color="light" size={1.7}>
            <LocaleText>Our emails:</LocaleText>
            <br />
            bohdan.hodzenko@bigcommerce.com
            <br />
            kristina.pototska@bigcommerce.com
          </StyledParagraph>
        </Item>
        <StyledForm flexBasis="50%">
          <H4>
            <LocaleText>Contact form</LocaleText>
          </H4>
          {isSubmitted ? (
            <>
              <Paragraph color="gray" margin="0 0 3rem">
                <LocaleText>Thank you for your submission</LocaleText>
              </Paragraph>
              <Button onClick={resetForm}>
                <LocaleText>Reset</LocaleText>
              </Button>
            </>
          ) : (
            <>
              <Paragraph color="gray" margin="0 0 3rem">
                <LocaleText>Describe your question below</LocaleText>
              </Paragraph>
              <form onSubmit={handleSubmit}>
                <Input
                  error={isDirty.name ? errors.name && translate(errors.name, locale) : undefined}
                  id="name"
                  label={translate('First and Last name', locale)}
                  onChange={handleChange}
                  required
                  value={data.name}
                />
                <Input
                  error={
                    isDirty.email ? errors.email && translate(errors.email, locale) : undefined
                  }
                  id="email"
                  label={translate('Email', locale)}
                  onChange={handleChange}
                  required
                  value={data.email}
                />
                <Textarea
                  error={
                    isDirty.message
                      ? errors.message && translate(errors.message, locale)
                      : undefined
                  }
                  id="message"
                  label={translate('Your question or comment', locale)}
                  onChange={handleChange}
                  required
                  rows={10}
                  value={data.message}
                />
                <Button disabled={isDisabled} type="submit">
                  <LocaleText>Submit</LocaleText>
                </Button>
              </form>
            </>
          )}
        </StyledForm>
      </Container>
    </Section>
  );
};
