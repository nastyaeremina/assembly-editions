'use client';

import Image from 'next/image';
import { NavigationBlock, NavMenu, MobileListLi, MenuWrap, LeftImg, RightText, Last, LastDroplist } from './styles';
import { useMemo } from 'react';
import { FEATURE_THEME_LIST } from '../../constants/constant';

export default function FeatureSubMenu({ mobile, data }) {
  const renderFeatureView = useMemo(() => {
    return data?.map((item, index) => {
      const colorList = FEATURE_THEME_LIST[item?.theme].colorList;

      return (
        <MobileListLi key={`feature_navbar_index_${index}`}>
          <MenuWrap darkColor={colorList.dark} lightColor={colorList.light} href={`/features/${item?.slug}`}>
            <LeftImg>
              <Image src={item?.featureIcon?.url} alt='msg-icon' width={32} height={32} />
            </LeftImg>
            <RightText>
              <h5>{item?.name}</h5>
              <span>{item?.navbarDescription}</span>
            </RightText>
          </MenuWrap>
        </MobileListLi>
      );
    });
  }, [data]);
  return (
    <>
      <NavMenu mobile={mobile}>
        <NavigationBlock>
          {renderFeatureView}
          <LastDroplist Mobilemenu>
            <Last className='icon-link'>
              <a href={'/apps/directory'} className='learn-link mb0'>
                Go to App Store
                <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                  <path
                    d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__tipPath'
                  />
                  <path
                    d='M10.33 5.99951H1.5'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__linePath'
                  />
                </svg>
              </a>
            </Last>
          </LastDroplist>
        </NavigationBlock>
      </NavMenu>
    </>
  );
}
