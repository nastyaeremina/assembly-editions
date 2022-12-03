import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import { CtaButton, PrimaryButton } from '../../styles/commonStyles';
import { Gradient } from '../../public/js/Gradient.js';
import { CtaInner, CtaBtn, CtaAnimation, CtaWrap, LeftImg, MainCta, RightImg } from './styles';

export default function CTA() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <>
      <CtaAnimation>
        <canvas id='gradient-canvas' data-transition-in />
        <CtaWrap>
          <MainCta>
            <LeftImg>
              <Image src='/images/leftbrack.svg' width={54} height={287} alt='msg-icon' className='mobilehide' />
              <Image src='/images/mobileleft.svg' width={54} height={390} alt='msg-icon' className='mobileshow' />
            </LeftImg>
            <CtaInner>
              <h2>Start, run, and grow your business</h2>
              <CtaBtn>
                <PrimaryButton>
                  <Link className='paddingbtn' href='https://dashboard.copilot.com/onboarding'>
                    Start Trial
                  </Link>
                </PrimaryButton>
                <CtaButton>
                  <Link href='/book-demo'>Book Demo</Link>
                </CtaButton>
              </CtaBtn>
            </CtaInner>
            <RightImg>
              <Image src='/images/rightar.svg' width={54} height={287} alt='msg-icon' className='mobilehide' />
              <Image src='/images/mobileright.svg' width={54} height={390} alt='msg-icon' className='mobileshow' />
            </RightImg>
          </MainCta>
        </CtaWrap>
      </CtaAnimation>
    </>
  );
}
