import Image from 'next/image';
import React from 'react';
import { Last, LastDroplist } from '../../styles/casestudiestyles';
import Link from 'next/link';

export default function AppCard({ name, url }) {
  return (
    <LastDroplist>
      <Link href={`${url}`}>{name}</Link>
    </LastDroplist>
  );
}
