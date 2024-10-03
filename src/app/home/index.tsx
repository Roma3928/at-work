import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';

const Home: FC = () => {
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers({ page: 1 });
  }, []);
  return <div>dw</div>;
};

export default Home;
