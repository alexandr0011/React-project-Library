import styles from './header.module.scss';
import cleverlandLogo from '../../resources/img/logo.png';
import avatarImg from '../../resources/img/avatar.png';
import burgerImg from '../../resources/img/burger.png';

const USERNAME = 'Иван';

export function Header() {
  return (
    <header>
      <div className={styles.header_wrapper}>
        <img className={styles.logo} src={cleverlandLogo} alt='Cleverland logo' />
        <a>
          <img src={burgerImg} alt='burger menu' />
        </a>
        <div className={styles.title}>
          <h1>Библиотека</h1>
        </div>
        <div className={styles.person}>
          <p>Привет, {USERNAME}!</p>
          <img src={avatarImg} alt='avatar' />
        </div>
      </div>
    </header>
  );
}
