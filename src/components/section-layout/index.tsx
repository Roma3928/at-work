import { FC, ReactNode } from 'react';
import styles from './SectionLayout.module.scss';
import ContainerLayout from '../container-layout';

interface IProps {
  title: string;
  children: ReactNode;
}

const SectionLayout: FC<IProps> = ({ title, children }) => {
  return (
    <section>
      <ContainerLayout>
        <h2 className={styles.title}>{title}</h2>
        <hr className={styles['decor-line']} />
        {children}
      </ContainerLayout>
    </section>
  );
};

export default SectionLayout;
