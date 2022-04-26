import { Panel } from '@bigcommerce/big-design';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Content from '../components/Home/Content';
import Header from '../components/Home/Header';
import { selectHome } from '../components/Home/homeSlice';
import NotPublishedActions from '../components/Home/NotPublishedActions';
import PublishedActions from '../components/Home/PublishedActions';
import { useAppSelector } from '../state/hooks';

export default function Home() {
  const { published } = useAppSelector(selectHome);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token && token.split('.').length === 3) {
      sessionStorage.setItem('app-bearer-token', token);
    }
  }, [searchParams]);

  return (
    <>
      <Panel>
        <Header published={published} />
        <Content />
        {published ? <PublishedActions /> : <NotPublishedActions />}
      </Panel>
    </>
  );
}
