import { Charity } from 'config/types';
import styled from 'styled-components';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowSVG from '../../public/assets/images/arrow.svg';
import MiraActionSrc from '../../public/assets/images/mira-action.webp';
import NewUkraineSrc from '../../public/assets/images/new-ukraine.webp';
import RazomSrc from '../../public/assets/images/razom.webp';
import UnicefSrc from '../../public/assets/images/unicef.webp';
import { Container, H1, H5, Item, Paragraph, Section } from '../components';

const charities = [
  {
    id: 'razom',
    logoProps: {
      alt: 'Razom logo',
      src: RazomSrc,
    },
    name: 'Razom',
    description:
      'Razom, which means “together” in Ukrainian is providing critical humanitarian aid and recovery devices for Ukrainian people. We are focused on delivering medicine items, hospital supplies, and tech enabled emergency response supplies that facilitate the delivery of this aid. We send on average more than 70 pallets of aid to Ukraine each week. In the first month of the war, we shipped over 218 tons of supplies.',
    donationLink: 'https://www.razomforukraine.org/',
  },
  {
    id: 'unicef',
    logoProps: {
      alt: 'UNICEF logo',
      src: UnicefSrc,
    },
    name: 'UNICEF',
    description:
      'UNICEF is providing life-saving help to children inside Ukraine and in neighboring countries. This includes: \n- Providing lifesaving supplies such as water and hygiene kits, medicines, warm clothes and blanket \n- First-aid kits, surgical kits, and oxygen concentrators to those affected by the violence.',
    donationLink: 'https://help.unicef.org/ukraine-emergency',
  },
  {
    id: 'mira-action',
    logoProps: {
      alt: 'Mira Action logo',
      src: MiraActionSrc,
    },
    name: 'Mira Action',
    description:
      'Mira Action is a California-based non-profit organization buying and delivering ambulances, medicines, and humanitarian supplies to Ukraine hospitals. We are a team of 20+ volunteers located in California, Poland, and Ukraine running logistics and delivery supply routes and working with hospitals in Central and Eastern Ukraine.',
    donationLink: 'https://miraaction.org/',
  },
  {
    id: 'new-ukraine',
    logoProps: {
      alt: 'New Ukraine logo',
      src: NewUkraineSrc,
    },
    name: 'New Ukraine',
    description:
      "Nova Ukraine is a registered nonprofit organization dedicated to providing humanitarian aid to Ukraine and raising awareness about Ukraine in the United States as well as in the rest of the world. Through your generous donations, we fund a variety of efforts to help the people of Ukraine and to strengthen Ukraine's democratic society.",
    donationLink: 'https://novaukraine.org/',
  },
];

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
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CharityElement = ({ logoProps, name, description, donationLink }: Charity) => (
  <Item flexBasis="33%">
    <StyledPreview>
      <img alt={logoProps.alt} className="lazyload" data-src={logoProps.src} />
    </StyledPreview>
    <StyledContent>
      x<H5 color="light">{name}</H5>
      <StyledParagraph color="light" margin="0 0 3rem" weight={300}>
        {description}
      </StyledParagraph>
      <StyledLink href={donationLink} rel="noreferrer" target="_blank">
        Learn more
        <img alt="arrow icon" className="lazyload" data-src={ArrowSVG} />
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
        {charities.map((charity, idx) => (
          <SwiperSlide key={idx}>
            <CharityElement {...charity} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </Section>
);
