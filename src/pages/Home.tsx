import { Panel } from '@bigcommerce/big-design';
import Content from '../components/Home/Content';
import Header from '../components/Home/Header';
import { selectHome } from '../components/Home/homeSlice';
import NotPublishedActions from '../components/Home/NotPublishedActions';
import PublishedActions from '../components/Home/PublishedActions';
import { useAppSelector } from '../state/hooks';

export default function Home() {
  const { published } = useAppSelector(selectHome);

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
