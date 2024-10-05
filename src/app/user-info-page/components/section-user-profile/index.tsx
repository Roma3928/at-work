import { FC, useEffect, useState } from 'react';
import ProfileData from '../profile-data';
import UserSettings from '../user-settings';
import styles from './SectionUserProfile.module.scss';
import ContainerLayout from '../../../../components/container-layout';
import { IUsersResponse } from '../../../../api/public/users/IUsersApi';
import { IUserProfileCategory } from '../../../../constants/userInfo';
import BackArrowIcon from '../../../../assets/icon/BackArrowIcon';
import BackArrowMobileIcon from '../../../../assets/icon/BackArrowMobileIcon';
import { useNavigate } from 'react-router-dom';

interface IProps {
  imageUrl: string;
  categories: IUserProfileCategory[];
  userData: IUsersResponse;
}

const SectionUserProfile: FC<IProps> = ({ imageUrl, categories, userData }) => {
  const navigate = useNavigate();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const handleGoBack = () => {
    if (canGoBack) {
      navigate(-1);
    }
  };

  return (
    <section>
      <ContainerLayout>
        {canGoBack && (
          <div className={styles['back-arrow']} onClick={handleGoBack}>
            <span className={styles['back-arrow-icon']}>
              <BackArrowIcon />
            </span>
            <span className={styles['back-arrow-icon-mobile']}>
              <BackArrowMobileIcon />
            </span>
            <p>Назад</p>
          </div>
        )}

        <div className={styles['user-profile-content']}>
          <ProfileData imageUrl={imageUrl} categories={categories} />
          <UserSettings
            name={userData.name}
            userName={userData.username}
            email={userData.email}
            city={userData.address.city}
            phone={userData.phone}
            companyName={userData.company.name}
          />
        </div>
      </ContainerLayout>
    </section>
  );
};

export default SectionUserProfile;
