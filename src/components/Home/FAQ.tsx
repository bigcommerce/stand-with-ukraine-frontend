import React, { useState } from 'react';
import styled from 'styled-components';

import { Collapse, Link, LinkProps } from '@bigcommerce/big-design';

const FAQ_LIST: { question: string; answer: string; link?: LinkProps }[] = [
  {
    question:
      '1. I’m not seeing a widget / changes to the widget are not applied.',
    answer: `Hold shift+R to refresh the storefront page, new script often isn't loaded on a background even after a minute. If it didn’t help, please try to remove a widget and re-apply again. If it still does not work notify us via ”Get support”.`,
  },
  {
    question:
      'Can I add a charity organization myself instead of choosing from the predefined list?',
    answer:
      'We have included the list of vetted charity organizations, confirmed with our team in Ukraine to make sure that the donation would get to the people in need. The list includes organizations that are providing only humanitarian help.',
  },
  {
    question: '3. Can I select page(s) to display the widget?',
    answer:
      'Selecting pages is not supported at this point, however you could select the location. By default widget is going to show up on the following pages: Home, Add Wishlist, Blog List, Blog Post, Brand Pages, All Brands Page, Cart, Category, Product Compare, Contact Form, Product, Search, All Wishlist, Wish List, 404 page.',
  },
  {
    question:
      '4. Do you have or manage other websites that are not on BigCommerce?',
    answer: `We'll soon allow you to generate the same widget and copy the script for installation onto any website you own or manage. In the meantime, there is a service which inspired this application to do this now. More details at: `,
    link: {
      href: 'https://helpukrainewinwidget.org/',
      children: 'https://helpukrainewinwidget.org/',
      rel: 'noreferrer',
      target: '_blank',
    },
  },
];

const Question = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 1rem;

  color: #5e637a;
`;

const Answer = styled.div`
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0.25rem 0 0.5rem 0;

  color: #5e637a;
`;

const ActionContainer = styled.div`
  display: flex;
  margin: 1.5rem 0 0 0;

  & > a {
    margin-left: 3rem;
  }
`;

const SUPPORT_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdjibRgptwc7j_AMQ54qes93nfyxhXrzYSNnsmf2_7hs6gClw/viewform';

export default function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionContainer>
        <Collapse
          title={open ? 'Hide FAQ' : 'Show FAQ'}
          onCollapseChange={setOpen}
        ></Collapse>
        <Link href={SUPPORT_LINK} target="_blank" rel="noreferrer" external>
          Get Support
        </Link>
      </ActionContainer>
      {open
        ? FAQ_LIST.map(({ question, answer, link }, index) => (
            <React.Fragment key={index}>
              <Question>{question}</Question>
              <Answer>
                {answer} {link !== undefined ? <Link {...link} /> : null}
              </Answer>
            </React.Fragment>
          ))
        : null}
    </>
  );
}
