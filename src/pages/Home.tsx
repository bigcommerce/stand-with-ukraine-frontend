import { Panel } from '@bigcommerce/big-design';
import styled from 'styled-components';
import RouterButton from '../components/RouterButton';

const Content = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #5e637a;
`;

export default function Home() {
  return (
    <>
      <Panel header="Add widget to your store to support Ukraine">
        <Content>
          How it works:
          <li>you select widget layout and style</li>
          <li>
            list of pages to show banner charity fund add banner to your store
            your
          </li>
          <li>
            shoppers see the banner, click on it and redirecting to the charity
            fund
          </li>
          <li>
            page shoppers donate or support Ukraine other way donation will be
            spent
          </li>
          <li>
            on medical assistance, accoutrements, and defense analysis etc. your
          </li>
          <li>support saves lives</li>
        </Content>
        <RouterButton
          linkProps={{
            to: '/setup',
          }}
          marginTop="large"
        >
          Add widget to your store
        </RouterButton>
      </Panel>
    </>
  );
}
