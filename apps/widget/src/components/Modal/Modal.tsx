import { h } from 'preact';

import { CHARITIES, MODAL } from '../../constants';
import { Item } from '../Item/Item';
import styles from './styles.module.scss';

const getSelectedListOfCharities = () => {
  const keys = MODAL.charities;

  if (keys && Array.isArray(keys)) {
    const nextList = CHARITIES.filter(({ id }) => keys.includes(id));

    return nextList.length > 0 ? nextList : CHARITIES;
  }

  return CHARITIES;
};

export function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const handleContentClick = (e: MouseEvent) => e.stopPropagation();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={handleContentClick}>
        <div className={styles.header}>
          <h1>{MODAL.title}</h1>
          <button className={styles.close} onClick={onClose} />
        </div>
        <p>{MODAL.description}</p>
        <div className={styles.img}>
          <img {...MODAL.img} />
        </div>
        {getSelectedListOfCharities().map((charity, key) => (
          <Item key={key} {...charity} />
        ))}
      </div>
    </div>
  );
}
