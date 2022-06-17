import { h } from "preact";
import styles from "./styles.scss";
import { safeSessionStorage } from "../../utils/storage";
import { STORAGE_KEYS, STORAGE_STATUSES } from "../../constants";
import { useState } from "preact/hooks";

export const Widget = ({ isModalOpen, onClick }) => {
  const widgetValue = safeSessionStorage.getItem(STORAGE_KEYS.WIDGET);

  const [isWidgetEnabled, setIsWidgetEnabled] = useState(
    widgetValue === null || widgetValue !== STORAGE_STATUSES.DISABLED
  );

  const disableAnimation = () =>
    safeSessionStorage.setItem(
      STORAGE_KEYS.WIDGET_ANIMATION,
      STORAGE_STATUSES.DISABLED
    );

  const getClassNames = () => {
    const isAnimated = safeSessionStorage.getItem(
      STORAGE_KEYS.WIDGET_ANIMATION
    );

    const classNames = [
      styles.widget,
      styles[window?.SWU_CONFIG?.style ?? "blue"],
      styles[window?.SWU_CONFIG?.placement ?? "bottom-left"],
    ];

    if (isAnimated === null || isAnimated !== STORAGE_STATUSES.DISABLED) {
      classNames.push(styles.animated);
    }

    disableAnimation();

    return classNames.join(" ");
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();

    safeSessionStorage.setItem(STORAGE_KEYS.WIDGET, STORAGE_STATUSES.DISABLED);

    setIsWidgetEnabled(false);
  };

  const handleWidgetClick = () => {
    if (isWidgetEnabled) {
      return onClick();
    }

    safeSessionStorage.setItem(STORAGE_KEYS.WIDGET, STORAGE_STATUSES.ENABLED);

    setIsWidgetEnabled(true);
  };

  if (isModalOpen) {
    return null;
  }

  return (
    <div
      style={!isWidgetEnabled ? { maxWidth: 86 } : undefined}
      className={getClassNames()}
      onClick={handleWidgetClick}
    >
      <div className={styles.flag} />
      {isWidgetEnabled && (
        <div className={styles.content}>
          <p className={styles.title}>Help the people of Ukraine!</p>
          <div className={styles.link}>
            Support <span className={styles.arrow} />
          </div>
        </div>
      )}
      {isWidgetEnabled && (
        <button className={styles.button} onClick={handleCloseClick} />
      )}
    </div>
  );
};
