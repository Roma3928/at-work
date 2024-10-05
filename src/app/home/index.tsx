import { FC, useEffect, useMemo } from 'react';
import { useActions } from '../../hooks/useActions';
import SectionLayout from '../../components/section-layout';
import UserList from './components/user-list';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../../components/ui/loader';
import { transformUsersToUserCards } from '../../utils/users';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const { fetchUsers, archiveUser, activateUser, hideUser } = useActions();
  const { users, error, isLoading } = useTypedSelector((state) => state.users);
  const navigate = useNavigate();

  const visibleUsers = useMemo(() => users.filter((user) => !user.isHidden), [users]);
  const activeUsers = useMemo(() => visibleUsers.filter((user) => !user.isArchived), [users]);
  const archivedUsers = useMemo(() => visibleUsers.filter((user) => user.isArchived), [users]);

  const userActiveCards = useMemo(() => transformUsersToUserCards(activeUsers), [activeUsers]);
  const userArchivedCards = useMemo(
    () => transformUsersToUserCards(archivedUsers),
    [archivedUsers],
  );

  const activeDropdownOptions = (userId: number) => [
    { label: 'Редактировать', onClick: () => navigate(`/user-info/${userId}`) },
    {
      label: 'Архивировать',
      onClick: () => archiveUser(userId),
    },
    { label: 'Скрыть', onClick: () => hideUser(userId) },
  ];

  const archivedDropdownOptions = (userId: number) => [
    { label: 'Активировать', onClick: () => activateUser(userId) },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <SectionLayout title="Активные">
        {isLoading && <Loader />}
        {!isLoading && !error ? (
          <UserList users={userActiveCards} dropdownOptions={activeDropdownOptions} />
        ) : (
          error
        )}
      </SectionLayout>

      {userArchivedCards.length ? (
        <SectionLayout title="Архив">
          <UserList users={userArchivedCards} dropdownOptions={archivedDropdownOptions} />
        </SectionLayout>
      ) : null}
    </>
  );
};

export default Home;
