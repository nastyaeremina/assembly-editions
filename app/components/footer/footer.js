'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { Container } from '../../styles/commonStyles';
import { convertSitemapDataToKeyValue, isEmpty } from '../../helpers/helpers';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import {
  FooterSection,
  FooterInnerBlock,
  FooterFirst,
  FooterRight,
  FooterMenu,
  FooterMenuList,
  FooterMobile,
  FooterMenuMobile
} from './styles';
import SocialMediaListItems from './socialMediaListItems';

export default function Footer({ footerData: footerDataList, description, socialMediaLinks = [] }) {
  const renderDesktopFooterList = useMemo(() => {
    if (isEmpty(footerDataList)) return null;
    return footerDataList?.map((item, index) => {
      const newItem = convertSitemapDataToKeyValue(item);
      return (
        <>
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
              <Link href='/' aria-label='Assembly Home'>
                <SVGComponent name='assembly-big-logo' width='200' height='38' viewBox='0 0 200 38' />
              </Link>
              {!isEmpty(description) && <p>{description}</p>}
              <SocialMediaListItems socialMediaLinks={socialMediaLinks} />
            </FooterFirst>
            <FooterRight>{renderDesktopFooterList}</FooterRight>
            {renderMobileFooterList}
          </FooterInnerBlock>
        </Container>
      </FooterSection>
    </>
  );
}
