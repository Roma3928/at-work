import { FC } from 'react';
import styles from './UserInfo.module.scss';

interface IProps {
  imagePath: string;
  userName: string;
}

const UserInfo: FC<IProps> = ({ imagePath, userName }) => {
  return (
    <div className={styles['user-info']}>
      <img src={imagePath} alt="Фото профиля" />
      <p>{userName}</p>
    </div>
  );
};

export default UserInfo;
