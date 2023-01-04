import { ConfigureWidgetProvider } from '../components/ConfigureWidget/ConfigureWidgetContext';
import {
  AddWidget,
  Cases,
  Charities,
  Contacts,
  Faq,
  Footer,
  Header,
  Home,
  HowItWorks,
  Stats,
  Team,
} from '../sections';

export default { Page };

function Page() {
  return (
    <ConfigureWidgetProvider>
      <Header />
      <Home />
      <HowItWorks />
      <Stats />
      <Cases />
      <AddWidget />
      <Charities />
      <Team />
      <Faq />
      <Contacts />
      <Footer />
    </ConfigureWidgetProvider>
  );
}
