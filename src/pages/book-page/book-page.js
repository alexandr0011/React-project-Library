import { useParams } from 'react-router-dom';
import { BreadCrumb } from '../../components/bread-crumb/bread-crumb';
import { BooksRating } from '../../components/books-rating/books-rating';
import { AboutBook } from '../../components/about-book/about-book';
import { BookReviews } from '../../components/book-reviews/book-reviews';
import { BookPreview } from '../../components/book-preview/book-preview';
import styles from './book-page.module.scss';

export function BookPage({ bookItems }) {
  const path = useParams();
  const bookItem = bookItems.find((book) => book.id === +path.id);

  const { id, img, rating, category, author, title, aboutBook, status, reviews } = bookItem;

  return (
    <main>
      <BreadCrumb category={category} aboutBook={aboutBook} title={title} />
      <div className={styles.wrapper}>
        <BookPreview aboutBook={aboutBook} status={status} author={author} title={title} img={img} />
        <section className={styles.rating_wrapper}>
          <div className={styles.rating_book_placeholder}>Рейтинг</div>
          <div className={styles.rating_container}>
            <BooksRating id={id} rating={rating} />
            {rating ? <span>{rating}</span> : <p>ещё нет оценок</p>}
          </div>
        </section>
        <AboutBook aboutBook={aboutBook} />
        <BookReviews reviews={reviews} />
      </div>
    </main>
  );
}
