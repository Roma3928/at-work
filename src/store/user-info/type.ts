import { IUsersResponse } from '../../api/public/users/IUsersApi';

export interface IUserInfoInitalState {
  user: IUsersResponse | null;
  isLoading: boolean;
  error: string;
}
