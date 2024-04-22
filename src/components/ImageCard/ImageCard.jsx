import { useEffect, useRef } from 'react';
import css from './ImageCard.module.css';

export default function ImageCard({
  urls: { small, regular },
  alt_description,
  onClick,
  mark,
}) {
  const liRef = useRef(null);

  useEffect(() => {
    if (!liRef.current) return;
    liRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div ref={mark ? liRef : null} className={css.wrapper}>
      <img
        className={css.img}
        src={small}
        width="500"
        alt={alt_description}
        onClick={() => onClick(regular)}
      />
    </div>
  );
}
