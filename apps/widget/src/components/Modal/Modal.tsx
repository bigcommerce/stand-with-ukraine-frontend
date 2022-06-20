import { h } from "preact";
import styles from "./styles.module.scss";
import { CHARITY_LIST, MODAL } from "../../constants";
import { Item } from "../Item/Item";

const getList = () => {
  const keys = MODAL.charities;

  if (keys && Array.isArray(keys)) {
    const nextList = CHARITY_LIST.filter(({ id }) => keys.includes(id));

    return nextList.length > 0 ? nextList : CHARITY_LIST;
  }

  return CHARITY_LIST;
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
        {getList().map((item, key) => (
          <Item key={key} {...item} />
        ))}
      </div>
    </div>
  );
}
