import { useState } from 'react';
import { FilterBtn } from './filter-btn/filter-btn';
import { ViewBtns } from './view-btns/view-btns';
import styles from './navigation-bar.module.scss';
import cross from '../../resources/svg/cross.svg';
import searchSvg from '../../resources/svg/search.svg';

export function NavigationBar({ viewType, onChangeViewHandler }) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  function onClearValueHandler() {
    setSearchInputValue('');
  }

  function onToggleMobilSearch() {
    setShowSearch((showSearch) => !showSearch);
  }

  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.search_filter_block}>
          <button className={styles.search_btn} type='button' onClick={onToggleMobilSearch}>
            <img src={searchSvg} alt='search' />
          </button>
          <div className={styles.search_input}>
            <input
              type='text'
              placeholder='Поиск книги или автора…'
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
            />
            <a className={styles.search_link}>
              <div />
            </a>
            {searchInputValue ? (
              <button type='button' onClick={onClearValueHandler} className={styles.cross_btn}>
                <img src={cross} alt='cancel' />
              </button>
            ) : null}
          </div>
          <FilterBtn />
        </div>
        <ViewBtns viewType={viewType} onChangeViewHandler={onChangeViewHandler} />
      </nav>
      <div className={showSearch ? styles.search_mobil_input : styles.search_mobil_show}>
        <input
          type='text'
          placeholder='Поиск книги или автора…'
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        {searchInputValue ? (
          <button type='button' onClick={onClearValueHandler} className={styles.cross_btn}>
            <img src={cross} alt='cancel' />
          </button>
        ) : null}
      </div>
    </>
  );
}
