import FavoriteIcon from '../../assets/icon/FavoriteIcon'
import NotificationIcon from '../../assets/icon/NotificationIcon'
import UserAvatar from '../../assets/img/user-photo.png'
import ContainerLayout from '../container-layout'
import Logo from '../logo'
import styles from './Header.module.scss'
import UserInfo from './user-info'

const Header = () => {
  return (
    <header className={styles.header}>
      <ContainerLayout>
        <div className={styles['header-inner']}>
          <Logo />
          <div className={styles['header-right-content']}>
            <div className={styles['header-icon-box']}>
              <FavoriteIcon />
              <NotificationIcon />
            </div>
            <UserInfo imagePath={UserAvatar} userName="Ivan1234" />
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
