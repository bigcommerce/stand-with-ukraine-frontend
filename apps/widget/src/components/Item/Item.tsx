import { h } from "preact";
import styles from "./styles.module.scss";
import { useState } from "preact/compat";

export function Item({
  icon,
  title,
  content,
  link,
}: {
  icon: { alt: string; src: string };
  title: string;
  content: string;
  link: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const textPreview = content
    .split(" ")
    .filter((_, i) => i < 15)
    .join(" ");

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    setIsOpen(true);
  };

  return (
    <div className={styles.item}>
      <img className={styles.icon} {...icon} />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            <strong>{title}</strong>
          </p>
          {isOpen ? (
            content.split("\n").map((text, key) => <p key={key}>{text}</p>)
          ) : (
            <p>
              {textPreview}{" "}
              <a href="#" onClick={handleClick}>
                See more
              </a>
            </p>
          )}
        </div>
        <a
          href={link}
          target="_blank"
          className={styles.button}
          rel="noreferrer"
        >
          Support
        </a>
      </div>
    </div>
  );
}
