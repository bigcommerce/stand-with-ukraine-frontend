/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styled from 'styled-components';
import { CharityItem } from './common/data';

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 0;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
`;

const Img = styled.img`
  flex-shrink: 0;
  margin-top: 5px;
  height: 60px;
  width: 60px;
  object-fit: contain;

  @media (max-width: 767px) {
    height: 40px;
    width: 40px;
  }
`;

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  padding-left: 15px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  & p {
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    color: #313440;
  }

  & a {
    color: #005bbb;
    transition: color 0.2s ease;
    cursor: pointer;
  }

  & a:hover {
    color: darken(#005bbb, 10%);
  }
`;

const Text = styled.div`
  flex-grow: 1;
  padding-right: 15px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 5px 15px;
  margin-top: 17px;
  border-radius: 4px;
  border: 1px solid #005bbb;
  background-color: #fff;
  color: #005bbb;
  line-height: 24px;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #fff;
    background-color: #005bbb;
  }
`;

export default function PreviewItem({
  imageProps,
  name,
  description,
  link,
}: CharityItem) {
  const [isOpen, setIsOpen] = useState(false);

  const textPreview = description.split(' ').slice(0, 15).join(' ');

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <Item>
      <Img {...imageProps} />
      <Content>
        <Text>
          <p>
            <strong>{name}</strong>
          </p>
          {isOpen ? (
            description
              .split('\n')
              .map((text: string, key: number) => <p key={key}>{text}</p>)
          ) : (
            <p>
              {textPreview} <a onClick={handleClick}>See more</a>
            </p>
          )}
        </Text>
        <Button href={link} target="_blank" rel="noreferrer">
          Support
        </Button>
      </Content>
    </Item>
  );
}
