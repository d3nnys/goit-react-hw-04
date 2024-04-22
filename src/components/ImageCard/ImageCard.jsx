import css from './ImageCard.module.css';

export default function ImageCard({ urls: { small }, alt_description }) {
  return (
    <div>
      <img className={css.img} src={small} alt={alt_description} width="500" />
    </div>
  );
}
