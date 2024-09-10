import styled from 'styled-components';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import VideoThumbnail from '../../public/assets/videos/team/thumbnail.webp';
import { Container, H1, Item, Paragraph, Section, Video } from '../components';
import { breakpoints } from '../helpers';

const StyledItem = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
`;

const StyledPhoto = styled.img`
  height: 6.7rem;
  object-fit: cover;
  width: 6.7rem;
`;

const StyledH1 = styled(H1)`
  margin-bottom: 3rem;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

interface TeamMember {
  readonly photo: string;
  readonly name: string;
  readonly title: string;
}

const TeamList: TeamMember[] = [
  {
    photo: 'assets/images/team/Bohdan.webp',
    name: 'Bohdan Hodzenko',
    title: 'Product manager/designer',
  },
  {
    photo: 'assets/images/team/Micah.webp',
    name: 'Micah Thomas',
    title: 'Full stack engineer',
  },
  {
    photo: 'assets/images/team/Stanislav.webp',
    name: 'Stanislav Holts',
    title: 'Front end engineer',
  },
  {
    photo: 'assets/images/team/John.webp',
    name: 'John McCann',
    title: 'Strategy',
  },
  {
    photo: 'assets/images/team/Anastasiia.webp',
    name: 'Anastasiia Zvierieva',
    title: 'QA Engineer',
  },
  {
    photo: 'assets/images/team/Kristina.webp',
    name: 'Kristina Pototska',
    title: 'Product manager',
  },
  {
    photo: 'assets/images/team/Max.webp',
    name: 'Max Kiely',
    title: 'Marketer',
  },
];

export const Member = ({ photo, name, title }: TeamMember) => (
  <StyledItem>
    <StyledPhoto
      alt={name}
      className="lazyload"
      data-src={`${import.meta.env.BASE_URL}/${photo}`}
    />
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
    <StyledH1 margin="0 0 6rem" textAlign="center">
      Our team
    </StyledH1>
    <Container>
      <Item flexBasis="67%">
        <Video
          poster={VideoThumbnail}
          sources={[
            {
              url: 'landing/assets/videos/team/1080p.webm',
              type: 'video/webm',
            },
            {
              url: 'landing/assets/videos/team/1080p.mp4',
              type: 'video/mp4',
            },
          ]}
        />
      </Item>
      <Item flexBasis="33%">
        <Swiper
          autoplay={{ delay: 5000 }}
          breakpoints={{
            320: {
              slidesPerView: 7,
            },
            960: {
              slidesPerView: 5,
            },
          }}
          direction="vertical"
          modules={[Autoplay, A11y, Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={10}
        >
          {TeamList.map((member, idx) => (
            <SwiperSlide key={idx}>
              <Member {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Item>
    </Container>
  </Section>
);
