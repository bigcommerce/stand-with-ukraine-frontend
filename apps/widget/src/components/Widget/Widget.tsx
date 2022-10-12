import { h } from 'preact';
import { useState } from 'preact/compat';

import { MODAL, WIDGET_STATUS } from '../../constants';
import { analytics } from '../../utils/analytics';
import { safeSessionStorage, STORAGE_KEYS } from '../../utils/storage';

import styles from './styles.module.scss';

function getAnimationClassName() {
  const isAnimated =
    (safeSessionStorage.getItem(STORAGE_KEYS.WIDGET_ANIMATION) ?? WIDGET_STATUS.ENABLED) !==
    WIDGET_STATUS.DISABLED;

  // disable it for any subsequent gets
  safeSessionStorage.setItem(STORAGE_KEYS.WIDGET_ANIMATION, WIDGET_STATUS.DISABLED);

  return isAnimated ? styles.animated : '';
}

function getWidgetCollapsedClassName(status: WIDGET_STATUS) {
  return status === WIDGET_STATUS.COLLAPSED ? styles.collapsed : '';
}

function getWidgetClassNames(status: WIDGET_STATUS) {
  return `${styles.widget} ${styles[MODAL.style]} ${
    styles[MODAL.placement]
  } ${getAnimationClassName()} ${getWidgetCollapsedClassName(status)}`;
}

function getButtonClassNames(status: WIDGET_STATUS) {
  return status === WIDGET_STATUS.ENABLED ? `${styles.button} ${styles.isOpen}` : styles.button;
}

function WidgetContent({ showText }: { showText: boolean }) {
  return showText ? (
    <div className={styles.content}>
      <p className={styles.title}>Help the people of Ukraine!</p>
      <div className={styles.link}>
        Support <span className={styles.arrow} />
      </div>
    </div>
  ) : null;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const DEFAULT_STATUS = (safeSessionStorage.getItem(STORAGE_KEYS.WIDGET) ??
  WIDGET_STATUS.ENABLED) as WIDGET_STATUS;

export function Widget({ isModalOpen, onClick }: { isModalOpen: boolean; onClick: () => void }) {
  const [status, setStatus] = useState<WIDGET_STATUS>(DEFAULT_STATUS);

  const changeStatus = (newStatus: WIDGET_STATUS) => {
    safeSessionStorage.setItem(STORAGE_KEYS.WIDGET, newStatus);
    setStatus(newStatus);
    analytics.trackWidgetStatus(newStatus);
  };

  const handleCloseClick = (e: MouseEvent) => {
    e.stopPropagation();
    changeStatus(
      status === WIDGET_STATUS.COLLAPSED ? WIDGET_STATUS.DISABLED : WIDGET_STATUS.COLLAPSED,
    );
  };

  const handleWidgetClick = () => {
    if (status === WIDGET_STATUS.ENABLED) {
      return onClick();
    }

    changeStatus(WIDGET_STATUS.ENABLED);
  };

  if (isModalOpen || status === WIDGET_STATUS.DISABLED) {
    return null;
  }

  /* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
  return (
    <div className={getWidgetClassNames(status)} onClick={handleWidgetClick}>
      <div className={styles.flag} />
      <WidgetContent showText={status !== WIDGET_STATUS.COLLAPSED} />
      <button
        className={getButtonClassNames(status)}
        id="close-swu-widget"
        onClick={handleCloseClick}
      />
    </div>
  );
  /* eslint-enable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
}
