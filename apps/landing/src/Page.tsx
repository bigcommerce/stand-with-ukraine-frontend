import React from 'react';

import { Button, ButtonLink, H1 } from './components';
import { GlobalStyles, NormalizeStyles } from './globalStyles';

export const Page = () => (
  <>
    <NormalizeStyles />
    <GlobalStyles />
    <H1 color="gray">Landing</H1>
    <Button variant="light">Add widget</Button>
    <Button variant="dark">How it works</Button>
    <ButtonLink href="#" variant="dark">How it works</ButtonLink>
  </>
);
