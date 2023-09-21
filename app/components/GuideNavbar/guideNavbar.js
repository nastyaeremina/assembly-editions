'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import CopilotLogos from '../../../public/images/blacklogo.svg';
import { addGuideSiderItem, deleteGuideSiderItem } from '../../actions/guideActions';
import { FirstLine, MobileMenu, ThirdLine } from '../navbar/styles';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import {
  CopilotGuideLogo,
  GuideMobileNavbar,
  GuideSectionItem,
  Icon,
  IconText,
  Maindiv,
  MobileNavMenu,
  NavBg,
  NavHead,
  NavItem,
  NavTitle,
  NavbarHeader,
  NavmenuSection,
  OptionIcon,
  OptionName,
  SideNavbar,
  SideNavbarHead
} from './styles';

export default function GuideNavbar({ data }) {
  const guideSelector = useSelector((state) => state?.guide);
  let isScrollPage = false;
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const [isClick, setIsClick] = useState(false);
  const { guideSectionData } = guideSelector;
  let selectedArticleId, section;
  const slug = useSelectedLayoutSegment();
  const dispatch = useDispatch();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const isSectionOpen = useCallback(
    (id) => {
      const findIndex = guideSectionData?.findIndex((item) => item?.id === id);
      if (findIndex !== -1 || (id === section && !isClick)) return true;
      return false;
    },
    [guideSectionData, isClick, section]
  );
  const onOpenSection = useCallback(
    (id) => {
      const findIndex = guideSectionData?.findIndex((item) => item?.id === id);
      if (id === section && !isClick) {
        setIsClick(true);
      }
      if (findIndex === -1) {
        dispatch(addGuideSiderItem({ id }));
      } else {
        dispatch(deleteGuideSiderItem(id));
      }
    },
    [dispatch, guideSectionData, isClick, section]
  );

  if (isEmpty(slug)) {
    const articleId = data?.[0]?.articlesCollection?.items?.[0]?.slug;
    selectedArticleId = articleId;
    section = data?.[0]?.sys?.id;
  } else {
    selectedArticleId = slug;
    data?.forEach((element) => {
      const articledata = removeEmptyElement(element?.articlesCollection?.items)?.find((item) => item.slug === slug);
      if (!isEmpty(articledata)) {
        const sectionId = element?.sys?.id;
        section = sectionId;
        return;
      }
    });
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    window.addEventListener('scroll', handleScroll);
    dispatch(addGuideSiderItem({ id: section }));
  }, [dispatch, section]);

  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleMobileMenu = useCallback(() => {
    const body = document.querySelector('body');
    if (isOpenMobileMenu) {
      body.style.overflow = 'auto';
      setIsOpenMobileMenu(false);
    } else {
      body.style.overflow = 'hidden';
      setIsOpenMobileMenu(true);
    }
  }, [isOpenMobileMenu]);

  const renderArticleItemView = useCallback(
    (item, index) => {
      return item?.articlesCollection?.items?.map((childItem, childIndex) => {
        if (isEmpty(childItem?.name)) return null;
        return (
          <NavItem
            key={`guidearticle_index${childItem?.sys?.id}`}
            onClick={() => {
              // router.push(`/guide/${childItem?.slug}`);
              setIsOpenMobileMenu(false);
            }}>
            <Link href={`/guide/${childItem?.slug}`} className='guidelink' shallow={true}>
              {!isEmpty(childItem?.iconCode) && (
                <Icon className='svgicon' isSelected={selectedArticleId === childItem?.slug}>
                  <div dangerouslySetInnerHTML={{ __html: childItem?.iconCode }} />
                  {/* <Image src={childItem?.icon?.url} alt='item-icon' width={16} height={16} className='svglogo' /> */}
                </Icon>
              )}
              <IconText isSelected={selectedArticleId === childItem?.slug} className='secondhead'>
                {childItem?.name}
              </IconText>
            </Link>
          </NavItem>
        );
      });
    },
    [selectedArticleId]
  );

  const navbarRenderView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data.map((item, index) => {
      if (isEmpty(item?.name)) return null;
      const hegith = item?.articlesCollection?.total * 34 + 18;
      let isOpen = isSectionOpen(item?.sys?.id);
      return (
        <>
          <GuideSectionItem totalHeight={hegith}>
            <ul className={isOpen ? 'drop-down' : 'drop-down closed'}>
              <li>
                <NavHead
                  onClick={() => {
                    onOpenSection(item?.sys?.id);
                    isOpen = isSectionOpen(item?.sys?.id);
                  }}
                  key={index}
                  className='nav-button'>
                  <OptionName isSelected={isOpen} className='head'>
                    {item?.name}
                  </OptionName>
                  <OptionIcon className={isOpen && 'close'}>
                    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g id='Icon - home-outline'>
                        <path
                          id='Vector'
                          d='M3.80078 1.37109L8.42927 5.99958L3.80078 10.6281'
                          stroke='#757575'
                          stroke-width='1.25'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </OptionIcon>
                </NavHead>
              </li>
              {isOpen && <>{renderArticleItemView(item, index)}</>}
            </ul>
          </GuideSectionItem>
        </>
      );
    });
  }, [data, isSectionOpen, onOpenSection, renderArticleItemView]);

  return (
    <>
      <SideNavbar>
        <Maindiv>
          <SideNavbarHead>
            <Link href='/' aria-label={'Navigate to Home'}>
              <CopilotGuideLogo alt='copilot logo' loading='lazy' width='142' height='30' src={CopilotLogos.src} />
            </Link>
            <NavTitle>Guide</NavTitle>
          </SideNavbarHead>
          <NavmenuSection>
            {/* <NavBg /> */}
            {navbarRenderView}
          </NavmenuSection>
        </Maindiv>
      </SideNavbar>
      <GuideMobileNavbar className={isScrollPage ? 'scroll' : ''}>
        <NavbarHeader>
          <SideNavbarHead>
            <Link href='/' aria-label={'Navigate to Home'}>
              <CopilotGuideLogo alt='copilot logo' loading='lazy' width='142' height='30' src={CopilotLogos.src} />
            </Link>
            <NavTitle>Guide</NavTitle>
          </SideNavbarHead>
          <MobileMenu onClick={handleMobileMenu}>
            <FirstLine isOpenMobileMenu={isOpenMobileMenu}></FirstLine>
            <ThirdLine isOpenMobileMenu={isOpenMobileMenu}></ThirdLine>
          </MobileMenu>
        </NavbarHeader>
        {isOpenMobileMenu && (
          <MobileNavMenu>
            <NavmenuSection>{navbarRenderView}</NavmenuSection>
          </MobileNavMenu>
        )}
      </GuideMobileNavbar>
    </>
  );
}
