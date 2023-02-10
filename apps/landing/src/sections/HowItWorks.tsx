import styled from 'styled-components';

import VideoThumbnail from '../../public/assets/videos/how-to/thumbnail.webp';
import { ButtonLink, Container, H2, Item, Section, Video } from '../components';

const StyledOl = styled.ol`
  flex-grow: 1;
  margin: 0 0 2rem;
  padding: 0;
  counter-reset: count;

  li {
    position: relative;
    counter-increment: count;
    font-size: 1.7rem;
    min-height: 7.1rem;
    list-style-type: none;
    line-height: 2.7rem;
    margin-bottom: 4rem;
    padding-left: 5rem;
    text-transform: uppercase;

    &::before {
      content: counter(count);
      position: absolute;
      top: 0;
      left: 0;
      font-size: 9.2rem;
      font-family: 'Gotham Cond';
      font-weight: bold;
      line-height: 7.2rem;
      vertical-align: text-top;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const StyledItem = styled(Item)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled(Container)`
  gap: 7.6rem;
`;

export const HowItWorks = () => (
  <Section background="gray" id="how-it-works">
    <H2 margin="0 0 6rem" textAlign="center">
      How it works
    </H2>
    <StyledContainer>
      <Item flexBasis="67%">
        <Video
          poster={VideoThumbnail}
          sources={[
            {
              url: 'assets/videos/how-to/1080p.webm',
              type: 'video/webm',
            },
            {
              url: 'assets/videos/how-to/1080p.mp4',
              type: 'video/mp4',
            },
          ]}
        />
      </Item>
      <StyledItem flexBasis="33%">
        <StyledOl>
          <li>Design custom widget in 2 mins</li>
          <li>Copy widget code to your website</li>
          <li>Customers can donate to charities in Ukraine through your website</li>
        </StyledOl>
        <ButtonLink href="#add-widget" variant="dark">
          Add widget
        </ButtonLink>
      </StyledItem>
    </StyledContainer>
  </Section>
);
