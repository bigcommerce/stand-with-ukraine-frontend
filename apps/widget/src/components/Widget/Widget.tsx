import { h } from 'preact';
import { useState } from 'preact/compat';

import { MODAL, STORAGE_KEYS, STORAGE_STATUSES } from '../../constants';
import { analytics } from '../../utils/analytics';
import { safeSessionStorage } from '../../utils/storage';

import styles from './styles.module.scss';

const disableAnimation = () =>
  safeSessionStorage.setItem(STORAGE_KEYS.WIDGET_ANIMATION, STORAGE_STATUSES.DISABLED);

const getClassNames = () => {
  const isAnimated = safeSessionStorage.getItem(STORAGE_KEYS.WIDGET_ANIMATION);

  const classNames = [styles.widget, styles[MODAL.style], styles[MODAL.placement]];

  if (isAnimated === null || isAnimated !== STORAGE_STATUSES.DISABLED) {
    classNames.push(styles.animated);
  }

  disableAnimation();

  return classNames.join(' ');
};

export function Widget({ isModalOpen, onClick }: { isModalOpen: boolean; onClick: () => void }) {
  const widgetValue = safeSessionStorage.getItem(STORAGE_KEYS.WIDGET);
  const [status, setStatus] = useState(widgetValue ?? STORAGE_STATUSES.ENABLED);

  const changeStatus = (status: string) => {
    safeSessionStorage.setItem(STORAGE_KEYS.WIDGET, status);
    setStatus(status);
  };

  const buttonClassNames =
    status === STORAGE_STATUSES.ENABLED ? `${styles.button} ${styles.isOpen}` : styles.button;

  const handleCloseClick = (e: MouseEvent) => {
    e.stopPropagation();

    if (status === STORAGE_STATUSES.ENABLED) {
      changeStatus(STORAGE_STATUSES.COLLAPSED);

      return analytics.widgetCollapsed();
    }

    changeStatus(STORAGE_STATUSES.DISABLED);

    analytics.widgetClosed();
  };

  const handleWidgetClick = () => {
    if (status === STORAGE_STATUSES.ENABLED) {
      return onClick();
    }

    changeStatus(STORAGE_STATUSES.ENABLED);

    analytics.widgetOpened();
  };

  if (isModalOpen || status === STORAGE_STATUSES.DISABLED || status === null) {
    return null;
  }

  /* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
  return (
    <div
      className={getClassNames()}
      onClick={handleWidgetClick}
      style={status === STORAGE_STATUSES.COLLAPSED ? { maxWidth: 86 } : undefined}
    >
      <div className={styles.flag} />
      {status !== STORAGE_STATUSES.COLLAPSED && (
        <div className={styles.content}>
          <p className={styles.title}>Help the people of Ukraine!</p>
          <div className={styles.link}>
            Support <span className={styles.arrow} />
          </div>
        </div>
      )}
      <button className={buttonClassNames} onClick={handleCloseClick} />
    </div>
  );
  /* eslint-enable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
}
