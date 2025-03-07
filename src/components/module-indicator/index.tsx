import React from 'react';
import dossie from '@/assets/svg/dossie.svg';
import Image from 'next/image';

export const ModuleIndicator = () => {
  return (
    <div className="module-indicator">
      <Image src={dossie} alt="dossie-icon" className="dossie-img" />
      <span>Dossiê Jurídico</span>
    </div>
  );
};
