import { h } from "preact";
import { useState } from "preact/hooks";
import { Widget } from "./components/Widget/Widget";
import { Modal } from "./components/Modal/Modal";

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (isOpen) => {
    const body = document.getElementsByTagName("body")[0];

    if (body) {
      body.style.overflow = isOpen ? "hidden" : "initial";
    }

    setIsModalOpen(isOpen);
  };

  return (
    <div>
      <Widget
        isModalOpen={isModalOpen}
        onClick={() => handleModalToggle(true)}
      />
      <Modal isOpen={isModalOpen} onClose={() => handleModalToggle(false)} />
    </div>
  );
};
