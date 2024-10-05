import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Header from '../header';

const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
