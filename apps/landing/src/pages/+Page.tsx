import { ConfigureWidgetProvider } from '../components/ConfigureWidget/ConfigureWidgetContext';
import {
  AddWidget,
  Cases,
  Charities,
  Contacts,
  Faq,
  Home,
  HowItWorks,
  LogoPanel,
  Stats,
  Support,
  Team,
} from '../sections';

export { Page };

function Page() {
  return (
    <ConfigureWidgetProvider>
      <LogoPanel isFixed />
      <Home />
      <HowItWorks />
      <Stats />
      <Cases />
      <AddWidget />
      <Charities />
      <Team />
      <Support />
      <Faq />
      <Contacts />
      <LogoPanel />
    </ConfigureWidgetProvider>
  );
}
