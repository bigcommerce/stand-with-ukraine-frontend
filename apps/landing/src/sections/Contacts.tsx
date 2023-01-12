import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

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

const StyledForm = styled(Item)`
  background-color: #fff;
  border-top: 0.5rem solid #121118;
  box-shadow: 0px 0px 50px rgba(18, 17, 24, 0.1);
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
      const resp = await fetch(
        `${
          import.meta.env.DEV ? '//localhost:8000' : ''
        }/api/v2/feedback-form?${formSubmissionQuery}`,
        {
          method: 'POST',
        },
      );

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

  return (
    <Section background="primary" id="contacts">
      <Container>
        <Item flexBasis="50%">
          <H2 color="light">Contact us</H2>
          <Paragraph color="light" size={1.7}>
            We appreciate you taking the time to help us improve the application so we are able to
            continue raising awareness, and generating support for our comrades in Ukraine.
          </Paragraph>
        </Item>
        <StyledForm flexBasis="50%">
          <H4>Contact form</H4>
          {isSubmitted ? (
            <>
              <Paragraph color="gray" margin="0 0 3rem">
                Thank you for your submission
              </Paragraph>
              <Button onClick={resetForm}>Reset</Button>
            </>
          ) : (
            <>
              <Paragraph color="gray" margin="0 0 3rem">
                Describe your question below
              </Paragraph>
              <form onSubmit={handleSubmit}>
                <Input
                  error={isDirty.name ? errors.name : undefined}
                  id="name"
                  label="First and Last name"
                  onChange={handleChange}
                  required
                  value={data.name}
                />
                <Input
                  error={isDirty.email ? errors.email : undefined}
                  id="email"
                  label="Email"
                  onChange={handleChange}
                  required
                  value={data.email}
                />
                <Textarea
                  error={isDirty.message ? errors.message : undefined}
                  id="message"
                  label="Your question or comment"
                  onChange={handleChange}
                  required
                  rows={10}
                  value={data.message}
                />
                <Button disabled={isDisabled} type="submit">
                  Submit
                </Button>
              </form>
            </>
          )}
        </StyledForm>
      </Container>
    </Section>
  );
};
