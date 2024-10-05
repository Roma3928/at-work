import { FC } from 'react';
import UserCard from '../user-card';
import styles from './UserList.module.scss';
import UserAvatar from '../../../../assets/img/user-photo.png';
import { IOption } from '../../../../components/dropdown';

export interface IUserCard {
  id: number;
  userName: string;
  companyName: string;
  location: string;
  avatarUrl?: string;
  isArchived?: boolean;
}

interface IProps {
  users: IUserCard[];
  dropdownOptions: (userId: number) => IOption[];
}

const CardList: FC<IProps> = ({ users, dropdownOptions }) => {
  return (
    <div className={styles['user-list']}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          userName={user.userName}
          companyName={user.companyName}
          location={user.location}
          avatarUrl={UserAvatar}
          dropdownOptions={dropdownOptions(user.id)}
          isArchived={user?.isArchived}
        />
      ))}
    </div>
  );
};

export default CardList;
