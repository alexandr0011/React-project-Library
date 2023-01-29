import { useState } from 'react';
import styles from './filter-btn.module.scss';
import sortDownSvg from '../../../resources/svg/sort_down.svg';
import sortUpSvg from '../../../resources/svg/sort_up.svg';

export function FilterBtn() {
  const [sortIsChecked, setSortIsChecked] = useState(false);

  function onSortHandler() {
    setSortIsChecked((sortIsChecked) => !sortIsChecked);
  }

  return (
    <div className={styles.filter}>
      <input type='checkbox' id='filter' checked={sortIsChecked} onChange={onSortHandler} />
      <label htmlFor='filter'>
        <img src={sortIsChecked ? sortDownSvg : sortUpSvg} alt='filter' />
        <p>По рейтингу</p>
      </label>
    </div>
  );
}
