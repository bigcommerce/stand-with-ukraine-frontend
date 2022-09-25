import { Panel } from '@bigcommerce/big-design';
import React from 'react';

import Content from '../components/Home/Content';
import FAQ from '../components/Home/FAQ';
import Header from '../components/Home/Header';
import NotPublishedActions from '../components/Home/NotPublishedActions';
import PublishedActions from '../components/Home/PublishedActions';
import { useAppSelector } from '../state/hooks';
import { selectPublished } from '../state/mainSlice/selectors';

export default function Home() {
  const published = useAppSelector(selectPublished);

  return (
    <>
      <Panel>
        <Header published={published} />
        <Content published={published} />
        <FAQ />
        {published ? <PublishedActions /> : <NotPublishedActions />}
      </Panel>
    </>
  );
}
