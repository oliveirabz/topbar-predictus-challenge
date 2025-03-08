import Image from 'next/image';
import avatar from '@/assets/avatar.jpeg';
import chevronDown from '@/assets/svg/chevron-down.svg';
import logout from '@/assets/svg/logout.svg';
import user from '@/assets/svg/user.svg';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import React, { useState } from 'react';

export const UserDropdown = () => {
  const [isProfileDropdown, setIsProfileDropdown] = useState<boolean>(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  return (
    <React.Fragment>
      <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown}>
        <DropdownToggle
          tag="button"
          type="button"
          className="btn shadow-none border-0"
        >
          <div className="user-dropdown-wrapper">
            <Image src={avatar} alt="avatar" className="user-avatar" />

            <div className="profile-user">
              <span>Carla Souza</span>
              <Image src={chevronDown} alt="chevron-down" />
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className="user-dropdown-menu">
          <DropdownItem className="user-dropdown-item">
            <Image src={user} alt="user-icon" />
            <span className="align-middle">Minha Conta</span>
          </DropdownItem>
          <DropdownItem className="user-dropdown-item">
            <Image src={logout} alt="logout-icon" />
            <span className="align-middle">Sair</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};
