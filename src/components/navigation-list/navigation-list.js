import { NavLink, useMatch } from 'react-router-dom';
import { useState } from 'react';
import styles from './navigation-list.module.scss';
import arrowSvg from '../../resources/svg/accordion_arrow.svg';

export function NavigationList({ bookCategories }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const match = useMatch({
    path: 'books',
    end: false,
  });

  const activeLink = ({ isActive }) => (isActive ? styles.active_link : '');

  function onAccordionOpen() {
    setIsAccordionOpen((isAccordionOpen) => !isAccordionOpen);
  }

  const booksCategorylinks = bookCategories.map((item) => (
    <li key={item.id}>
      <NavLink to={item.link} className={({ isActive }) => `${isActive ? styles.book_category_link_active : ''}`}>
        {item.category} <span>{item.count}</span>
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.link_items}>
        <li className={!isAccordionOpen ? styles.main_menu_item : styles.main_menu_item_active}>
          <NavLink to='books/all' className={match ? styles.active_accordion_title : ''}>
            <button type='button' className={styles.accordion_btn} onClick={onAccordionOpen}>
              <span>Витрина книг</span>
              <img src={arrowSvg} alt='accordion btn' />
            </button>
          </NavLink>
        </li>
        <ul className={!isAccordionOpen ? styles.list_items : styles.list_items_active}>{booksCategorylinks}</ul>
        <li className={styles.main_menu_item}>
          <NavLink to='terms' className={activeLink}>
            Правила пользования
          </NavLink>
        </li>
        <li className={styles.main_menu_item}>
          <NavLink to='agreements' className={activeLink}>
            Договор оферты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
