export interface IUserProfileCategory {
  name: string;
  onClick: () => void;
  active: boolean;
}

const categoriesProfile: IUserProfileCategory[] = [
  {
    name: 'Данные профиля',
    onClick: () => console.log('Данные профиля'),
    active: true,
  },
  {
    name: 'Рабочее пространство',
    onClick: () => console.log('Рабочее пространство'),
    active: false,
  },
  {
    name: 'Приватность',
    onClick: () => console.log('Приватность'),
    active: false,
  },
  {
    name: 'Безопасность',
    onClick: () => console.log('Безопасность'),
    active: false,
  },
];

export { categoriesProfile };
