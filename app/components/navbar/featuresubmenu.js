'use client';

import Image from 'next/image';
import { NavigationBlock, NavMenu, MobileListLi, MenuWrap, LeftImg, RightText } from './styles';
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
        <NavigationBlock>{renderFeatureView}</NavigationBlock>
      </NavMenu>
    </>
  );
}
