import { IUserData } from '../store/users/type';

const transformUsersToUserCards = (users: IUserData[]) => {
  return users.map((user) => ({
    id: user.id,
    userName: user.username,
    companyName: user.company.name,
    location: user.address.city,
    isArchived: user.isArchived,
  }));
};

export { transformUsersToUserCards };
