import {
  Contacts,
  HelpIsImportant,
  Home,
  Impact,
  LogoPanel,
  Needs,
  Stats,
  Subscriptions,
} from '../sections';
import { DocsPanel } from '../sections/DocsPanel';
import { Faq } from '../sections/Faq';

export { Page };

function Page() {
  return (
    <>
      <LogoPanel isFixed />
      <Home />
      <HelpIsImportant />
      <Needs />
      <Subscriptions />
      <Impact />
      <Stats />
      <Faq />
      <Contacts />
      <LogoPanel />
      <DocsPanel />
    </>
  );
}
