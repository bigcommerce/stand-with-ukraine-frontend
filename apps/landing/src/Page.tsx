import React from 'react';

import { Fonts, GlobalStyles, NormalizeStyles } from './globalStyles';
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
} from './sections';

export const Page = () => (
  <>
    <Fonts />
    <NormalizeStyles />
    <GlobalStyles />

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
  </>
);
