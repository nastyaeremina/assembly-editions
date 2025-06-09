'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import { Container } from '../../styles/commonStyles';
import { convertSitemapDataToKeyValue, isEmpty } from '../../helpers/helpers';
import {
  FooterSection,
  FooterInnerBlock,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FooterMenuLeft,
  FooterMenuList,
  FooterMobile,
  FooterMenuMobile
} from './styles';
import SocialMediaListItems from './socialMediaListItems';

export default function Footer({ footerData: footerDataList }) {
  const renderDesktopFooterList = useMemo(() => {
    if (isEmpty(footerDataList)) return null;
    return footerDataList?.map((item, index) => {
      const newItem = convertSitemapDataToKeyValue(item);
      return (
        <>
          <FooterMenuLeft key={`footer_index_${index}`}>
            {newItem?.map((category, categoryIndex) => {
              return (
                <FooterMenu
                  key={`footer_${category?.title}_${categoryIndex}`}
                  className={categoryIndex !== 0 && 'padding'}>
                  <p>{category?.title}</p>
                  <FooterMenuList>
                    {category?.list?.map((subCategory, subCategoryIndex) => {
                      return (
                        <Link href={subCategory?.url} key={`subcategory_${category?.title}_${subCategoryIndex}`}>
                          {subCategory?.name}
                        </Link>
                      );
                    })}
                  </FooterMenuList>
                </FooterMenu>
              );
            })}
          </FooterMenuLeft>
        </>
      );
    });
  }, [footerDataList]);

  const renderMobileFooterList = useMemo(() => {
    if (isEmpty(footerDataList)) return null;
    const newList = [];
    footerDataList?.forEach((item) => {
      const newArray = convertSitemapDataToKeyValue(item);
      newArray?.forEach((element) => newList?.push(element));
    });
    const list1 = newList?.slice(0, newList?.length / 2);
    const list2 = newList?.slice(newList?.length / 2);
    return (
      <FooterMobile>
        <FooterMenuMobile key={`footer_first_row`}>
          {list1?.map((item, index) => {
            return (
              <FooterMenu key={`footer_${item?.title}_${index}`} className={index !== 0 && 'padding'}>
                <p>{item?.title}</p>
                <FooterMenuList>
                  {item?.list?.map((subCategory, subCategoryIndex) => {
                    return (
                      <Link href={subCategory?.url} key={`subcategory_${item?.title}_${subCategoryIndex}`}>
                        {subCategory?.name}
                      </Link>
                    );
                  })}
                </FooterMenuList>
              </FooterMenu>
            );
          })}
        </FooterMenuMobile>
        <FooterMenuMobile key={`footer_first_row`}>
          {list2?.map((item, index) => {
            return (
              <FooterMenu key={`footer_${item?.title}_${index}`} className={index !== 0 && 'padding'}>
                <p>{item?.title}</p>
                <FooterMenuList>
                  {item?.list?.map((subCategory, subCategoryIndex) => {
                    return (
                      <Link href={subCategory?.url} key={`subcategory_${item?.title}_${subCategoryIndex}`}>
                        {subCategory?.name}
                      </Link>
                    );
                  })}
                </FooterMenuList>
              </FooterMenu>
            );
          })}
        </FooterMenuMobile>
      </FooterMobile>
    );
  }, [footerDataList]);

  return (
    <>
      <FooterSection>
        <Container>
          <FooterInnerBlock>
            <FooterFirst>
              <Link href='/'>
                <Image src='/images/blacklogo.svg' alt='main-logo' height={31} width={143} />
              </Link>

              <p>The new standard for modern services business.</p>
              <SocialMediaListItems />
            </FooterFirst>
            <FooterRight>{renderDesktopFooterList}</FooterRight>
            {renderMobileFooterList}
          </FooterInnerBlock>
        </Container>
      </FooterSection>
    </>
  );
}
