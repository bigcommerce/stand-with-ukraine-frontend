import { h } from 'preact';
import { useState } from 'preact/compat';

import { Modal } from './components/Modal/Modal';
import { Widget } from './components/Widget/Widget';
import { analytics } from './utils/analytics';
import { getBaseURL } from './utils/baseUrl';
import { hideBodyOverflow } from './utils/domHelpers';

export function getDevContainer() {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return document.getElementById('swu') as HTMLDivElement;
}

export function createProdContainer() {
  const appContainer = document.createElement('div');

  appContainer.setAttribute('id', 'swu');

  const link = document.createElement('link');

  link.href = `${getBaseURL()}style.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';

  document.body.append(link);
  document.body.append(appContainer);

  return appContainer;
}

export function getAppContainer() {
  if (import.meta.env.DEV) {
    return getDevContainer();
  }

  return createProdContainer();
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (isOpen: boolean) => {
    hideBodyOverflow(isOpen);
    setIsModalOpen(isOpen);
    analytics.trackModalStatus(isOpen);
  };

  return (
    <div>
      <Widget isModalOpen={isModalOpen} onClick={() => handleModalToggle(true)} />
      <Modal isOpen={isModalOpen} onClose={() => handleModalToggle(false)} />
    </div>
  );
}
