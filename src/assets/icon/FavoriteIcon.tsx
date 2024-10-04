import { FC } from 'react';

interface IProps {
  isActive?: boolean;
  onClick?: () => void;
}

const FavoriteIcon: FC<IProps> = ({ isActive, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: 'pointer' }}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5432 7.85453L12 8.39097L12.4568 7.85453C13.0442 7.16469 13.948 6.72793 14.88 6.72793C16.5198 6.72793 17.8 8.0081 17.8 9.64793C17.8 10.6604 17.35 11.626 16.4355 12.7441C15.5142 13.8705 14.185 15.0773 12.5249 16.5827L12.5241 16.5834L11.9984 17.0619L11.4755 16.5895C11.4753 16.5893 11.475 16.5891 11.4748 16.5889C9.81493 15.0805 8.48592 13.8723 7.56453 12.745C6.64992 11.626 6.19998 10.6604 6.19998 9.64793C6.19998 8.0081 7.48015 6.72793 9.11998 6.72793C10.0519 6.72793 10.9557 7.16469 11.5432 7.85453Z"
        stroke="#595959"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default FavoriteIcon;
