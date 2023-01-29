import styles from './book-preview.module.scss';
import defaultBookImg from '../../resources/img/default_book_preview.png';

export function BookPreview({ aboutBook, status, author, title, img }) {
  function renderBtn(btnType) {
    switch (btnType.type) {
      case 'reserved':
        return (
          <button className={styles.btn_reserved} type='button'>
            Забронирована
          </button>
        );
      case 'booked':
        return (
          <button className={styles.btn} disabled={true} type='button'>
            Занята до {status.date}
          </button>
        );
      default:
        return (
          <button className={styles.btn} type='button'>
            Забронировать
          </button>
        );
    }
  }

  return (
    <section className={styles.book_info}>
      <div className={styles.container}>
        <div className={styles.book_img}>
          <img src={img.preview ? img.preview : defaultBookImg} alt='book preview' />
        </div>
        <div className={styles.book_content}>
          <div className={styles.book_title}>{title}</div>
          <div className={styles.book_author}>{author}</div>
          {renderBtn(status)}
          <div className={styles.about_book_container}>
            <div className={styles.about_book_placeholder}>О книге</div>
            <div className={styles.book_description}>
              {aboutBook.description_first}
              <br />
              <br />
              {aboutBook.description_second}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_book_container_mobile}>
        <div className={styles.about_book_placeholder}>О книге</div>
        <div className={styles.book_description}>
          {aboutBook.description_first}
          <br />
          <br />
          {aboutBook.description_second}
        </div>
      </div>
    </section>
  );
}
