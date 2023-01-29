import { Link } from 'react-router-dom';
import { BooksRating } from '../books-rating/books-rating';
import { VIEW_TYPE_TILE } from '../../constants/constants';
import styles from './card-book.module.scss';
import defaultImg from '../../resources/img/default_card_img.png';
import defaultListImg from '../../resources/img/default_card_list_img.png';

export function CardBook({ viewType, id, img, rating, title, author, category, status }) {
  function test(e) {
    e.preventDefault();
  }

  function renderBtn(btnType) {
    switch (btnType.type) {
      case 'reserved':
        return (
          <button
            className={viewType === VIEW_TYPE_TILE ? styles.card_btn_reserved : styles.card_list_btn_reserved}
            type='button'
            onClick={(e) => test(e)}
          >
            Забронирована
          </button>
        );
      case 'booked':
        return (
          <button
            className={viewType === VIEW_TYPE_TILE ? styles.card_btn : styles.card_list_btn}
            disabled={true}
            type='button'
            onClick={(e) => test(e)}
          >
            Занята до {status.date}
          </button>
        );
      default:
        return (
          <button
            className={viewType === VIEW_TYPE_TILE ? styles.card_btn : styles.card_list_btn}
            type='button'
            onClick={(e) => test(e)}
          >
            Забронировать
          </button>
        );
    }
  }

  return (
    <div data-test-id='card' className={viewType === VIEW_TYPE_TILE ? styles.card_item : styles.card_list_item}>
      {viewType === VIEW_TYPE_TILE ? (
        <Link to={`books/../../${category}/${id}`}>
          <div className={styles.card_wrapper}>
            <div className={styles.book_img}>
              <img src={img.card ? img.card : defaultImg} alt='img' />
            </div>
            <div className={styles.book_rating}>
              {rating ? <BooksRating id={id} rating={rating} /> : 'ещё нет оценок'}
            </div>
            <div className={styles.book_title}>{title.length < 53 ? title : `${title.slice(0, 53)}...`}</div>
            <div className={styles.book_author}>{author}</div>
            {renderBtn(status)}
          </div>
        </Link>
      ) : (
        <Link to={`books/../../${category}/${id}`}>
          <div className={styles.card_list_wrapper}>
            <div className={styles.list_book_img}>
              <img src={img.list ? img.list : defaultListImg} alt='img' />
            </div>
            <div className={styles.content_card_list}>
              <div className={styles.book_list_title}>{title.length < 90 ? title : `${title.slice(0, 90)}...`}</div>
              <div className={styles.book_list_author}>{author}</div>
              <div className={styles.list_container}>
                <div className={styles.book_list_rating}>
                  {rating ? <BooksRating id={id} rating={rating} /> : 'ещё нет оценок'}
                </div>
                <div className={styles.book_list_btn}>{renderBtn(status)}</div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
