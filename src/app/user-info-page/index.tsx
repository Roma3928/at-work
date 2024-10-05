import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserAvatar from '../../assets/img/user-photo.png';
import Loader from '../../components/ui/loader';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SectionUserProfile from './components/section-user-profile';
import { categoriesProfile } from '../../constants/userInfo';

const UserInfoPage: FC = () => {
  const { fetchUserById } = useActions();
  const { user, isLoading } = useTypedSelector((state) => state.userInfo);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchUserById({ id });
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && user ? (
        <SectionUserProfile imageUrl={UserAvatar} categories={categoriesProfile} userData={user} />
      ) : null}
    </>
  );
};

export default UserInfoPage;
