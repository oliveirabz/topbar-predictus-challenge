import Image from 'next/image';

import notification from '@/assets/svg/notification.svg';

export const Notification = () => {
  return <Image src={notification} alt="notification" unoptimized />;
};
