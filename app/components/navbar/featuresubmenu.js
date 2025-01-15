'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { NavigationBlock, NavMenu, MobileListLi, MenuWrap, LeftImg, RightText } from './styles';

export default function FeatureSubMenu({ mobile, data, footerData, isWithOutHeading }) {
  const renderFeatureView = useMemo(() => {
    return (
      <>
        {data?.map((item, index) => {
          return (
            <>
              {item.isFooter ? (
                <MobileListLi>
                  <MenuWrap href={item.Link} className='footer-item-main-div'>
                    <RightText className='footer-item'>
                      <h5>{item?.Title}</h5>
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
                    </RightText>
                  </MenuWrap>
                </MobileListLi>
              ) : (
                <MobileListLi key={`feature_navbar_index_${index}`}>
                  <MenuWrap href={item.Link}>
                    {item.Icon && (
                      <LeftImg>
                        <Image
                          src={item?.Icon}
                          alt='msg-icon'
                          width={!isEmpty(item?.Description) ? 32 : 20}
                          height={!isEmpty(item?.Description) ? 32 : 20}
                        />
                      </LeftImg>
                    )}
                    <RightText>
                      <h5>{item?.Title}</h5>
                      <span>{item?.Description}</span>
                    </RightText>
                  </MenuWrap>
                </MobileListLi>
              )}
            </>
          );
        })}
        {!isEmpty(footerData) && (
          <MobileListLi>
            <MenuWrap href={footerData.Link} className='footer-item-main-div'>
              <RightText className='footer-item'>
                <h5>{footerData?.Title}</h5>
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
              </RightText>
            </MenuWrap>
          </MobileListLi>
        )}
      </>
    );
  }, [data, footerData]);
  return (
    <>
      <NavMenu mobile={mobile}>
        <NavigationBlock isWithOutHeading={isWithOutHeading}>{renderFeatureView}</NavigationBlock>
      </NavMenu>
    </>
  );
}
