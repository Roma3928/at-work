import { FC } from 'react';
import styles from './ProfileData.module.scss';
import classNames from 'classnames';
import { IUserProfileCategory } from '../../../../constants/userInfo';

interface IProps {
  imageUrl?: string;
  categories: IUserProfileCategory[];
}

const ProfileData: FC<IProps> = ({ imageUrl, categories }) => {
  return (
    <div className={styles['profile-data']}>
      <img className={styles['profile-avatar']} src={imageUrl} alt="Фото профиля" />

      <ul className={styles['profile-categories']}>
        {categories?.map((category, index) => (
          <li
            className={classNames(styles['profile-category'], {
              [styles['profile-category-active']]: category.active,
            })}
            key={index}
            onClick={category.onClick}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileData;
