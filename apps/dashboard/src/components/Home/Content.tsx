import styled from 'styled-components';

const ContentWrapper = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #5e637a;

  & h4 {
    //styleName: Body regular;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 1.5rem 0;
  }

  & ol,
  p {
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    //styleName: Body regular;
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 0.5rem 0;
  }

  & h5 {
    font-family: Source Sans Pro;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0.5rem 0;
  }

  & .code {
    font-weight: 700;
    font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
  }
`;

export default function Content({ published }: { readonly published: boolean }) {
  return (
    <ContentWrapper>
      {!published && (
        <h4>
          By adding a widget you can show your support and give shoppers an easy way to donate.
          Widget will not be shown at checkout pages.
        </h4>
      )}
      <h5>How it works</h5>
      <ol>
        <li>Pick a color for your widget</li>
        <li>Pick a widget layout</li>
        <li>Choose your preferred charities</li>
        <li>Customize the messaging (optional)</li>
      </ol>
      <h5>How it helps</h5>
      <p>
        Clicking the widget opens a pop-up, which shoppers can use to donate to any of your
        preferred charities. All charities are trusted, non-profit organizations involved with
        Ukrainian humanitarian relief and recovery.
      </p>
    </ContentWrapper>
  );
}

export function CodeContent() {
  return (
    <ContentWrapper>
      <p>
        Your custom widget code has been generated. Copy the code below and paste it onto every page
        of your website. Paste this code anywhere inside the{' '}
        <span className="code">&lt;body&gt;</span> of the html page.
      </p>
    </ContentWrapper>
  );
}
