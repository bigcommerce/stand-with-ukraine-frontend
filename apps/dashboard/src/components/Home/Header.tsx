import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin: 1rem 0 1rem 0;
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
          ? 'You added the widget to your store'
          : 'Help Ukraine by adding a widget to your store'}
      </Title>
      {published ? <WidgetAdded>Widget Added</WidgetAdded> : null}
    </Wrapper>
  );
}
