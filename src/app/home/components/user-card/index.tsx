import { FC } from 'react';
import styles from './UserCard.module.scss';
import { IUserCard } from '../user-list';
import MoreOptionsIcon from '../../../../assets/icon/more-options-icon/MoreOptionsIcon';

interface IProps extends Omit<IUserCard, 'id'> {}

const UserCard: FC<IProps> = ({ userName, companyName, location, avatarUrl }) => {
  return (
    <div className={styles['user-card']}>
      <img className={styles.avatar} src={avatarUrl} alt={`${userName}'s аватар`} />
      <div className={styles['user-content']}>
        <div className={styles['user-info']}>
          <div>
            <h3 className={styles['user-name']}>{userName}</h3>
            <p className={styles['company-name']}>{companyName}</p>
          </div>
          <p className={styles.location}>{location}</p>
        </div>
        <MoreOptionsIcon />
      </div>
    </div>
  );
};

export default UserCard;
