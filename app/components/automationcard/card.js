import React from 'react';
import Image from 'next/image';
import { Card, CardTop, Description, Head } from './styles';

export default function AutomationCard({ title, body, imageurl, isTwoCard, isStandardPage }) {
  return (
    <Card isTwoCard={isTwoCard}>
      <CardTop isStandardPage={isStandardPage}>
        <Head>{title}</Head>
        <Description>{body}</Description>
      </CardTop>
      <Image src={imageurl} alt='automationcard' width={1222} height={502} className='card-img' />
    </Card>
  );
}
