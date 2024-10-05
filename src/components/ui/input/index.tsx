import { FC, ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import CrossIcon from '../../../assets/icon/CrossIcon';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  clearError: () => void;
}

const Input: FC<IProps> = ({ label, placeholder, type, value, setValue, error, clearError }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value) {
      clearError();
    }
  };

  const clearInput = () => {
    setValue('');
    clearError();
  };

  return (
    <div className={styles['input-container']}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles['input-wrapper']}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`${styles.input} ${error ? styles['input-error'] : ''}`}
        />
        {value && (
          <button className={styles['clear-button']} onClick={clearInput}>
            <CrossIcon />
          </button>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;
