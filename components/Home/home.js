import React from 'react'
import internal from '../../public/images/internal.png';
import client from '../../public/images/client.png';
import hybridleft from '../../public/images/hybridleft.png';
import hybridright from '../../public/images/hybridright.png';
import HybridHeroSection from './herosection/hybrid';
import InternalHeroSection from './herosection/internal';
import ClientHeroSection from './herosection/client';

export default function HomeHeroSection() {
  return (
    <>
      <HybridHeroSection
        title={'Upgrade your service business & client experience'}
        body={
          'Message clients, send invoices, organize files, send eSig requests, share forms, and more. Give your clients everything they need in a branded client portal.'
        }
        image1={hybridleft}
        image2={hybridright}
        leftImageTitle={'Everything in one place for your team'}
        rightImageTitle={'A modern portal for your clients'}
      />

      <InternalHeroSection
        title={'One app to run your service business'}
        body={
          'Message clients, open invoices, organize files, send eSignature requests, share forms, create help desks, use custom apps, and more. '
        }
        image1={internal}
      />
      <ClientHeroSection
        title={'The client portal from the future'}
        body={
          'Give your clients a one-stop shop experience with a portal that streamlines messaging, payments, file-sharing, help centers, custom app access, and more.'
        }
        image1={client}
      />
    </>
  );
}
