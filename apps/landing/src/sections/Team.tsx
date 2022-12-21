import styled from 'styled-components';

import { Container, H1, Item, Paragraph, Section } from '../components';

const StyledItem = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;

  + div {
    margin-top: 2rem;
  }
`;

const StyledPhoto = styled.img`
  height: 6.7rem;
  object-fit: cover;
  width: 6.7rem;
`;

export const Team = () => (
  <Section background="gray">
    <H1 margin="0 0 6rem" textAlign="center">
      Our team
    </H1>
    <Container>
      <Item flexBasis="67%">Video</Item>
      <Item flexBasis="33%">
        <StyledItem>
          <StyledPhoto src={`${import.meta.env.BASE_URL}assets/images/photo.png`} />
          <Item>
            <Paragraph margin="0 0 0.5rem" size={2}>
              <strong>Stanislav Holts</strong>
            </Paragraph>
            <Paragraph color="gray" margin="0" size={1.7}>
              Software engineer
            </Paragraph>
          </Item>
        </StyledItem>
        <StyledItem>
          <StyledPhoto src={`${import.meta.env.BASE_URL}assets/images/photo.png`} />
          <Item>
            <Paragraph margin="0 0 0.5rem" size={2}>
              <strong>Stanislav Holts</strong>
            </Paragraph>
            <Paragraph color="gray" margin="0" size={1.7}>
              Software engineer
            </Paragraph>
          </Item>
        </StyledItem>
        <StyledItem>
          <StyledPhoto src={`${import.meta.env.BASE_URL}assets/images/photo.png`} />
          <Item>
            <Paragraph margin="0 0 0.5rem" size={2}>
              <strong>Stanislav Holts</strong>
            </Paragraph>
            <Paragraph color="gray" margin="0" size={1.7}>
              Software engineer
            </Paragraph>
          </Item>
        </StyledItem>
        <StyledItem>
          <StyledPhoto src={`${import.meta.env.BASE_URL}assets/images/photo.png`} />
          <Item>
            <Paragraph margin="0 0 0.5rem" size={2}>
              <strong>Stanislav Holts</strong>
            </Paragraph>
            <Paragraph color="gray" margin="0" size={1.7}>
              Software engineer
            </Paragraph>
          </Item>
        </StyledItem>
        <StyledItem>
          <StyledPhoto src={`${import.meta.env.BASE_URL}assets/images/photo.png`} />
          <Item>
            <Paragraph margin="0 0 0.5rem" size={2}>
              <strong>Stanislav Holts</strong>
            </Paragraph>
            <Paragraph color="gray" margin="0" size={1.7}>
              Software engineer
            </Paragraph>
          </Item>
        </StyledItem>
      </Item>
    </Container>
  </Section>
);
