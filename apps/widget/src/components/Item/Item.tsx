import { Charity } from 'config/types';
import { h } from 'preact';
import { useState } from 'preact/compat';

import styles from './styles.module.scss';
import { analytics } from '../../utils/analytics';

export function Item({ id, logoProps, name, description, donationLink }: Charity) {
  const [isOpen, setIsOpen] = useState(false);

  const textPreview = description
    .split(' ')
    .filter((_, i) => i < 15)
    .join(' ');

  const handleSeeMoreClick = (e: MouseEvent) => {
    e.preventDefault();

    setIsOpen(true);

    return analytics.charitySeeMore(id);
  };

  const handleSupportClick = () => {
    analytics.charityClick(id);

    return true;
  }

  return (
    <div className={styles.item}>
      <img className={styles.icon} {...logoProps} />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            <strong>{name}</strong>
          </p>
          {isOpen ? (
            description.split('\n').map((text, key) => <p key={key}>{text}</p>)
          ) : (
            <p>
              {textPreview}{' '}
              <a href="#" onClick={handleSeeMoreClick}>
                See more
              </a>
            </p>
          )}
        </div>
        <a
          href={donationLink}
          target="_blank"
          className={styles.button}
          rel="noreferrer"
          onClick={handleSupportClick}
        >
          Support
        </a>
      </div>
    </div>
  );
}
