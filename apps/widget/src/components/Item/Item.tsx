import { Charity } from 'config/types';
import { h } from 'preact';
import { useState } from 'preact/compat';

import { analytics } from '../../utils/analytics';

import styles from './styles.module.scss';

function Description({ description, id }: { description: string; id: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSeeMoreClick = (e: h.JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(true);
    analytics.charitySeeMore(id);
  };

  return (
    <>
      {isOpen ? (
        description.split('\n').map((text, key) => <p key={key}>{text}</p>)
      ) : (
        <p>
          {description.split(' ').slice(0, 15).join(' ')}{' '}
          <a href="#" onClick={handleSeeMoreClick}>
            See more
          </a>
        </p>
      )}
    </>
  );
}

export function Item({ id, logoProps, name, description, donationLink }: Charity) {
  const handleSupportClick = () => analytics.charityClick(id);

  return (
    <div className={styles.item} id={`charity-${id}`}>
      <img alt={logoProps.alt} className={styles.icon} src={logoProps.src} />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            <strong>{name}</strong>
          </p>
          <Description description={description} id={id} />
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
