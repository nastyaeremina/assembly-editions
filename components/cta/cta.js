import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CtaButton, PrimaryButton } from '../../styles/commonStyles';
import { Gradient } from '../../public/js/Gradient.js';
import { isEmpty } from '../../helpers/helpers';
import { HEADER_LIST, NAVBAR_COLOR_LIST } from '../../constants/constant';
import { CtaInner, CtaBtn, CtaAnimation, CtaWrap, LeftImg, MainCta, RightImg } from './styles';
import Button from '../button/button';

export default function CTA({ moduleName, colorList }) {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);
  console.log('moduleName', moduleName);

  return (
    <>
      <CtaAnimation>
        <canvas id='gradient-canvas' data-transition-in className={moduleName ? moduleName : 'entrance'} />
        <CtaWrap>
          <MainCta>
            <LeftImg>
              <Image src='/images/leftbrack.svg' width={54} height={287} alt='msg-icon' className='mobilehide' />
              <Image src='/images/mobileleft.svg' width={54} height={390} alt='msg-icon' className='mobileshow' />
            </LeftImg>
            <CtaInner>
              <h2>Start, run, and grow your business</h2>
              <CtaBtn>
                {/* <PrimaryButton
                  textColor={
                    colorList?.lightColor ? colorList?.lightColor : NAVBAR_COLOR_LIST[HEADER_LIST.ENTERPRICE].lightColor
                  }
                  backgroundColor={
                    colorList?.primaryColor
                      ? colorList?.primaryColor
                      : NAVBAR_COLOR_LIST[HEADER_LIST.ENTERPRICE].primaryColor
                  }>
                  <Link className='paddingbtn' href='https://dashboard.copilot.com/onboarding'>
                    Start Trial
                  </Link>
                </PrimaryButton> */}
                <Button
                  className='paddingbtn'
                  bgColor={
                    colorList?.primaryColor
                      ? colorList?.primaryColor
                      : NAVBAR_COLOR_LIST[HEADER_LIST.ENTERPRICE].primaryColor
                  }
                  fontColor={
                    moduleName === 'form'
                      ? colorList?.buttontextColor
                      : colorList?.lightColor
                      ? colorList?.lightColor
                      : NAVBAR_COLOR_LIST[HEADER_LIST.ENTERPRICE].lightColor
                  }
                  borderColor={'transparent'}
                  text={'Start Trial'}
                  href={'https://dashboard.copilot.com/onboarding'}
                  hoverColor={'white'}
                />
                <Button
                  fontColor={
                    colorList?.lightColor ? colorList?.lightColor : NAVBAR_COLOR_LIST[HEADER_LIST.ENTERPRICE].lightColor
                  }
                  borderColor={
                    colorList?.lightColor ? colorList?.lightColor : NAVBAR_COLOR_LIST[HEADER_LIST.ENTERPRICE].lightColor
                  }
                  bgColor={'transparent'}
                  text={'Book Demo'}
                  href={'/book-demo'}
                  hoverColor={'white'}
                />
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
