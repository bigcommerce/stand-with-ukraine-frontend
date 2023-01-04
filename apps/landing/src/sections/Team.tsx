import styled from 'styled-components';

import { Container, H1, Item, Paragraph, Section } from '../components';
import Video from '../components/Video';

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

interface TeamMember {
  photo: string;
  name: string;
  title: string;
}

const TeamList: TeamMember[] = [
  {
    photo: 'assets/images/team/Bohdan.png',
    name: 'Bohdan Hodzenko',
    title: 'Designer / chairman',
  },
  {
    photo: 'assets/images/team/Micah.png',
    name: 'Micah Thomas',
    title: 'Full stack engineer',
  },
  {
    photo: 'assets/images/team/Stanislav.png',
    name: 'Stanislav Holts',
    title: 'Front end engineer',
  },
  {
    photo: 'assets/images/team/John.png',
    name: 'John McCann',
    title: 'Strategy',
  },
  {
    photo: 'assets/images/team/Anastasiia.png',
    name: 'Anastasiia Zvierieva',
    title: 'QA Engineer',
  },
  {
    photo: 'assets/images/team/Kristina.png',
    name: 'Kristina Pototska',
    title: 'Product manager',
  },
  {
    photo: 'assets/images/team/Max.png',
    name: 'Max Kiely',
    title: 'Marketer',
  },
];

export const Member = ({ photo, name, title }: TeamMember) => (
  <StyledItem>
    <StyledPhoto src={`${import.meta.env.BASE_URL}${photo}`} />
    <Item>
      <Paragraph margin="0 0 0.5rem" size={2}>
        <strong>{name}</strong>
      </Paragraph>
      <Paragraph color="gray" margin="0" size={1.7}>
        {title}
      </Paragraph>
    </Item>
  </StyledItem>
);

export const Team = () => (
  <Section background="gray" id="team">
    <H1 margin="0 0 6rem" textAlign="center">
      Our team
    </H1>
    <Container>
      <Item flexBasis="67%">
        <Video
          sources={[
            {
              url: 'assets/videos/team/1080p.webm',
              type: 'video/webm',
            },
            {
              url: 'assets/videos/team/1080p.mp4',
              type: 'video/mp4',
            },
          ]}
        />
      </Item>
      <Item flexBasis="33%">
        {TeamList.map((member, idx) => (
          <Member key={idx} {...member} />
        ))}
      </Item>
    </Container>
  </Section>
);
