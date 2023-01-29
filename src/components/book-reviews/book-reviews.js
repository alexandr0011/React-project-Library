import { Comment } from '../comment/comment';
import styles from './book-reviews.module.scss';

export function BookReviews({ reviews }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        Отзывы
        <span>{reviews.length}</span>
      </div>
      {reviews.length !== 0 ? (
        <>
          <div className={styles.reviews_title_border} />
          <Comment reviews={reviews} />
        </>
      ) : null}
      <div className={styles.btn_wrapper}>
        <button className={styles.review_btn} type='button'>
          Оценить книгу
        </button>
      </div>
    </section>
  );
}
