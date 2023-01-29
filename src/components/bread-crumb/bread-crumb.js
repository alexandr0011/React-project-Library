import { NavLink } from 'react-router-dom';
import styles from './bread-crumb.module.scss';

export function BreadCrumb({ category, aboutBook, title }) {
  return (
    <section className={styles.books_nav}>
      <div className={styles.books_nav_wrapper}>
        <NavLink to={`../books/${category}`}>{aboutBook.genre}</NavLink>
        <span>/</span>
        {title}
      </div>
    </section>
  );
}
