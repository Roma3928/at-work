import { apiBase } from '../apiBase';
import { IUsersApi, IUsersData } from './IUsersApi';

export class UsersApi implements IUsersApi {
  async getUsers(): Promise<IUsersData[]> {
    const response = await apiBase.get<IUsersData[]>('/users');

    return response.data;
  }
}
