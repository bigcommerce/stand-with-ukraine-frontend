import { Collapse } from '@bigcommerce/big-design';
import React, { useState } from 'react';
import styled from 'styled-components';
import BodySmall from '../Setup/Steps/common/BodySmall';

const FAQ_LIST: { question: string; answer: string }[] = [
  {
    question:
      'Why am I not seeing a widget? or Why am I not seeing changes to the widget on my store?',
    answer: `Hold Shift + R to refresh the storefront page, new script often are loaded on a background even after a minute. If it didn’t help, please try to remove a widget and re-apply again.`,
  },
  {
    question: `Can I add a charity organization myself instead of choosing from the
          predefined list?`,
    answer: `We have included the list of vetted charity organizations, confirmed with our team in Ukraine to make sure that the donation would get to the people in need. The list includes organizations that are providing both military and humanitarian help.`,
  },
  {
    question: `Can I select page(s) to display the widget?`,
    answer: ` Selecting pages is not supported at this point, however you could select the location. By default widget is going to show up on the following pages: Home, Add Wishlist, Blog List, Blog Post, Brand Pages, All Brands Page, Cart, Category, Product Compare, Contact Form, Product, Search, All Wishlist, Wish List, 404 page. `,
  },
  {
    question: `Do you have or manage other websites that are not on BigCommerce?`,
    answer: `We will soon allow you to generate the same widget and copy the script for installation onto any website you own or manage. In the meantime, there is a service which inspired this application to do this now. More details at: https://helpukrainewinwidget.org/`,
  },
];

const Question = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export default function FAQ() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse
        title={open ? 'Hide FAQ' : 'Show FAQ'}
        onCollapseChange={setOpen}
      ></Collapse>
      {open
        ? FAQ_LIST.map(({ question, answer }, index) => (
            <React.Fragment key={index}>
              <Question>{question}</Question>
              <BodySmall>{answer}</BodySmall>
            </React.Fragment>
          ))
        : null}
    </>
  );
}
