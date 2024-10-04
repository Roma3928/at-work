import { FC } from 'react';
import UserCard from '../user-card';
import styles from './UserList.module.scss';
import UserAvatar from '../../../../assets/img/user-photo.png';

export interface IUserCard {
  id: number;
  userName: string;
  companyName: string;
  location: string;
  avatarUrl?: string;
}

interface IProps {
  users: IUserCard[];
}

const CardList: FC<IProps> = ({ users }) => {
  return (
    <div className={styles['user-list']}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          userName={user.userName}
          companyName={user.companyName}
          location={user.location}
          avatarUrl={UserAvatar}
        />
      ))}
    </div>
  );
};

export default CardList;
