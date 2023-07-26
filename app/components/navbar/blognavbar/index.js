'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CopilotLogos from '../../../../public/images/blacklogo.svg';
import GreenLogos from '../../../../public/images/greenlogo.svg';
import WhiteLogos from '../../../../public/images/whitelogo.svg';
import MobileBlackLogos from '../../../../public/images/mobileblacklogo.svg';
import MobileWhiteLogos from '../../../../public/images/whitemobilelogo.svg';
import MobileGreenLogos from '../../../../public/images/greenmblogo.svg';
import { Container } from '../../../styles/commonStyles';
import { HEADER_LIST, NAVBAR_COLOR_LIST } from '../../../constants/constant';
import useMobileDevice from '../../../hooks/useMobileDevice';
import { isEmpty } from '../../../helpers/helpers';
import {
  NavbarWrapper,
  NavbarInner,
  CopilotLogo,
  NavMenu,
  SpanLink,
  HeaderBtnGroup,
  MobileMenu,
  FirstLine,
  ThirdLine,
  OverLayBlock,
  MobileRight,
  SpanMobileLink,
  BackWrap,
  SvgIcon,
  MobileTextLink,
  TopBar,
  AnnounceBar,
  HelpLink,
  Dspace
} from '../styles';
import FeatureSubMenu from '../featuresubmenu';
import ResourcesSubMenu from '../resourcessubmenu';
import SolutionSubMenu from '../solutionsubmenu';
import { NavigationBlock } from './styles';

