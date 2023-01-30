import { Charity } from 'config/types';
import { h } from 'preact';

import { CHARITIES, MODAL } from '../../constants';
import { Item } from '../Item/Item';

import styles from './styles.module.scss';

const getSelectedListOfCharities = () => {
  const keys = MODAL.charities;

  if (keys && Array.isArray(keys)) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const selectedCharities = keys
      .map((key) => CHARITIES.find(({ id }) => key === id))
      .filter(Boolean) as Charity[];

    return selectedCharities.length > 0 ? selectedCharities : CHARITIES;
  }

  return CHARITIES;
};

export function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const handleContentClick = (e: h.JSX.TargetedMouseEvent<HTMLDivElement>) => e.stopPropagation();

  if (!isOpen) {
    return null;
  }

  /* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={handleContentClick}>
        <div className={styles.header}>
          <h1>{MODAL.title}</h1>
          <button className={styles.close} id="close-swu-modal" onClick={onClose} />
        </div>
        <p>{MODAL.description}</p>
        <div className={styles.img}>
          <img alt={MODAL.img.alt} src={MODAL.img.src} />
        </div>
        {getSelectedListOfCharities().map((charity, key) => (
          <Item key={key} {...charity} />
        ))}
      </div>
    </div>
  );
  /* eslint-enable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
}
