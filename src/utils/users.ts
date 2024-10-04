import { IUsersData } from '../api/public/users/IUsersApi';

const transformUsersToUserCards = (users: IUsersData[]) => {
  return users.map((user) => ({
    id: user.id,
    userName: user.username,
    companyName: user.company.name,
    location: user.address.city,
  }));
};

export { transformUsersToUserCards };
