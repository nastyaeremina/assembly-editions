'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import CopilotLogos from 'public/images/blacklogo.svg';
import GreenLogos from 'public/images/greenlogo.svg';
import WhiteLogos from 'public/images/whitelogo.svg';
import MobileBlackLogos from 'public/images/mobileblacklogo.svg';
import MobileWhiteLogos from 'public/images/whitemobilelogo.svg';
import MobileGreenLogos from 'public/images/greenmblogo.svg';
import { BlackButton, Container } from '../../styles/commonStyles';
import { HEADER_LIST, NAVBAR_COLOR_LIST } from '../../constants/constant';
import useMobileDevice from '../../hooks/useMobileDevice';
import { isEmpty } from '../../helpers/helpers';
import Button from '../button/button';
import Line from '../../../public/images/navbar-line.png';
import { COPILOT_DASHBOARD_LINK, COPILOT_ONBOARDING_LINK, OPEN_COPILOT_LINK } from '../../constants/externalLinks';
import {
  NavbarWrapper,
  NavbarInner,
  CopilotLogo,
  NavMenu,
  NavigationBlock,
  SpanLink,
  HeaderBtnGroup,
  SignInSignUpBtn,
  SignIn,
  MobileMenu,
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
  BackWrap,
  SvgIcon,
  TopBar,
  AnnounceBar,
  HelpLink,
  Dspace,
  Drop,
  FooterItem
} from './styles';
import DropDownComponent from './dropdown';
import DropdownFooter from './dropdownFooter';
import ResponsiveNavbar from './responsiveNavbar';

