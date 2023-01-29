import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { CardBook } from '../../components/card-book/card-book';
import { VIEW_TYPE_TILE } from '../../constants/constants';
import styles from './books-page.module.scss';

export function BooksPage({ bookItems }) {
  const [viewType, setViewType] = useState(VIEW_TYPE_TILE);
  const { category } = useParams();

  function onChangeViewHandler(view) {
    setViewType(view);
  }

  const filtredCards = bookItems.filter((card) => (category === 'all' ? card : card.category === category));

  const cards = filtredCards.map((card) => (
    <CardBook
      key={card.id}
      viewType={viewType}
      id={card.id}
      img={card.img}
      rating={card.rating}
      title={card.title}
      author={card.author}
      category={card.category}
      status={card.status}
    />
  ));

  return (
    <section className={styles.books_page_wrapper}>
      <NavigationBar viewType={viewType} onChangeViewHandler={(view) => onChangeViewHandler(view)} />
      <section className={viewType === VIEW_TYPE_TILE ? styles.content_wrapper : styles.content_wrapper_list}>
        {cards}
      </section>
    </section>
  );
}
