import { Fragment, useState } from 'react';
import { SvgCollection } from '../../resources/svg/svg-collection';
import styles from './books-rating.module.scss';

const STARS = 5;

export function BooksRating({ id, rating }) {
  const [ratingValue, setRatingValue] = useState(Math.round(rating));

  function onChangeRating(newRating) {
    setRatingValue(newRating);
  }

  const starItems = [];

  for (let i = 1; i <= STARS; i++) {
    starItems.unshift(
      <Fragment key={i}>
        <input
          type='radio'
          id={`${id}rating_${i}`}
          value={i}
          className={styles.rating_item}
          name={`${id}rating`}
          onChange={(e) => onChangeRating(+e.target.value)}
          checked={ratingValue === i}
        />
        <label htmlFor={`${id}rating_${i}`} className={styles.rating_label}>
          <SvgCollection svgName='books-rating-svg' />
        </label>
      </Fragment>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.rating_items}>{starItems}</div>
    </div>
  );
}
