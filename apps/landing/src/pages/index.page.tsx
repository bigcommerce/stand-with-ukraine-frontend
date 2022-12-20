import { WidgetStateProvider } from '../components/AddWidget/WidgetFrameContext';
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
    <WidgetStateProvider>
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
    </WidgetStateProvider>
  );
}
