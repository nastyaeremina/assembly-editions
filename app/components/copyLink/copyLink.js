import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { usePathname } from 'next/navigation';
import { CURRENT_SITE_URL } from '../../constants/constant';
import CopyIcon from '../../../public/images/copy-icon.svg';
import ToastMessage from '../ToastMessage/toastMessage';

export default function CopyLink({ tagId, className = 'copy-icon', size = 24 }) {
  const [showToast, setShowToast] = useState(false);

  const currentPath = usePathname();
  let currentDomain = CURRENT_SITE_URL;
  if (typeof window !== 'undefined') currentDomain = window?.location?.host;

  // copy link function
  const handleCopyLink = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const urlToCopy = `${currentDomain}${currentPath}#${tagId}`;
      copy(urlToCopy);
      setShowToast(true);
    },
    [currentDomain, currentPath, tagId]
  );

  const handleToastClose = useCallback(() => {
    setShowToast(false);
  }, []);

  return (
    <>
      <Link href={`#${tagId}`} onClick={handleCopyLink}>
        <Image src={CopyIcon} alt='copy-icon' width={size} height={size} className={className} />
      </Link>
      {showToast && <ToastMessage message='Link copied to your clipboard.' onClose={handleToastClose} />}
    </>
  );
}
