import Image from 'next/image';
import avatar from '@/assets/avatar.jpeg';
import chevronDown from '@/assets/svg/chevron-down.svg';

export const UserDropdown = () => {
  return (
    <div className="user-dropdown-wrapper">
      <Image src={avatar} alt="avatar" className="user-avatar" />

      <div className="profile-user">
        <span>Carla Souza</span>
        <Image src={chevronDown} alt="chevron-down" />
      </div>
    </div>
  );
};
