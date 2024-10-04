import { IUsersData } from '../../api/public/users/IUsersApi';

export interface IUsersInitalState {
  users: IUsersData[];
  isLoading: boolean;
  error: string;
}
