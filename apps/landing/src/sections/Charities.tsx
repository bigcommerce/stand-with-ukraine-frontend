import { GetCharities } from 'config/charities';
import { Charity } from 'config/types';
import styled from 'styled-components';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, H1, H5, Item, Paragraph, Section } from '../components';

const StyledPreview = styled.div`
  align-items: center;
  background-color: #edeff3;
  display: flex;
  height: 17.5rem;
  justify-content: center;

  img {
    height: 6.4rem;
    object-fit: contain;
    width: 6.4rem;
  }
`;

const StyledContent = styled.div`
  background-color: #121118;
  padding: 5rem 4rem;

  ${Paragraph} {
    line-height: 2.5rem;
  }
`;

const StyledLink = styled.a`
  align-items: center;
  color: #fff;
  display: inline-flex;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;

  img {
    height: 1.2rem;
    margin-left: 1.2rem;
    width: 2rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #03eada;

    img {
      transform: translateX(50%);
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  min-height: 18rem;
`;

export const CharityElement = ({ logoProps, name, description, donationLink }: Charity) => (
  <Item flexBasis="33%">
    <StyledPreview>
      <img alt={logoProps.alt} src={logoProps.src} />
    </StyledPreview>
    <StyledContent>
      <H5 color="light">{name}</H5>
      <StyledParagraph color="light" margin="0 0 3rem" weight={300}>
        {description.slice(0, 200)}...
      </StyledParagraph>
      <StyledLink href={donationLink}>
        Learn more
        <img alt="arrow icon" src={`${import.meta.env.BASE_URL}assets/images/arrow.svg`} />
      </StyledLink>
    </StyledContent>
  </Item>
);

export const Charities = () => (
  <Section id="charities">
    <H1 margin="0 0 6rem" textAlign="center">
      Charities
    </H1>
    <Container flexDirection="row">
      <Swiper
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, A11y, Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
      >
        {GetCharities(import.meta.env.BASE_URL).map((charity, idx) => (
          <SwiperSlide key={idx}>
            <CharityElement {...charity} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </Section>
);
