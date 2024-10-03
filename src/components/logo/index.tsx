import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/icon/LogoIcon';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={styles.logo} to={'/'}>
      <LogoIcon />
      <p>
        at-<strong>work</strong>
      </p>
    </Link>
  );
};

export default Logo;
