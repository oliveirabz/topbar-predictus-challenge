import Image from 'next/image';
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

import { MenuIcon } from './menu-icon';

import clock from '@/assets/svg/clock.svg';
import users from '@/assets/svg/users.svg';
import search from '@/assets/svg/search.svg';
import monitoring from '@/assets/svg/monitoring.svg';
import dossie from '@/assets/svg/dossie-shorter.svg';
import dolarCircle from '@/assets/svg/dolar-circle.svg';

export const Menu = () => {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState<boolean>(false);
  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isMenuDropdownOpen}
        toggle={toggleMenuDropdown}
        direction="down"
      >
        <DropdownToggle tag="div">
          <MenuIcon />
        </DropdownToggle>

        <DropdownMenu className="menu-dropdown mt-2">
          <DropdownItem className="menu-item">
            <Image src={dossie} alt="dossie-icon" unoptimized />
            <span>Dossiê Jurídico</span>
          </DropdownItem>

          <DropdownItem className="menu-item">
            <Image src={monitoring} alt="monitoring-icon" unoptimized />
            <span>Monitoramento de Processos</span>
          </DropdownItem>

          <DropdownItem className="menu-item">
            <Image src={search} alt="search-icon" unoptimized />
            <span>Buscador de Processos</span>
          </DropdownItem>

          <div className="dropdown-divider"></div>

          <DropdownItem className="menu-item divider-item">
            <Image src={dolarCircle} alt="dolar-circle-icon" unoptimized />
            <span>Gestão do Plano</span>
          </DropdownItem>

          <DropdownItem className="menu-item divider-item">
            <Image src={users} alt="users-icon" unoptimized />
            <span>Gestão de Acessos</span>
          </DropdownItem>

          <DropdownItem className="menu-item divider-item">
            <Image src={clock} alt="clock-icon" unoptimized />
            <span>Histórico de Buscas</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};