export default function NavbarComponent({
  isModule,
  headerIndex,
  isEnterPrice,
  isAuthenticated: userAuth,
  topbarContent,
  navbarColorList,
  navbarData
}) {
  const mobile = useMobileDevice();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  var colorList = NAVBAR_COLOR_LIST[0];
  if (navbarColorList) colorList = navbarColorList;
  else if (headerIndex) colorList = NAVBAR_COLOR_LIST[headerIndex];
  else colorList = NAVBAR_COLOR_LIST[HEADER_LIST.DEFAULT];
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

  const MobileNavigation = useMemo(() => {
    if (isEmpty(navbarData)) return null;
    return (
      <>
        <NavMenu mobile={mobile} isBoxShadow>
          <NavigationBlock>
            <ResponsiveNavbar
              mobile={mobile}
              navbarData={navbarData}
              openDropdownIndex={openDropdownIndex}
              setOpenDropdownIndex={setOpenDropdownIndex}
            />
          </NavigationBlock>
        </NavMenu>
      </>
    );
  }, [mobile, navbarData, openDropdownIndex]);
  const renderSubItemView = useCallback((data, title) => {
    return data?.map((item, index) => {
      return (
        <ListLi key={`feature_navbar_index_${index}`}>
          <MenuWrap href={item?.Link}>
            {!isEmpty(item?.Icon) && (
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
              {!isEmpty(item?.Description) && <span>{item?.Description}</span>}
            </RightText>
          </MenuWrap>
        </ListLi>
      );
    });
  }, []);

  const renderDropdownFooter = useCallback((data) => {
    if (isEmpty(data)) return null;
    return data.map((item, index) => {
      return <DropdownFooter key={`navbar_dropdown_${item.Title}`} linkName={item.Title} href={item.Link} />;
    });
  }, []);

  const renderNavbarSubItems = useCallback(
    (data) => {
      if (isEmpty(data)) return null;
      const footerData = data.find((item) => item.title.toLowerCase() === 'footer');
      const totalItems = data.filter((item) => item.title.toLowerCase() !== 'footer').length;
      return (
        <>
          <Drop itemCount={totalItems}>
            {data.map((item, index) => {
              if (item.title.toLowerCase() === 'footer') return null;
              return (
                <DropDownComponent
                  title={item.title}
                  key={`navbar_sub_item_${item.title}`}
                  viewRenderer={renderSubItemView(item.items, item.title)} // Pass title here
                />
              );
            })}
          </Drop>
          {/* footer */}
          <FooterItem itemCount={footerData?.items.length}>
            {!isEmpty(footerData?.items) && renderDropdownFooter(footerData.items)}
          </FooterItem>
        </>
      );
    },
    [renderDropdownFooter, renderSubItemView]
  );

  const Navigation = useCallback(() => {
    if (isEmpty(navbarData)) return null;

    return (
      <NavMenu mobile={mobile}>
        <NavigationBlock>
          {navbarData.map((item, index) => {
            if (isEmpty(item.subsections) && item.link)
              return (
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  key={`navbar_${item.title}`}>
                  <Link href={item.link}>{item.title}</Link>
                </SpanLink>
              );
            if (!isEmpty(item.subsections));
            return (
              <SpanLink
                key={`navbar_${item.title}`}
                textColor={colorList?.fontColor}
                hoverColor={colorList?.primaryColor}>
                <Link href='#' className='hovernone'>
                  {item.title}
                </Link>
                <InnerList solution className='innerlist'>
                  {renderNavbarSubItems(item.subsections, index, item.title)}
                </InnerList>
                <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
                  <Image src={Line.src} width={93} height={30} alt='' />
                </LineMenuImg>
              </SpanLink>
            );
          })}
        </NavigationBlock>
        <HeaderBtnGroup>
          <SignInSignUpBtn>
            <>
              {userAuth ? (
                <>
                  <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <Link href={'/book-demo'}>Contact sales</Link>
                  </SignIn>
                  <Button
                    bgColor={colorList?.buttonColor}
                    fontColor={
                      isEnterPrice
                        ? colorList?.fontColor
                        : colorList?.buttontextColor
                        ? colorList?.buttontextColor
                        : '--white'
                    }
                    text={'Open Dashboard'}
                    borderColor={'--black'}
                    href={OPEN_COPILOT_LINK}
                    hoverColor={'--secondary-hover-color'}
                    className='hederbtn'
                    isCamelCase={false}
                    target='blank'
                  />
                </>
              ) : (
                <>
                  <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <Link href={'/book-demo'}>Contact sales</Link>
                  </SignIn>
                  <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <Link href={COPILOT_DASHBOARD_LINK}>Log in</Link>
                  </SignIn>
                  {/* <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <Link href='/book-demo'>Book demo</Link>
                  </SignIn> */}
                  <Button
                    bgColor={colorList?.buttonColor}
                    fontColor={
                      isEnterPrice
                        ? colorList?.fontColor
                        : colorList?.buttontextColor
                        ? colorList?.buttontextColor
                        : '--white'
                    }
                    text={'Start Trial'}
                    borderColor={'--transparent'}
                    href={COPILOT_ONBOARDING_LINK}
                    hoverColor={'--secondary-hover-color'}
                    className='hederbtn'
                  />
                </>
              )}
            </>
          </SignInSignUpBtn>
        </HeaderBtnGroup>
      </NavMenu>
    );
  }, [
    colorList?.buttonColor,
    colorList?.buttontextColor,
    colorList?.fontColor,
    colorList?.lineColor,
    colorList?.primaryColor,
    isEnterPrice,
    mobile,
    navbarData,
    renderNavbarSubItems,
    userAuth
  ]);

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
                !isEmpty(openDropdownIndex) ? (
                  <BackWrap textColor={colorList?.fontColor} onClick={closeSubMenu}>
                    <SvgIcon>
                      <Image src='/images/moduleback.svg' width={10} height={10} alt='back-icon' />
                    </SvgIcon>
                    <span>Back</span>
                  </BackWrap>
                ) : (
                  <Link href='/' aria-label={'Navigate to Home'}>
                    <CopilotLogo alt='copilot logo' loading='eager' width='96' height='21' src={MobileWhiteLogos.src} />
                  </Link>
                )
              ) : (
                <Link href='/' aria-label={'Navigate to Home'}>
                  <CopilotLogo alt='copilot logo' loading='eager' width='143' height='31' src={WhiteLogos.src} />
                </Link>
              )
            ) : isEnterPrice ? (
              mobile ? (
                !isEmpty(openDropdownIndex) ? (
                  <BackWrap textColor={colorList?.fontColor} onClick={closeSubMenu}>
                    <SvgIcon>
                      <Image src='/images/moduleback.svg' width={10} height={10} alt='back-icon' />
                    </SvgIcon>
                    <span>Back</span>
                  </BackWrap>
                ) : (
                  <Link href='/' aria-label={'Navigate to Home'}>
                    <CopilotLogo alt='copilot logo' loading='eager' width='96' height='21' src={MobileGreenLogos.src} />
                  </Link>
                )
              ) : (
                <Link href='/' aria-label={'Navigate to Home'}>
                  <CopilotLogo alt='copilot logo' loading='eager' width='143' height='31' src={GreenLogos.src} />
                </Link>
              )
            ) : mobile ? (
              !isEmpty(openDropdownIndex) ? (
                <BackWrap onClick={closeSubMenu}>
                  <SvgIcon>
                    <Image src='/images/iconback.svg' width={10} height={10} alt='back-icon' />
                  </SvgIcon>
                  <span>Back</span>
                </BackWrap>
              ) : (
                <Link href='/' aria-label={'Navigate to Home'}>
                  <CopilotLogo alt='copilot logo' loading='eager' width='96' height='21' src={MobileBlackLogos.src} />
                </Link>
              )
            ) : (
              <Link href='/' aria-label={'Navigate to Home'}>
                <CopilotLogo alt='copilot logo' loading='eager' width='143' height='31' src={CopilotLogos.src} />{' '}
              </Link>
            )}

            {isOpenMobileMenu ? (
              <OverLayBlock>
                {MobileNavigation}
                {/* <MobileNavigation></MobileNavigation> */}
              </OverLayBlock>
            ) : null}

            {!mobile ? <Navigation className='hide' /> : null}
            <MobileRight>
              <SignInMobile>
                <>
                  {userAuth ? (
                    <>
                      <BlackButton
                        textColor={isModule ? colorList?.fontColor : '--white'}
                        backgroundColor={colorList?.buttonColor}>
                        <Link href={OPEN_COPILOT_LINK}>Open Dashboard</Link>
                      </BlackButton>
                    </>
                  ) : (
                    <>
                      <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                        <Link href={COPILOT_DASHBOARD_LINK}>Log in</Link>
                      </SignIn>
                      <BlackButton
                        textColor={isModule ? colorList?.fontColor : '--white'}
                        backgroundColor={colorList?.buttonColor}>
                        <Link href={COPILOT_ONBOARDING_LINK}>Start trial</Link>
                      </BlackButton>
                    </>
                  )}
                </>
              </SignInMobile>
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
