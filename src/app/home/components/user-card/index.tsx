import { FC, useEffect, useRef, useState } from 'react';
import styles from './UserCard.module.scss';
import { IUserCard } from '../user-list';
import MoreOptionsIcon from '../../../../assets/icon/more-options-icon/MoreOptionsIcon';
import Dropdown, { IOption } from '../../../../components/dropdown';
import classNames from 'classnames';

interface IProps extends Omit<IUserCard, 'id'> {
  dropdownOptions: IOption[];
}

const UserCard: FC<IProps> = ({
  userName,
  companyName,
  location,
  avatarUrl,
  dropdownOptions,
  isArchived,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (optionAction: () => void) => {
    optionAction();
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className={styles['user-card']}>
      <img
        className={classNames(styles.avatar, {
          [styles['avatar-archived']]: isArchived,
        })}
        src={avatarUrl}
        alt={`${userName}'s аватар`}
      />
      <div className={styles['user-content']}>
        <div className={styles['user-info']}>
          <div>
            <h3
              className={classNames(styles['user-name'], {
                [styles['user-name-archived']]: isArchived,
              })}>
              {userName}
            </h3>
            <p
              className={classNames(styles['company-name'], {
                [styles['company-name-archived']]: isArchived,
              })}>
              {companyName}
            </p>
          </div>
          <p
            className={classNames(styles.location, {
              [styles['location-archived']]: isArchived,
            })}>
            {location}
          </p>
        </div>
        <div ref={dropdownRef}>
          <MoreOptionsIcon onClick={toggleDropdown} />
          {isDropdownOpen && (
            <Dropdown
              options={dropdownOptions.map((option) => ({
                ...option,
                onClick: () => handleOptionClick(option.onClick),
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
