import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Menu } from './menu';
import { Notification } from './notification';
import { UserDropdown } from './user-dropdown';
import { ModuleIndicator } from './module-indicator';
import { MoreOptionsIcon } from './more-options-icon';

import logo from '@/assets/svg/logo-predictus.svg';

export const Header = () => {
  const [isExpandTopbarOpen, setIsExpandTopbarOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsExpandTopbarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left-content">
          <Menu />
          <div className="desktop-only">
            <ModuleIndicator />
          </div>
        </div>

        <Image src={logo} alt="logo" />

        <div className="header-right-content">
          <div className="desktop-only">
            <Notification />
          </div>
          <div className="desktop-only">
            <UserDropdown />
          </div>
          <div className="mobile-only">
            <MoreOptionsIcon
              onClick={() => setIsExpandTopbarOpen(!isExpandTopbarOpen)}
            />
          </div>
        </div>
      </div>

      {isExpandTopbarOpen && (
        <div className="mobile-dropdown">
          <ModuleIndicator />
          <Notification />
          <UserDropdown />
        </div>
      )}
    </header>
  );
};
