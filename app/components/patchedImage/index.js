'use client';
import Image from 'next/image';

/**
 * Global default quality for all next/image usage.
 * You can tweak other defaults here too (placeholder, sizes, etc.).
 */
export default function PatchedImage(props) {
  const { quality, ...rest } = props;
  return <Image quality={quality ?? 100} {...rest} />;
}
