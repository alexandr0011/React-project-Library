import { SvgCollection } from '../../../resources/svg/svg-collection';
import styles from './view-btns.module.scss';

export function ViewBtns({ viewType, onChangeViewHandler }) {
  return (
    <div className={styles.view_btn_block}>
      <input
        id='tile'
        value='tile'
        className={styles.tile_btn}
        type='radio'
        name='type-view'
        checked={viewType === 'tile'}
        onChange={(e) => onChangeViewHandler(e.target.value)}
      />
      <label data-test-id='button-menu-view-window' className={styles.tile_btn_label} htmlFor='tile'>
        <SvgCollection svgName='tile-btn-svg' />
      </label>
      <input
        id='list'
        value='list'
        className={styles.list_btn}
        type='radio'
        name='type-view'
        checked={viewType === 'list'}
        onChange={(e) => onChangeViewHandler(e.target.value)}
      />
      <label data-test-id='button-menu-view-list' className={styles.list_btn_label} htmlFor='list'>
        <SvgCollection svgName='list-btn-svg' />
      </label>
    </div>
  );
}
