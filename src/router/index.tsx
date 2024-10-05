import Home from '../app/home';
import UserInfoPage from '../app/user-info-page';
import MainLayout from '../components/main-layout';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'user-info/:id',
        element: <UserInfoPage />,
      },
      {
        path: '*',
        element: <h1>Нет страницы</h1>,
      },
    ],
  },
];
