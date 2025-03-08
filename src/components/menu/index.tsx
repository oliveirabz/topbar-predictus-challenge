import React, { useState } from 'react';
import MenuIcon from './menu-icon';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import dossie from '@/assets/svg/dossie-shorter.svg';
import monitoring from '@/assets/svg/monitoring.svg';
import search from '@/assets/svg/search.svg';
import dolarCircle from '@/assets/svg/dolar-circle.svg';
import users from '@/assets/svg/users.svg';
import clock from '@/assets/svg/clock.svg';
import Image from 'next/image';

export const Menu = () => {
  const [isMenuDropdown, setIsMenuDropdown] = useState<boolean>(false);
  const toggleProfileDropdown = () => {
    setIsMenuDropdown(!isMenuDropdown);
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isMenuDropdown}
        toggle={toggleProfileDropdown}
        direction="down"
      >
        <DropdownToggle tag="div">
          <MenuIcon onClick={() => console.log('Abrir menu')} />
        </DropdownToggle>
        <DropdownMenu className="menu-dropdown mt-2">
          <DropdownItem className="menu-item">
            <Image src={dossie} alt="dossie-icon" />
            <span className="align-middle">Dossiê Jurídico</span>
          </DropdownItem>
          <DropdownItem className="menu-item">
            <Image src={monitoring} alt="monitoring-icon" />
            <span className="align-middle">Monitoramento de Processos</span>
          </DropdownItem>
          <DropdownItem className="menu-item">
            <Image src={search} alt="search-icon" />
            <span className="align-middle">Buscador de Processos</span>
          </DropdownItem>
          <div className="dropdown-divider"></div>
          <DropdownItem className="menu-item">
            <Image src={dolarCircle} alt="dolar-circle-icon" />
            <span className="align-middle">Gestão do Plano</span>
          </DropdownItem>
          <DropdownItem className="menu-item">
            <Image src={users} alt="users-icon" />
            <span className="align-middle">Gestão de Acessos</span>
          </DropdownItem>
          <DropdownItem className="menu-item">
            <Image src={clock} alt="clock-icon" />
            <span className="align-middle">Histórico de Buscas</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};
