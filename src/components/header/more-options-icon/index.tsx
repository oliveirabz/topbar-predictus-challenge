import Image from 'next/image';

import moreIcon from '@/assets/svg/more.svg';

interface IMoreOptionsIconProps {
  onClick: () => void;
}

export const MoreOptionsIcon = ({ onClick }: IMoreOptionsIconProps) => {
  return (
    <Image
      alt="More"
      src={moreIcon}
      onClick={onClick}
      className="more-options-icon"
      unoptimized
    />
  );
};
