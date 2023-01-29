import styles from './about-book.module.scss';

export function AboutBook({ aboutBook }) {
  return (
    <section className={styles.about_book_wrapper}>
      <div className={styles.about_book_title}>Подробная информация</div>
      <div className={styles.about_book_info_container}>
        <div className={styles.about_book_info_section}>
          <div className={styles.about_book_info_section_item}>
            <div>Издательство</div>
            <p>{aboutBook.publHouse}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>Год издания</div>
            <p>{aboutBook.publYear}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>Страниц</div>
            <p>{aboutBook.pages}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>Переплет</div>
            <p>{aboutBook.binding}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>Формат</div>
            <p>{aboutBook.format}</p>
          </div>
        </div>
        <div className={styles.about_book_info_section}>
          <div className={styles.about_book_info_section_item}>
            <div>Жанр</div>
            <p>{aboutBook.genre}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>Вес</div>
            <p>{aboutBook.weight}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>ISBN</div>
            <p>{aboutBook.ISBN}</p>
          </div>
          <div className={styles.about_book_info_section_item}>
            <div>Изготовитель</div>
            <p>{aboutBook.manufacturer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
