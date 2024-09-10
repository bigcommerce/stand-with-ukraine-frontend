import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';

import AndriiSrc from '../../public/assets/subscription/images/andrii.png';
import DenisSrc from '../../public/assets/subscription/images/denis.png';
import OstapSrc from '../../public/assets/subscription/images/ostap.png';
import PetroSrc from '../../public/assets/subscription/images/petro.png';
import { ButtonLink, Container, H1, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';
import { LocaleText } from '../renderer/LocaleText';

const StyledSection = styled(Section)`
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;

  ${breakpoints.desktop} {
    padding-top: 17.5rem !important;
    padding-bottom: 10rem !important;
  }
`;

const StyledImage = styled.img`
  margin-bottom: 1rem;

  &.loading {
    filter: blur(10px);
    clip-path: inset(0);
  }

  &.loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  }
`;

const StyledItem = styled(Item)`
  flex-basis: calc(50% - 1.5rem);
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

const Small = styled(Paragraph)`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const waitForIdle = (cb: () => void) => {
  if (window.requestIdleCallback !== undefined) {
    requestIdleCallback(cb);
  } else {
    setTimeout(cb, 1);
  }
};

const ProgressiveImg = ({
  placeholderSrc,
  src,
  ...props
}: { readonly placeholderSrc?: string } & DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc ?? src);

  useEffect(() => {
    waitForIdle(() => {
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
    <StyledImage
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      {...{ src: imgSrc, ...(props as any) }}
      alt={props.alt ?? ''}
      className={placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded'}
    />
  );
};

export const Home = () => (
  <StyledSection background="primary" id="home">
    <Container alignItems="center" justifyContent="center">
      <Item flexBasis="50%">
        <H1 color="light">
          <LocaleText>Support BigCommerce colleagues defending Ukraine</LocaleText>
        </H1>
        <Paragraph color="light" margin="0 0 3rem" size={2} weight={300}>
          <LocaleText>
            Our colleagues from Kyiv office are defending Ukraine on a frontline. Let's help them to
            stay safe!
          </LocaleText>
        </Paragraph>
        <ButtonsContainer>
          <ButtonLink href="#subscriptions" variant="light">
            <LocaleText>Donate</LocaleText>
          </ButtonLink>
        </ButtonsContainer>
      </Item>
      <Item flexBasis="50%">
        <Container flexDirection="row" flexWrap="wrap">
          <StyledItem>
            <ProgressiveImg alt="Denis photo" src={DenisSrc} />
            <Small color="light">
              <LocaleText>
                Denis Matveev. Product designer (MSF, Localization), officer in Ukraine army
              </LocaleText>
            </Small>
          </StyledItem>
          <StyledItem>
            <ProgressiveImg alt="Andrii photo" src={AndriiSrc} />
            <Small color="light">
              <LocaleText>
                Andrii Hurzhiy. Senior Engineer (MSF, Catalog), officer in Ukraine army
              </LocaleText>
            </Small>
          </StyledItem>
          <StyledItem>
            <ProgressiveImg alt="Petro photo" src={PetroSrc} />
            <Small color="light">
              <LocaleText>
                Petro Donin. Senior Engineer (Inventory), officer in Ukraine army
              </LocaleText>
            </Small>
          </StyledItem>
          <StyledItem>
            <ProgressiveImg alt="Ostap photo" src={OstapSrc} />
            <Small color="light">
              <LocaleText>
                Ostap Ivanishyn. Senior Engineer (Payments), officer in Ukraine army
              </LocaleText>
            </Small>
          </StyledItem>
        </Container>
      </Item>
    </Container>
  </StyledSection>
);
