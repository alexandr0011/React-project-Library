import { Outlet } from 'react-router-dom';
import { NavigationList } from '../navigation-list/navigation-list';
import styles from './layout-main-page.module.scss';

export function LayoutMainPage({ bookCategories }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <NavigationList bookCategories={bookCategories} />
        <Outlet />
      </div>
    </section>
  );
}
