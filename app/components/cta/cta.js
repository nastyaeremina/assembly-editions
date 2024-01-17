'use client';

import { use, useEffect } from 'react';
import Image from 'next/image';
import { Gradient } from '../../../public/js/Gradient.js';
import { CTA_CONTENT_ID, MODULE_COLOR_LIST } from '../../constants/constant';
import Button from '../button/button';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks.js';
import { getSitemap } from '../../lib/contentful-sitemap.js';
import { CtaInner, CtaBtn, CtaAnimation, CtaWrap, LeftImg, MainCta, RightImg } from './styles';

async function getContent() {
  return await getSitemap(CTA_CONTENT_ID);
}
const getContentPromis = getContent();

export default function CTA({ moduleName, colorList }) {
  const { content: ctaContent } = use(getContentPromis) ?? { content: '' };
  useEffect(() => {
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
                <CtaBtn>
                  <Button
                    className='paddingbtn'
                    bgColor={
                      colorList?.primaryColor ? colorList?.primaryColor : MODULE_COLOR_LIST.Enterprice.primaryColor
                    }
                    fontColor={
                      moduleName === 'form'
                        ? colorList?.buttontextColor
                        : colorList?.lightColor
                        ? colorList?.lightColor
                        : MODULE_COLOR_LIST.Enterprice.lightColor
                    }
                    borderColor={'transparent'}
                    text={'Start Trial'}
                    href={COPILOT_ONBORADING_LINK}
                    hoverColor={'white'}
                  />
                  <Button
                    fontColor={colorList?.lightColor ? colorList?.lightColor : MODULE_COLOR_LIST.Enterprice.lightColor}
                    borderColor={
                      colorList?.lightColor ? colorList?.lightColor : MODULE_COLOR_LIST.Enterprice.lightColor
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
      }
      {/* {renderCTAView} */}
    </>
  );
}
