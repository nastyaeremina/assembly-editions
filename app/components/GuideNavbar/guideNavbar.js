'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CopilotLogos from '../../../public/images/blacklogo.svg';
import closearrow from '../../../public/images/closearrow.svg';
import { FirstLine, MobileMenu, ThirdLine } from '../navbar/styles';
import { isEmpty } from '../../helpers/helpers';
import {
  CopilotGuideLogo,
  GuideMobileNavbar,
  GuideSectionItem,
  Icon,
  IconText,
  Maindiv,
  MobileNavMenu,
  NavHead,
  NavItem,
  NavItemSection,
  NavSection,
  NavTitle,
  NavbarHeader,
  NavmenuSection,
  OptionIcon,
  OptionName,
  SideNavbar,
  SideNavbarHead
} from './styles';

export default function GuideNavbar({ data, onClickArticle, selectedArticleId }) {
  let isScrollPage = false;
  const [openIndex, setOpenIndex] = useState(0);
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    window.addEventListener('scroll', handleScroll);
  }, []);
  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }

  const onClickOpen = useCallback(
    (index) => {
      setOpenIndex(openIndex === index ? -1 : index);
    },
    [openIndex]
  );

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
        console.log('iconCode', childItem?.iconCode);
        return (
          <NavItem
            key={`guidearticle_index${childItem?.sys?.id}`}
            onClick={() => {
              router.push(`/guide/${childItem?.slug}`);
              onClickArticle(childItem);
              setIsOpenMobileMenu(false);
            }}>
            {!isEmpty(childItem?.icon?.url) && (
              <Icon className='svgicon' isSelected={selectedArticleId === childItem?.sys?.id}>
                <div dangerouslySetInnerHTML={{ __html: childItem?.iconCode }} />
                {/* <Image src={childItem?.icon?.url} alt='item-icon' width={16} height={16} className='svglogo'/> */}
              </Icon>
            )}
            <IconText isSelected={selectedArticleId === childItem?.sys?.id} className='secondhead'>
              {childItem?.name}
            </IconText>
          </NavItem>
        );
      });
    },
    [onClickArticle, router, selectedArticleId]
  );

  const navbarRenderView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data.map((item, index) => {
      if (isEmpty(item?.name)) return null;
      const hegith = item?.articlesCollection?.total * 34 + 18;
      return (
        <>
          <GuideSectionItem onClick={() => {}} totalHeight={hegith.toString()}>
            <ul className={openIndex === index ? 'drop-down' : 'drop-down closed'}>
              <li>
                <NavHead onClick={() => onClickOpen(index)} key={index} className='nav-button'>
                  <OptionName isSelected={openIndex === index} className='head'>
                    {item?.name}
                  </OptionName>
                  <OptionIcon className={openIndex === index && 'close'}>
                    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g id='Icon - home-outline'>
                        <path
                          id='Vector'
                          d='M3.80078 1.37109L8.42927 5.99958L3.80078 10.6281'
                          stroke='#757575'
                          stroke-width='1.92854'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </OptionIcon>
                </NavHead>
              </li>
              {/* <li>
                <Link href='#'>About</Link>
              </li> */}
              {openIndex === index && <>{renderArticleItemView(item, index)}</>}
            </ul>
          </GuideSectionItem>
        </>
      );
    });
  }, [data, onClickOpen, openIndex, renderArticleItemView]);

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
          {/* <AskDiv>
            <Image src='/images/guideask.svg' alt='search-icon' width={24} height={24} />
            Ask a question...
            <BtnIcon>
              <Image src='/images/command.svg' alt='search-icon' width={20} height={20} />
              <Image src='/images/commandk.svg' alt='search-icon' width={20} height={20} />
            </BtnIcon>
          </AskDiv> */}
          <NavmenuSection>
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
