import Image from 'next/image';
import { LuUser2 } from 'react-icons/lu';

import { fetchProfileImage } from '@/utils/actions';

async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage) {
    return (
      <Image
        alt="profile image"
        src={profileImage}
        width={100}
        height={100}
        className="size-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser2 className="size-6 rounded-full bg-primary text-white" />;
}

export default UserIcon;
