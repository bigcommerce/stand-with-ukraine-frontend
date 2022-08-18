import { Charity } from 'config/types';
import { h } from 'preact';
import { useState } from 'preact/compat';

import { analytics } from '../../utils/analytics';

import styles from './styles.module.scss';

export function Item({ id, logoProps, name, description, donationLink }: Charity) {
  const [isOpen, setIsOpen] = useState(false);

  const textPreview = description
    .split(' ')
    .filter((_, i) => i < 15)
    .join(' ');

  const handleSeeMoreClick = (e: MouseEvent) => {
    e.preventDefault();

    setIsOpen(true);

    analytics.charitySeeMore(id);
  };

  const handleSupportClick = () => analytics.charityClick(id);

  return (
    <div className={styles.item}>
      <img alt={logoProps.alt} className={styles.icon} src={logoProps.src} />
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
          className={styles.button}
          href={donationLink}
          onClick={handleSupportClick}
          rel="noreferrer"
          target="_blank"
        >
          Support
        </a>
      </div>
    </div>
  );
}
