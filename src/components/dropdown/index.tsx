import { FC } from 'react';
import styles from './Dropdown.module.scss';

export interface IOption {
  label: string;
  onClick: () => void;
}

interface IProps {
  options: IOption[];
}

const Dropdown: FC<IProps> = ({ options }) => {
  return (
    <ul className={styles.dropdown}>
      {options.map((option, index) => (
        <li key={index} className={styles['dropdown-item']} onClick={option.onClick}>
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
