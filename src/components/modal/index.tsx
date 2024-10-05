import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss'; // Здесь ваши стили для модального окна
import CrossIcon from '../../assets/icon/CrossIcon';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CrossIcon />
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
