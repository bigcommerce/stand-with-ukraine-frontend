import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';

import HomeImagePlaceholderSrc from '../../public/assets/images/home-placeholder.webp';
import HomeImageSrc from '../../public/assets/images/home.webp';
import { ButtonLink, Container, H1, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';

const StyledSection = styled(Section)`
  padding-top: 10rem !important;
  padding-bottom: 3rem !important;

  ${breakpoints.desktop} {
    padding-top: 17.5rem !important;
    padding-bottom: 10rem !important;
  }
`;

const HomeImage = styled.img`
  max-height: 40rem;
  width: auto;
  height: auto;
  max-width: 100%;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }

  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;

  * {
    flex-grow: 1;
  }

  ${breakpoints.desktop} {
    * {
      flex-grow: 0;
    }
  }
`;

const ProgressiveImg = ({
  placeholderSrc,
  src,
  ...props
}: { placeholderSrc?: string } & DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    requestIdleCallback(() => {
      if (src) {
        const img = new Image();

        img.src = src;

        img.onload = () => {
          setImgSrc(src);
        };
      }
    });
  }, [src]);

  return (
    <HomeImage
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      {...{ src: imgSrc, ...(props as any) }}
      alt={props.alt || ''}
      className={placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded'}
    />
  );
};

export const Home = () => (
  <StyledSection background="primary" id="home">
    <Container alignItems="center" justifyContent="center">
      <Item flexBasis="50%">
        <H1 color="light">Help Ukraine by adding widget to your website</H1>
        <Paragraph color="light" margin="0 0 3rem" size={2} weight={300}>
          Show your support and provide your site visitors verified and simple way to help Ukraine!
        </Paragraph>
        <ButtonsContainer>
          <ButtonLink href="#add-widget" variant="light">
            Add widget
          </ButtonLink>
          <ButtonLink href="#how-it-works">How it works</ButtonLink>
        </ButtonsContainer>
      </Item>
      <Item flexBasis="50%">
        <ProgressiveImg
          alt="stand with ukraine"
          height={400}
          placeholderSrc={HomeImagePlaceholderSrc}
          src={HomeImageSrc}
          width={547}
        />
      </Item>
    </Container>
  </StyledSection>
);
