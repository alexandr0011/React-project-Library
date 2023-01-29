import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

import styles from './layout.module.scss';

export function Layout() {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.app_container}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
