import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisabled?: boolean;
}

const Button: FC<IProps> = ({ isDisabled = false, children, className, ...rest }) => {
  const buttonClasses = `
    ${styles.button} 
    ${className || ''}
  `.trim();

  return (
    <button className={buttonClasses} disabled={isDisabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
