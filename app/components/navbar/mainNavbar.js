'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import useMobileDevice from '../../hooks/useMobileDevice';
import { isEmpty } from '../../helpers/helpers';
import { COPILOT_DASHBOARD_LINK, COPILOT_ONBOARDING_LINK } from '../../constants/externalLinks';
import { useRouter, usePathname } from 'next/navigation';
import {
  NavbarWrapper,
  NavbarInner,
  NavMenu,
  NavigationBlock,
  SpanLink,
  HeaderBtnGroup,
  SignInSignUpBtn,
  FirstLine,
  ThirdLine,
  OverLayBlock,
  InnerList,
  ListLi,
  LeftImg,
  MenuWrap,
  RightText,
  LineMenuImg,
  SignInMobile,
  MobileRight,
  TopBar,
  AnnounceBar,
  HelpLink,
  Drop,
  NavigationMainDiv,
  ParentMenuDiv,
  LinkText,
  BergerMenu,
  SecondLine,
  NavbarMainDiv,
  Icon
} from './styles';
import DropDownComponent from './dropdown';
import ResponsiveNavbar from './responsiveNavbar';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import HighlightSection from './highlighSection';
import { BottomButtonSection } from './styles';

export default function NavbarComponent({ isAuthenticated: userAuth, topbarContent, navbarData }) {
  const mobile = useMobileDevice();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const topbarRef = useRef(null);
  const navbarRef = useRef(null);
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--topbar-height', `${topbarHeight}px`);
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }, [topbarHeight, navbarHeight]);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenMobileMenu(false);
    setIsActive(false);
    setOpenDropdownIndex(null);
  }, [pathname]);

  const closeSubMenu = useCallback(() => {
    setOpenDropdownIndex(null);
  }, []);

  const handleMobileMenu = useCallback(() => {
    const body = document.querySelector('body');
    if (isOpenMobileMenu) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
    setIsActive(!isActive);
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

    if (topbarRef.current) {
      setTopbarHeight(topbarRef.current.offsetHeight);
    }
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }

  const renderMobileNavigation = useMemo(() => {
    if (isEmpty(navbarData)) return null;
    return (
      <>
        <ResponsiveNavbar
          mobile={mobile}
          navbarData={navbarData}
          openDropdownIndex={openDropdownIndex}
          setOpenDropdownIndex={setOpenDropdownIndex}
        />
      </>
    );
  }, [mobile, navbarData, openDropdownIndex]);

  const renderSubItemView = useCallback((data, title) => {
    if (title.toLowerCase() === 'highlight')
      return (
        <div key={`highlight_section_${title}`}>
          {data &&
            data.map((highlightItem, index) => {
              return (
                <HighlightSection
                  key={`highlight_${index}`}
                  href={highlightItem.Link}
                  title={highlightItem.Title}
                  description={highlightItem.Description}
                  image={highlightItem.Image}
                />
              );
            })}
        </div>
      );

    return data?.map((item, index) => {
      let itemIcon = item?.Icon;
      if (itemIcon && itemIcon.startsWith('//')) {
        itemIcon = `https:${itemIcon}`;
      }
      return (
        <ListLi key={`feature_navbar_index_${index}`}>
          <MenuWrap href={item?.Link}>
            {!isEmpty(itemIcon) && (
              <LeftImg isSmallImage={isEmpty(item?.Description)}>
                <Image
                  src={itemIcon}
                  alt='msg-icon'
                  width={!isEmpty(item?.Description) ? 18 : 14}
                  height={!isEmpty(item?.Description) ? 18 : 14}
                />
              </LeftImg>
            )}
            <RightText>
              <h5>{item?.Title}</h5>
              {!isEmpty(item?.Description) && <span>{item?.Description}</span>}
            </RightText>
          </MenuWrap>
        </ListLi>
      );
    });
  }, []);

  const renderNavbarSubItems = useCallback(
    (data) => {
      if (isEmpty(data)) return null;
      const totalItems = data.filter((item) => item.title.toLowerCase() !== 'footer').length;
      return (
        <>
          <Drop>
            <ParentMenuDiv itemCount={totalItems}>
              {data.map((item) => {
                if (item.title.toLowerCase() === 'footer') return null;
                return (
                  <DropDownComponent
                    title={item.title}
                    shouldTitleShow={item.title.toLowerCase() !== 'highlight'}
                    key={`navbar_sub_item_${item.title}`}
                    viewRenderer={renderSubItemView(item.items, item.title)}
                  />
                );
              })}
            </ParentMenuDiv>
          </Drop>
        </>
      );
    },
    [renderSubItemView]
  );

  const renderNavigation = useMemo(() => {
    if (isEmpty(navbarData)) return null;

    return (
      <NavMenu mobile={mobile}>
        <NavigationBlock>
          {navbarData.map((item, index) => {
            if (isEmpty(item.subsections) && item.link)
              return (
                <SpanLink key={`navbar_${item.title}`}>
                  <LinkText href={item.link}>{item.title}</LinkText>
                </SpanLink>
              );
            if (!isEmpty(item.subsections));
            return (
              <SpanLink key={`navbar_${item.title}`} className='SpanLink'>
                <LinkText href='#'>{item.title}</LinkText>
                <InnerList solution className='innerlist'>
                  {renderNavbarSubItems(item.subsections, index, item.title)}
                </InnerList>
                <LineMenuImg></LineMenuImg>
              </SpanLink>
            );
          })}
        </NavigationBlock>
        <HeaderBtnGroup>
          <SignInSignUpBtn>
            <>
              {userAuth ? (
                <>
                  <SpanLink>
                    <LinkText href={'/book-demo'}>Contact sales</LinkText>
                  </SpanLink>
                  <ButtonV2Component title={'Open Dashboard'} href={COPILOT_DASHBOARD_LINK} size='small' />
                </>
              ) : (
                <>
                  <SpanLink>
                    <LinkText href={'/book-demo'}>Contact sales</LinkText>
                  </SpanLink>
                  <SpanLink>
                    <LinkText href={COPILOT_DASHBOARD_LINK}>Log in</LinkText>
                  </SpanLink>
                  <ButtonV2Component title={'Start Trial'} href={COPILOT_ONBOARDING_LINK} size='small' />
                </>
              )}
            </>
          </SignInSignUpBtn>
        </HeaderBtnGroup>
      </NavMenu>
    );
  }, [mobile, navbarData, renderNavbarSubItems, userAuth]);

  const renderTopBarView = useMemo(() => {
    if (isEmpty(topbarContent)) return null;
    return (
      <>
        <div id='topbarContent'>
          <TopBar ref={topbarRef} data-topbar='true'>
            <Container>
              <AnnounceBar>
                <HelpLink className='icon-link'>
                  <Link href={topbarContent?.url} className='learn-link mb0' target={'_blank'}>
                    {topbarContent?.title}
                    <Icon>
                      <SVGComponent name='blog-card-hover-arrow-icon' width='12' height='12' viewBox='0 0 16 16' />
                    </Icon>
                  </Link>
                </HelpLink>
              </AnnounceBar>
            </Container>
          </TopBar>
        </div>
      </>
    );
  }, [topbarContent]);

  return (
    <NavbarMainDiv>
      {renderTopBarView}
      <NavbarWrapper className={isScrollPage ? 'scroll' : ''} ref={navbarRef} data-navbar='true'>
        <Container>
          <NavbarInner>
            {mobile ? (
              <Link href='/' aria-label={'Navigate to Home'}>
                <SVGComponent
                  name='assembly-big-logo'
                  width='174'
                  height='32'
                  viewBox='0 0 200 38'
                  className='logo-icon'
                />
              </Link>
            ) : (
              <Link href='/' aria-label={'Navigate to Home'}>
                <SVGComponent name='assembly-big-logo' width='174' height='32' viewBox='0 0 200 38' />
              </Link>
            )}

            <OverLayBlock top={topbarHeight + navbarHeight} isOpenModal={isOpenMobileMenu}>
              {renderMobileNavigation}
              <BottomButtonSection isOpenModal={isOpenMobileMenu}>
                <ButtonV2Component title={'Start free trial'} href={COPILOT_ONBOARDING_LINK} isWidth />
                <ButtonV2Component title={'Log in'} href={COPILOT_DASHBOARD_LINK} isWidth variant='secondary' />
              </BottomButtonSection>
            </OverLayBlock>
            <NavigationMainDiv>{renderNavigation}</NavigationMainDiv>

            <MobileRight>
              <SignInMobile>
                <>
                  {userAuth ? (
                    <>
                      <ButtonV2Component title={'Open Dashboard'} href={COPILOT_DASHBOARD_LINK} size='small' />
                    </>
                  ) : (
                    <>
                      <SpanLink className='login-link'>
                        <LinkText href={COPILOT_DASHBOARD_LINK}>Log in</LinkText>
                      </SpanLink>
                      <ButtonV2Component title={'Start Trial'} href={COPILOT_ONBOARDING_LINK} size='small' />
                    </>
                  )}
                </>
              </SignInMobile>
              <BergerMenu onClick={handleMobileMenu} aria-label='navbar menu button'>
                <FirstLine isActive={isActive} />
                <SecondLine isActive={isActive} />
                <ThirdLine isActive={isActive} />
              </BergerMenu>
            </MobileRight>
          </NavbarInner>
        </Container>
      </NavbarWrapper>
    </NavbarMainDiv>
  );
}
