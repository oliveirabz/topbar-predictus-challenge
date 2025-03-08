import moreIcon from '@/assets/svg/more.svg';
import Image from 'next/image';

interface IMoreOptionsIconProps {
  onClick: () => void;
}

export const MoreOptionsIcon = ({ onClick }: IMoreOptionsIconProps) => {
  return (
    <Image
      src={moreIcon}
      alt="More"
      className="more-options-icon"
      onClick={onClick}
    />
  );
};
