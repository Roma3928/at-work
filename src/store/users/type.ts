import { IUsersResponse } from '../../api/public/users/IUsersApi';

export interface IUserData extends IUsersResponse {
  isArchived?: boolean;
  isHidden?: boolean;
}
export interface IUsersInitalState {
  users: IUserData[];
  isLoading: boolean;
  error: string;
}