export default function BlogNavbar({ isModule, headerIndex, isEnterPrice, tagData }) {
  const appSelector = useSelector((state) => state.app);
  const { topbarContent } = appSelector;
  const mobile = useMobileDevice();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenFeatureSubMenu, setIsOpenFeatureSubMenu] = useState(false);
  const [isOpenSolutionSubMenu, setIsOpenSolutionSubMenu] = useState(false);
  const [isOpenResoursesSubMenu, setIsOpenResoursesSubMenu] = useState(false);

  const [colorList, setColorList] = useState(NAVBAR_COLOR_LIST[0]);
  const closeSubMenu = useCallback(() => {
    if (isOpenFeatureSubMenu) {
      setIsOpenFeatureSubMenu(false);
    } else if (isOpenSolutionSubMenu) {
      setIsOpenSolutionSubMenu(false);
    } else if (isOpenResoursesSubMenu) {
      setIsOpenResoursesSubMenu(false);
    }
  }, [isOpenSolutionSubMenu, isOpenFeatureSubMenu, isOpenResoursesSubMenu]);

  const handleMobileMenu = useCallback(() => {
    const body = document.querySelector('body');
    if (isOpenMobileMenu) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
    setIsOpenMobileMenu(!isOpenMobileMenu);
    closeSubMenu();
  }, [closeSubMenu, isOpenMobileMenu]);

  let isScrollPage = false;
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

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

  const MobileNavigation = useCallback(() => {
    return (
      <>
        <NavMenu>
          <NavigationBlock>
            {isOpenFeatureSubMenu ? (
              <FeatureSubMenu />
            ) : isOpenSolutionSubMenu ? (
              <SolutionSubMenu />
            ) : isOpenResoursesSubMenu ? (
              <ResourcesSubMenu />
            ) : (
              <>
                <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                  <MobileTextLink hoverColor={colorList?.primaryColor} href='/blog'>
                    Blog Home
                  </MobileTextLink>
                </SpanLink>
                {tagData?.map((item, index) => {
                  return (
                    <SpanLink
                      key={`taglist_index_${index}`}
                      textColor={colorList?.fontColor}
                      hoverColor={colorList?.primaryColor}>
                      <MobileTextLink hoverColor={colorList?.primaryColor} href={`/blog/tag/${item?.slug}`}>
                        {item?.name}
                      </MobileTextLink>
                    </SpanLink>
                  );
                })}
                <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                  <MobileTextLink hoverColor={colorList?.primaryColor} href='/updates'>
                    What’s New
                  </MobileTextLink>
                </SpanLink>
              </>
            )}
          </NavigationBlock>
        </NavMenu>
      </>
    );
  }, [
    colorList?.fontColor,
    colorList?.primaryColor,
    isOpenSolutionSubMenu,
    isOpenFeatureSubMenu,
    isOpenResoursesSubMenu,
    tagData
  ]);

  const Navigation = useCallback(() => {
    return (
      <NavMenu>
        <NavigationBlock>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/blog'>Blog Home</Link>
          </SpanLink>
          {tagData?.map((item, index) => {
            return (
              <SpanLink
                key={`navigationtag_index_${index}`}
                textColor={colorList?.fontColor}
                hoverColor={colorList?.primaryColor}>
                <Link href={`/blog/tag/${item?.slug}`} className='hovernone'>
                  {item?.name}
                </Link>
              </SpanLink>
            );
          })}
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/updates'>What’s New</Link>
          </SpanLink>
          <SpanMobileLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/book-demo'>Book Demo</Link>
          </SpanMobileLink>
        </NavigationBlock>
        <HeaderBtnGroup></HeaderBtnGroup>
      </NavMenu>
    );
  }, [colorList?.fontColor, colorList?.primaryColor, tagData]);

  useEffect(() => {
    if (headerIndex) setColorList(NAVBAR_COLOR_LIST[headerIndex]);
    else setColorList(NAVBAR_COLOR_LIST[HEADER_LIST.DEFAULT]);
  }, [headerIndex]);

  const renderTopBarView = useMemo(() => {
    if (isEmpty(topbarContent)) return null;
    return (
      <>
        <div>
          <Dspace></Dspace>
          <TopBar>
            <Container>
              <AnnounceBar>
                <HelpLink className='icon-link'>
                  <Link href={topbarContent?.url} className='learn-link mb0' target={'_blank'}>
                    {topbarContent?.title}
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
                    <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                      <path
                        d='M2 3L6 7L2 11'
                        stroke='#ffffff'
                        stroke-width='1.85714'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </Link>
                </HelpLink>
              </AnnounceBar>
            </Container>
          </TopBar>
        </div>
      </>
    );
  }, [topbarContent]);

  //   useEffect(() => {
  //     loadData();
  //   }, [loadData]);

  return (
    <>
      {renderTopBarView}
      <NavbarWrapper
        className={isScrollPage ? 'scroll' : ''}
        colorList={colorList}
        isAnnouncebar={!isEmpty(topbarContent)}>
        <Container>
          <NavbarInner>
            {isModule ? (
              mobile ? (
                isOpenResoursesSubMenu || isOpenSolutionSubMenu || isOpenFeatureSubMenu ? (
                  <BackWrap textColor={colorList?.fontColor} onClick={closeSubMenu}>
                    <SvgIcon>
                      <Image src='/images/moduleback.svg' width={10} height={10} alt='back-icon' />
                    </SvgIcon>
                    <span>Back</span>
                  </BackWrap>
                ) : (
                  <Link href='/' aria-label={'Navigate to Home'}>
                    <CopilotLogo alt='copilot logo' loading='lazy' width='96' height='21' src={MobileWhiteLogos.src} />
                  </Link>
                )
              ) : (
                <Link href='/' aria-label={'Navigate to Home'}>
                  <CopilotLogo alt='copilot logo' loading='lazy' width='143' height='31' src={WhiteLogos.src} />
                </Link>
              )
            ) : isEnterPrice ? (
              mobile ? (
                isOpenResoursesSubMenu || isOpenSolutionSubMenu || isOpenFeatureSubMenu ? (
                  <BackWrap textColor={colorList?.fontColor} onClick={closeSubMenu}>
                    <SvgIcon>
                      <Image src='/images/moduleback.svg' width={10} height={10} alt='back-icon' />
                    </SvgIcon>
                    <span>Back</span>
                  </BackWrap>
                ) : (
                  <Link href='/' aria-label={'Navigate to Home'}>
                    <CopilotLogo alt='copilot logo' loading='lazy' width='96' height='21' src={MobileGreenLogos.src} />
                  </Link>
                )
              ) : (
                <Link href='/' aria-label={'Navigate to Home'}>
                  <CopilotLogo alt='copilot logo' loading='lazy' width='143' height='31' src={GreenLogos.src} />
                </Link>
              )
            ) : mobile ? (
              isOpenResoursesSubMenu || isOpenSolutionSubMenu || isOpenFeatureSubMenu ? (
                <BackWrap onClick={closeSubMenu}>
                  <SvgIcon>
                    <Image src='/images/iconback.svg' width={10} height={10} alt='back-icon' />
                  </SvgIcon>
                  <span>Back</span>
                </BackWrap>
              ) : (
                <Link href='/' aria-label={'Navigate to Home'}>
                  <CopilotLogo alt='copilot logo' loading='lazy' width='96' height='21' src={MobileBlackLogos.src} />
                </Link>
              )
            ) : (
              <Link href='/' aria-label={'Navigate to Home'}>
                <CopilotLogo alt='copilot logo' loading='lazy' width='143' height='31' src={CopilotLogos.src} />{' '}
              </Link>
            )}

            {isOpenMobileMenu ? (
              <OverLayBlock>
                <MobileNavigation></MobileNavigation>
              </OverLayBlock>
            ) : null}

            {!mobile ? <Navigation className='hide' /> : null}
            <MobileRight>
              <MobileMenu onClick={handleMobileMenu}>
                <FirstLine
                  isOpenMobileMenu={isOpenMobileMenu}
                  isEnterPrice={isEnterPrice}
                  textColor={colorList?.fontColor}></FirstLine>
                <ThirdLine
                  isOpenMobileMenu={isOpenMobileMenu}
                  isEnterPrice={isEnterPrice}
                  textColor={colorList?.fontColor}></ThirdLine>
              </MobileMenu>
            </MobileRight>
          </NavbarInner>
        </Container>
      </NavbarWrapper>
    </>
  );
}
