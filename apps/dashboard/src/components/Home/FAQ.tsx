import { Collapse, Link, LinkProps } from '@bigcommerce/big-design';
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQ_LIST: Array<{ question: string; answer: string; link?: LinkProps }> = [
  {
    question:
      'Can I add a charity organization myself instead of choosing from the predefined list?',
    answer:
      'We have included the list of vetted charity organizations, confirmed with our team in Ukraine to make sure that the donation would get to the people in need. The list includes organizations that are providing only humanitarian help.',
  },
  {
    question: 'I’m not seeing a widget / changes to the widget are not applied.',
    answer: `Hold shift+R to refresh the storefront page, new script often isn't loaded on a background even after a minute. If it didn’t help, please try to remove a widget and re-apply again. If it still does not work notify us via ”Get support”.`,
  },
  {
    question: 'Can I select page(s) to display the widget?',
    answer:
      'Selecting pages is not supported at this point, however you could select the location. By default widget is going to show up on the following pages: Home, Add Wishlist, Blog List, Blog Post, Brand Pages, All Brands Page, Cart, Category, Product Compare, Contact Form, Product, Search, All Wishlist, Wish List, 404 page.',
  },
  {
    question: 'Do you have or manage other websites that are not on BigCommerce?',
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
  margin: 0.5rem 0 0 0;

  & > a {
    margin-left: 1.5rem;
  }
`;

const SUPPORT_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdjibRgptwc7j_AMQ54qes93nfyxhXrzYSNnsmf2_7hs6gClw/viewform';

export default function FAQ({ listType }: { listType: 'bigcommerce' | 'universal' }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionContainer>
        <Collapse onCollapseChange={setOpen} title={open ? 'Hide FAQ' : 'Show FAQ'} />
        <Link external href={SUPPORT_LINK} rel="noreferrer" target="_blank">
          Get Support
        </Link>
      </ActionContainer>
      {open
        ? (listType === 'bigcommerce' ? FAQ_LIST : FAQ_LIST.slice(0, 1)).map(
            ({ question, answer, link }, index) => (
              <React.Fragment key={index}>
                <Question>
                  {index + 1}. {question}
                </Question>
                <Answer>
                  {answer} {link !== undefined ? <Link {...link} /> : null}
                </Answer>
              </React.Fragment>
            ),
          )
        : null}
    </>
  );
}
