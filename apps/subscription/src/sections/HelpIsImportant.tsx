import styled from 'styled-components';

import VideoThumbnail from '../../public/assets/videos/thumb.png';
import { Container, H2, Item, Paragraph, Section, Video } from '../components';

const StyledItem = styled(Item)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const StyledContainer = styled(Container)`
  gap: 7.6rem;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 1.7rem;
  text-transform: uppercase;
`;

export const HelpIsImportant = () => (
  <Section background="gray" id="how-it-works">
    <H2 margin="0 0 6rem" textAlign="center">
      Why your help is important
    </H2>
    <StyledContainer alignItems="center">
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
        <StyledParagraph>War in Ukraine is still going.</StyledParagraph>
        <StyledParagraph>
          THE needs are growing every day. Government is unable to fulfil all of them and rely on
          volunteers to help.
        </StyledParagraph>
        <StyledParagraph margin="0">
          let’s help by supporting people we know and love, our colleagues.{' '}
        </StyledParagraph>
      </StyledItem>
    </StyledContainer>
  </Section>
);
