import React from 'react';
import Image from 'next/image';

import dossie from '@/assets/svg/dossie.svg';

export const ModuleIndicator = () => {
  return (
    <div className="module-indicator">
      <Image
        src={dossie}
        alt="dossie-icon"
        className="module-indicator-icon"
        unoptimized
      />
      <span>Dossiê Jurídico</span>
    </div>
  );
};
