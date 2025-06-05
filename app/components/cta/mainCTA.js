'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Gradient } from '../../../public/js/Gradient.js';
import { COPILOT_ONBOARDING_LINK } from '../../constants/externalLinks.js';
import ButtonGroup from '../ButtonGroup/buttonGroup.js';
import { CtaInner, CtaAnimation, CtaWrap, LeftImg, MainCta, RightImg } from './styles';

export default function MainCTA({ moduleName, colorList, ctaContent }) {
  useEffect(() => {
    // Initialize background animation for the CTA section
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <>
      {
        <CtaAnimation>
          <canvas id='gradient-canvas' data-transition-in className={moduleName ? moduleName : 'entrance'} />
          <CtaWrap>
            <MainCta>
              <LeftImg>
                <Image src='/images/leftbrack.svg' width={54} height={287} alt='msg-icon' className='mobilehide' />
                <Image src='/images/mobileleft.svg' width={54} height={390} alt='msg-icon' className='mobileshow' />
              </LeftImg>
              <CtaInner>
                <h2>{ctaContent ? ctaContent : ''}</h2>
                <ButtonGroup
                  primaryButtonLink={COPILOT_ONBOARDING_LINK}
                  primaryButtonText={'Start Trial'}
                  secondaryButtonLink={'/book-demo'}
                  secondaryButtonText={'Book Demo'}
                  secondaryButtonVariant='white'
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
      }
    </>
  );
}
