import { ConfigureWidgetProvider } from '../components/ConfigureWidget/ConfigureWidgetContext';
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

export { Page };

function Page() {
  return (
    <ConfigureWidgetProvider>
      <LogoPanel isFixed />
      <Home />
      <HelpIsImportant />
      <Needs />
      <Subscriptions />
      <Impact />
      <Stats />
      <Contacts />
      <LogoPanel />
    </ConfigureWidgetProvider>
  );
}
