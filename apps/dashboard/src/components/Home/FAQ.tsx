import { Collapse, Link } from '@bigcommerce/big-design';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface FAQ {
  question: string;
  answer: string | ReactNode;
}

const BC_FAQ_LIST: FAQ[] = [
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
    question: 'Can I install this on other websites that are not on BigCommerce?',
    answer: (
      <span>
        Yes! you can generate the code snippet for other platforms and do the installation yourself
        at
        <Link href="https://standwithukraineapp.com/#add-widget" rel="noreferrer" target="_blank">
          standwithukraineapp.com
        </Link>
      </span>
    ),
  },
];

const UNIVERSAL_FAQ_LIST: FAQ[] = [
  BC_FAQ_LIST[0],
  {
    question: 'Do you have installation guides for specific platforms?',
    answer: (
      <span>
        We do not have specific guides, but here are some useful links for each platform:
        <br />
        <ul>
          <li>
            <Link
              href="https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/edit-theme-code#edit-your-theme-code"
              rel="noreferrer"
              target="_blank"
            >
              Shopify
            </Link>
          </li>
          <li>
            <Link
              href="https://help.wixanswers.com/kb/en/article/adding-custom-scripts-to-your-help-center"
              rel="noreferrer"
              target="_blank"
            >
              Wix
            </Link>
          </li>
          <li>
            <Link
              href="https://wordpress.com/go/website-building/how-to-properly-add-javascript-to-wordpress-3-top-methods/"
              rel="noreferrer"
              target="_blank"
            >
              Wordpress
            </Link>
          </li>
          <li>
            <Link
              href="https://docs.magento.com/user-guide/v2.3/design/footer.html"
              rel="noreferrer"
              target="_blank"
            >
              Magento
            </Link>
          </li>
          <li>
            <Link
              href="https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags#footer-code"
              rel="noreferrer"
              target="_blank"
            >
              Webflow
            </Link>
          </li>
          <li>
            <Link
              href="https://www.swell.is/help/metrics-and-reporting/analytics-and-global-scripts#analytics-and-global-scripts"
              rel="noreferrer"
              target="_blank"
            >
              Swell
            </Link>
          </li>
        </ul>
      </span>
    ),
  },
];
const List = styled.ol`
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #5e637a;
  margin: 0;
`;

const Item = styled.li`
  & .question {
    margin: 1rem 0 0 0;
  }

  & .answer {
    margin: 0.25rem 0 0.5rem 0;
    font-weight: 400;
  }
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
      {open ? (
        <List>
          {(listType === 'bigcommerce' ? BC_FAQ_LIST : UNIVERSAL_FAQ_LIST).map(
            ({ question, answer }, index) => (
              <Item key={index}>
                <p className="question">{question}</p>
                <p className="answer">{answer}</p>
              </Item>
            ),
          )}
        </List>
      ) : null}
    </>
  );
}
