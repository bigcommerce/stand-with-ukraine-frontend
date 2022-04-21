import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

const WidgetAdded = styled.div`
  height: 20px;
  background: #208831;
  border-radius: 4px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  padding: 4px;

  color: #ffffff;
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header({ published }: { published: boolean }) {
  return (
    <Wrapper>
      <Title>
        {published
          ? 'You added a widget to your store'
          : 'Add widget to your store to support Ukraine'}
      </Title>
      {published ? <WidgetAdded>Widget Added</WidgetAdded> : null}
    </Wrapper>
  );
}