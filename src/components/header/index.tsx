import Image from 'next/image';
import MenuIcon from '../menu/menu-icon';
import { ModuleIndicator } from '../module-indicator';

import logo from '@/assets/svg/logo-predictus.svg';
import { UserDropdown } from '../user-dropdown';
import { Notification } from '../notification';

export const Header = () => {
  return (
    <header className="container">
      <div className="content">
        <div className="left-content">
          <MenuIcon onClick={() => console.log('Abrir menu')} />
          <ModuleIndicator />
        </div>

        <Image src={logo} alt="logo" />

        <div className="right-content">
          <Notification />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};
