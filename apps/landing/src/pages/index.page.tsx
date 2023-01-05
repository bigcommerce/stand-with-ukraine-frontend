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
  Team,
} from '../sections';

import 'swiper/css';
import 'swiper/css/pagination';

export default { Page };

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
      <Faq />
      <Contacts />
      <LogoPanel />
    </ConfigureWidgetProvider>
  );
}
