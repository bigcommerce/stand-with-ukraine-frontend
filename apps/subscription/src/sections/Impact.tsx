import styled from 'styled-components';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, H2, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';
import { LocaleText } from '../renderer/LocaleText';

const images = import.meta.glob<string>('../../public/assets/subscription/images/carousel/*.jpg', {
  eager: true,
  import: 'default',
});

const tags = [
  'Pickup trucks',
  'Drones & batteries',
  'Mini excavator',
  'Powerstations',
  'Starlink kits',
  'Active headphones',
  'Night vision monoculars',
  'Laptops',
  'Monitors',
  'Hertz analyzer',
  'Sleeping bags',
  'Medical tourniquets',
  'Thermal vision cameras',
  'Body armors',
  'Many more...',
];

const SubTitle = styled(Paragraph)`
  font-weight: 300;
`;

const Image = styled.img`
  height: 40rem;
  object-fit: contain;
  width: 100%;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0;
  line-height: 2.6rem;
  padding: 0;
  white-space: nowrap;

  li {
    background-color: #dbe3fe;
    border-radius: 0.5rem;
    color: #4c4b58;
    list-style-type: none;
    padding: 0.2rem 1rem;
  }
`;

const StyledItem = styled(Item)`
  width: 100%;

  ${breakpoints.desktop} {
    width: 50%;
  }
`;

export const Impact = () => {
  return (
    <Section>
      <H2 textAlign="center">
        <LocaleText>Your impact</LocaleText>
      </H2>
      <SubTitle color="#313440" margin="0 0 6rem" size={2} textAlign="center">
        <LocaleText>
          In the past 2 years, with your help we've handed over essential supplies at almost
          $100,000
        </LocaleText>
      </SubTitle>
      <Container alignItems="center">
        <Item flexBasis="50%">
          <Tags>
            {tags.map((tag, i) => (
              <li key={i}>
                <LocaleText>{tag}</LocaleText>
              </li>
            ))}
          </Tags>
        </Item>
        <StyledItem flexBasis="50%">
          <Swiper
            autoplay={{ delay: 1000 }}
            loop={true}
            modules={[Autoplay, A11y, Navigation, Pagination]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
          >
            {Object.values(images).map((src, i) => (
              <SwiperSlide key={i}>
                <Image alt={`slide #${i}`} src={src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledItem>
      </Container>
    </Section>
  );
};
