import { FC, useEffect, useMemo } from 'react';
import { useActions } from '../../hooks/useActions';
import SectionLayout from '../../components/section-layout';
import UserList from './components/user-list';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUsersData } from '../../api/public/users/IUsersApi';
import Loader from '../../components/ui/loader';
import { transformUsersToUserCards } from '../../utils/users';

const Home: FC = () => {
  const { fetchUsers } = useActions();
  const { users, error, isLoading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const userCards = useMemo(() => transformUsersToUserCards(users), [users]);

  return (
    <>
      <SectionLayout title="Активные">
        <div>
          {isLoading && <Loader />}
          {!error ? <UserList users={userCards} /> : error}
        </div>
      </SectionLayout>

      <SectionLayout title="Архив">
        <UserList users={userCards} />
      </SectionLayout>
    </>
  );
};

export default Home;
