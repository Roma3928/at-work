import { apiBase } from '../apiBase';
import { IUsersApi, IUsersData } from './IUsersApi';

export class UsersApi implements IUsersApi {
  async getUsers(page: number): Promise<IUsersData[]> {
    const response = await apiBase.get<IUsersData[]>(`/users/${page}`);

    return response.data;
  }
}
