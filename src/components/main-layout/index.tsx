import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Header from '../header';

const MainLayout: FC = () => {
  return (
    <div className={styles['main-layout']}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
