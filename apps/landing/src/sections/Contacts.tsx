import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
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

const useForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({ firstNameLastName: '', question: '', email: '' });
  const [isDirty, setIsDirty] = useState<Record<string, boolean>>({
    firstNameLastName: false,
    email: false,
    question: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    Object.entries(data).forEach(([key, value]) => {
      switch (true) {
        case key === 'email' && isEmpty(value):
        case key === 'firstNameLastName' && isEmpty(value):
        case key === 'question' && isEmpty(value):
          setErrors((prevProps) => ({ ...prevProps, [key]: 'Field is required' }));
          break;

        case key === 'email' && !isCorrectEmail(value):
          setErrors((prevProps) => ({ ...prevProps, [key]: 'Please use correct email address' }));
          break;

        default:
          setErrors(({ [key]: _, ...prevProps }) => prevProps);
          break;
      }
    });
  }, [data]);

  const handleChange =
    (name: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();

      if (!isDirty[name]) {
        setIsDirty((prevProps) => ({ ...prevProps, [name]: true }));
      }

      setData((prevData) => ({ ...prevData, [name]: e.target.value }));
    };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    void Promise.resolve().then(() => setIsSubmitted(true));
  };

  const isDisabled =
    Object.values(data).every((value) => isEmpty(value)) || Object.keys(errors).length > 0;

  return { data, errors, isDisabled, isDirty, isSubmitted, handleChange, handleSubmit };
};

export const Contacts = () => {
  const { errors, isDirty, isDisabled, data, handleChange, handleSubmit } = useForm();

  return (
    <Section background="primary" id="contacts">
      <Container>
        <Item flexBasis="50%">
          <H2 color="light">Contact us</H2>
          <Paragraph color="light" size={1.7}>
            Please note that this application was built by a team of employee volunteers, and is
            provided as is.
            <br />
            <br />
            With that said; we put a ton of work into building a high quality product, and if there
            are issues, we'd love to fix them!
            <br />
            <br />
            We appreciate you taking the time to help us improve the application so we are able to
            continue raising awareness, and generating support for our comrades in Ukraine.
          </Paragraph>
        </Item>
        <StyledForm flexBasis="50%">
          <H4>Contact form</H4>
          <Paragraph color="gray" margin="0 0 5rem">
            Describe your question below
          </Paragraph>
          <form onSubmit={handleSubmit}>
            <Input
              error={isDirty.firstNameLastName ? errors.firstNameLastName : undefined}
              label="First and Last name"
              onChange={handleChange('firstNameLastName')}
              required
              value={data.firstNameLastName}
            />
            <Input
              error={isDirty.email ? errors.email : undefined}
              label="Email"
              onChange={handleChange('email')}
              required
              value={data.email}
            />
            <Textarea
              error={isDirty.question ? errors.question : undefined}
              label="Your question or comment"
              onChange={handleChange('question')}
              required
              rows={10}
              value={data.question}
            />
            <Button disabled={isDisabled} type="submit">
              Submit
            </Button>
          </form>
        </StyledForm>
      </Container>
    </Section>
  );
};
