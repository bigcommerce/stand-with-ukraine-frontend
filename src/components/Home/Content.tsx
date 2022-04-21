import styled from 'styled-components';

const ContentWrapper = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #5e637a;
`;

export default function Content() {
  return (
    <ContentWrapper>
      How does it work?
      <ol>
        <li>Decide what your widget will look like</li>
        <li>Pick the widget layout</li>
        <li>Choose your preferred charity</li>
        <li>Add the modal with your personalized message</li>
      </ol>
      How does it help?
      <ul>
        <li>Clicking the widget opens modal with charities of your choosing</li>
        <li>
          In the modal shopper can select specific charity and visit their site
        </li>
        <li>
          All charities are trusted, non-profit organizations involved with
          Ukrainian humanitarian relief, recovery and/or defense
        </li>
      </ul>
    </ContentWrapper>
  );
}
