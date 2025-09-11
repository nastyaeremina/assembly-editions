'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Gradient } from '../../../public/js/Gradient.js';
import ButtonGroup from '../ButtonGroup/buttonGroup.js';
import { CtaInner, CtaAnimation, CtaWrap, LeftImg, MainCta, RightImg } from './styles';
import { Canvas } from './newCTAStyles.js';
import { SecondaryButtonVariant, EXTERNAL_LINK_KEYS } from '../../constants/constant.js';

export default function MainCTA({ moduleName, ctaContent, externalLinks = {} }) {
  const [isGradientReady, setIsGradientReady] = useState(false);

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
    setIsGradientReady(true);
  }, []);

  return (
    <CtaAnimation>
      <Canvas
        id='gradient-canvas'
        data-transition-in
        className={moduleName ? moduleName : 'entrance'}
        isGradientReady={isGradientReady}
      />
      <CtaWrap>
        <MainCta>
          <LeftImg>
            <Image src='/images/leftbrack.svg' width={54} height={287} alt='msg-icon' className='mobilehide' />
            <Image src='/images/mobileleft.svg' width={54} height={390} alt='msg-icon' className='mobileshow' />
          </LeftImg>
          <CtaInner>
            <h2>{ctaContent ? ctaContent : ''}</h2>
            <ButtonGroup
              primaryButtonLink={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}
              primaryButtonText={'Start Trial'}
              secondaryButtonLink={'/book-demo'}
              secondaryButtonText={'Book Demo'}
              secondaryButtonVariant={SecondaryButtonVariant.WHITE}
              isCamelCase={false}
              className={'button-group'}
            />
          </CtaInner>
          <RightImg>
            <Image src='/images/rightar.svg' width={54} height={287} alt='msg-icon' className='mobilehide' />
            <Image src='/images/mobileright.svg' width={54} height={390} alt='msg-icon' className='mobileshow' />
          </RightImg>
        </MainCta>
      </CtaWrap>
    </CtaAnimation>
  );
}
