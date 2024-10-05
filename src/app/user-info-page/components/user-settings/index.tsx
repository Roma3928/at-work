import { FC, FormEvent, useRef, useState } from 'react';
import styles from './UserSettings.module.scss';
import Button from '../../../../components/ui/button';
import Input from '../../../../components/ui/input';
import { useActions } from '../../../../hooks/useActions';
import Modal from '../../../../components/modal';
import CheckedIcon from '../../../../assets/icon/CheckedIcon';

interface IProps {
  name?: string;
  userName?: string;
  email?: string;
  city?: string;
  phone?: string;
  companyName?: string;
}

const UserSettings: FC<IProps> = ({ name, userName, email, city, phone, companyName }) => {
  const { updateUserProfile } = useActions();
  const [nameValue, setNameValue] = useState(name || '');
  const [userNameValue, setUserNameValue] = useState(userName || '');
  const [emailValue, setEmailValue] = useState(email || '');
  const [cityValue, setCityValue] = useState(city || '');
  const [phoneValue, setPhoneValue] = useState(phone || '');
  const [companyNameValue, setCompanyNameValue] = useState(companyName || '');
  const [errors, setErrors] = useState({
    name: '',
    userName: '',
    email: '',
    city: '',
    phone: '',
    companyName: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModalTimer = useRef<NodeJS.Timeout | null>(null);

  const validateFields = () => {
    const newErrors = {
      name: nameValue ? '' : 'Имя обязательно для заполнения',
      userName: userNameValue ? '' : 'Поле обязательно для заполнения',
      email: emailValue ? '' : 'Поле обязательно для заполнения',
      city: cityValue ? '' : 'Поле обязательно для заполнения',
      phone: phoneValue ? '' : 'Поле обязательно для заполнения',
      companyName: companyNameValue ? '' : 'Поле обязательно для заполнения',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const clearError = (fieldName: keyof typeof errors) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateFields()) {
      updateUserProfile({
        name: nameValue,
        username: userNameValue,
        email: emailValue,
        address: { city: cityValue },
        phone: phoneValue,
        company: { name: companyNameValue },
      });

      setIsModalOpen(true);

      if (closeModalTimer.current) {
        clearTimeout(closeModalTimer.current);
      }

      closeModalTimer.current = setTimeout(() => {
        setIsModalOpen(false);
      }, 4000);
    }
  };

  const handleCloseModal = () => {
    if (closeModalTimer.current) {
      clearTimeout(closeModalTimer.current);
    }

    setIsModalOpen(false);
  };

  return (
    <div className={styles['user-settings']}>
      <h2 className={styles['user-settings-title']}>Данные профиля</h2>
      <hr className={styles['decor-line']} />
      <form className={styles['user-settings-form']} onSubmit={handleSubmit}>
        <div className={styles['user-settings-content']}>
          <Input
            label="Имя"
            placeholder="Имя"
            type="text"
            value={nameValue}
            setValue={setNameValue}
            error={errors.name}
            clearError={() => clearError('name')}
          />
          <Input
            label="Никнейм"
            placeholder="Никнейм"
            type="text"
            value={userNameValue}
            setValue={setUserNameValue}
            error={errors.userName}
            clearError={() => clearError('userName')}
          />
          <Input
            label="Почта"
            placeholder="Почта"
            type="email"
            value={emailValue}
            setValue={setEmailValue}
            error={errors.email}
            clearError={() => clearError('email')}
          />
          <Input
            label="Город"
            placeholder="Город"
            type="text"
            value={cityValue}
            setValue={setCityValue}
            error={errors.city}
            clearError={() => clearError('city')}
          />
          <Input
            label="Телефон"
            placeholder="Телефон"
            type="tel"
            value={phoneValue}
            setValue={setPhoneValue}
            error={errors.phone}
            clearError={() => clearError('phone')}
          />
          <Input
            label="Название компании"
            placeholder="Название компании"
            type="text"
            value={companyNameValue}
            setValue={setCompanyNameValue}
            error={errors.companyName}
            clearError={() => clearError('companyName')}
          />
        </div>
        <Button>Сохранить</Button>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className={styles['user-settings-modal-content']}>
          <CheckedIcon />
          <h2>Изменения сохранены!</h2>
        </div>
      </Modal>
    </div>
  );
};

export default UserSettings;
