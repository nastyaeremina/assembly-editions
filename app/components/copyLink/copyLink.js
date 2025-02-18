import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { usePathname } from 'next/navigation';
import { CURRENT_SITE_URL } from '../../constants/constant';
import CopyIcon from '../../../public/images/copy-icon.svg';

export default function CopyLink({ tagId, className = 'copy-icon', size = 24 }) {
  const currentPath = usePathname();
  let currentDomain = CURRENT_SITE_URL;
  if (typeof window !== 'undefined') currentDomain = window?.location?.host;

  return (
    <Link href={`#${tagId}`}>
      <Image
        src={CopyIcon}
        alt='copy-icon'
        width={size}
        height={size}
        className={className}
        onClick={() => {
          copy(`${currentDomain}/${currentPath}#${tagId}`);
        }}
      />
    </Link>
  );
}
