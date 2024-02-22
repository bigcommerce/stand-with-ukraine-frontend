import styled from 'styled-components';

import VideoThumbnail from '../../public/assets/subscription/videos/thumb.png';
import { Container, H2, Item, Paragraph, Section, Video } from '../components';
import { LocaleText } from '../renderer/LocaleText';

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
      <LocaleText>Why your help is important</LocaleText>
    </H2>
    <StyledContainer alignItems="center">
      <Item flexBasis="67%">
        <Video
          poster={VideoThumbnail}
          sources={[
            {
              url: 'assets/videos/subscription/videos/EN.mp4',
              type: 'video/mp4',
            },
          ]}
        />
      </Item>
      <StyledItem flexBasis="33%">
        <StyledParagraph>
          <LocaleText>War in Ukraine is still going.</LocaleText>
        </StyledParagraph>
        <StyledParagraph>
          <LocaleText>
            THE needs are growing every day. Government is unable to fulfil all of them and rely on
            volunteers to help.
          </LocaleText>
        </StyledParagraph>
        <StyledParagraph margin="0">
          <LocaleText>let's help by supporting people we know and love, our colleagues.</LocaleText>
        </StyledParagraph>
      </StyledItem>
    </StyledContainer>
  </Section>
);
