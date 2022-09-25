import { h } from 'preact';
import { useState } from 'preact/compat';

import { Modal } from './components/Modal/Modal';
import { Widget } from './components/Widget/Widget';
import { analytics } from './utils/analytics';
import { hideBodyOverflow } from './utils/domHelpers';

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
