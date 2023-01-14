import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CopilotLogos from '../../public/images/blacklogo.svg';
import GreenLogos from '../../public/images/greenlogo.svg';
import WhiteLogos from '../../public/images/whitelogo.svg';
import MobileBlackLogos from '../../public/images/mobileblacklogo.svg';
import MobileWhiteLogos from '../../public/images/whitemobilelogo.svg';
import MobileGreenLogos from '../../public/images/greenmblogo.svg';
import { BlackButton, Container, PrimaryButton } from '../../styles/commonStyles';
import { HEADER_LIST, NAVBAR_COLOR_LIST, TOP_BAR_CONTENT_ID } from '../../constants/constant';
import useMobileDevice from '../../hooks/useMobileDevice';
import { getSitemap } from '../../lib/contentful-sitemap';
import { isEmpty } from '../../helpers/helpers';
import Button from '../button/button';
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
  MobileText,
  SpanMobileLink,
  BackWrap,
  SvgIcon,
  MobileTextLink,
  TextView,
  TopBar,
  AnnounceBar,
  HelpLink,
  Dspace,

} from './styles';
import FeatureSubMenu from './featuresubmenu';
import ResourcesSubMenu from './resourcessubmenu';
import CompanySubMenu from './companysubmenu';

export default function Navbar({ isModule, headerIndex, isEnterPrice }) {
  const appSelector = useSelector((state) => state.app);
  const { topbarContent } = appSelector;

  const mobile = useMobileDevice();
  const router = useRouter();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenFeatureSubMenu, setIsOpenFeatureSubMenu] = useState(false);
  const [isOpenCompanySubMenu, setIsOpenCompanySubMenu] = useState(false);
  const [isOpenResoursesSubMenu, setIsOpenResoursesSubMenu] = useState(false);
  const [colorList, setColorList] = useState(NAVBAR_COLOR_LIST[0]);
  const closeSubMenu = useCallback(() => {
    if (isOpenFeatureSubMenu) {
      setIsOpenFeatureSubMenu(false);
    } else if (isOpenCompanySubMenu) {
      setIsOpenCompanySubMenu(false);
    } else if (isOpenResoursesSubMenu) {
      setIsOpenResoursesSubMenu(false);
    }
  }, [isOpenCompanySubMenu, isOpenFeatureSubMenu, isOpenResoursesSubMenu]);

  const handleMobileMenu = useCallback(() => {
    const body = document.querySelector("body");
    if(isOpenMobileMenu)
    {
      body.style.overflow = "auto";
    }
    else
    {
      body.style.overflow = "hidden";
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
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    window.addEventListener('scroll', handleScroll);
  }, []);

  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }

  const MobileNavigation = () => {
    return (
      <>
        <NavMenu>
          <NavigationBlock>
            {isOpenFeatureSubMenu ? (
              <FeatureSubMenu />
            ) : isOpenCompanySubMenu ? (
              <CompanySubMenu />
            ) : isOpenResoursesSubMenu ? (
              <ResourcesSubMenu />
            ) : (
              <>
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/pricing' ? 'active' : ''}>
                  <MobileTextLink hoverColor={colorList?.primaryColor} href='/pricing'>
                    Pricing
                  </MobileTextLink>
                </SpanLink>
                <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                  <MobileText
                    onClick={() => {
                      setIsOpenFeatureSubMenu(true);
                    }}>
                    Features
                  </MobileText>
                </SpanLink>
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/apps' ? 'active' : ''}>
                  <MobileTextLink href='/apps' hoverColor={colorList?.primaryColor}>
                    Apps
                  </MobileTextLink>
                </SpanLink>
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/features' ? 'active' : ''}>
                  <MobileText
                    onClick={() => {
                      setIsOpenCompanySubMenu(true);
                    }}>
                    Company
                  </MobileText>
                </SpanLink>
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/features' ? 'active' : ''}>
                  <MobileText
                    onClick={() => {
                      setIsOpenResoursesSubMenu(true);
                    }}>
                    Resources
                  </MobileText>
                </SpanLink>
                <SpanMobileLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/book-demo' ? 'active' : ''}>
                  <Link href='/book-demo'>Book Demo</Link>
                </SpanMobileLink>
              </>
            )}
          </NavigationBlock>
        </NavMenu>
      </>
    );
  };
  const Navigation = () => {
    return (
      <NavMenu>
        <NavigationBlock>
          <SpanLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/pricing' ? 'active' : ''}>
            <Link href='/pricing'>Pricing</Link>
          </SpanLink>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <TextView href='#' className='hovernone'>
              Features
            </TextView>
            <InnerList features className='innerlist'>
              <ListLi>
                <MenuWrap msghover href='/features/messaging-app'>
                  <LeftImg>
                    <Image src='/images/menumsg.svg' alt='msg-icon' width={32} height={32} />
                  </LeftImg>
                  <RightText>
                    <h5>Messaging</h5>
                    <span>Communicate with clients securely</span>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap billhover href='/features/billing-app'>
                  <LeftImg>
                    <Image src='/images/billmenuicon.svg' alt='bill-icon' width={32} height={32} />
                  </LeftImg>
                  <RightText>
                    <h5>Billing</h5>
                    <span>Create invoices and subscriptions</span>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap filehover href='/features/files-app'>
                  <LeftImg>
                    <Image src='/images/filemenuicon.svg' alt='file-icon' width={32} height={32} />
                  </LeftImg>
                  <RightText>
                    <h5>Files & eSignatures</h5>
                    <span>Share files and sign contracts</span>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap formhover href='/features/forms-app'>
                  <LeftImg>
                    <Image src='/images/formmenuicon.svg' alt='form-icon' width={32} height={32} />
                  </LeftImg>
                  <RightText>
                    <h5>Forms</h5>
                    <span>Streamline data collection</span>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap helphover href='/features/helpdesk-app'>
                  <LeftImg>
                    <Image src='/images/deskmenuicon.svg' alt='desk-icon' width={32} height={32} />
                  </LeftImg>
                  <RightText>
                    <h5>Helpdesk</h5>
                    <span>Improve customer support</span>
                  </RightText>
                </MenuWrap>
              </ListLi>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='93' height='30' viewBox='0 0 93 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='92' y2='7.50001' stroke='#00160E' />
                <line x1='92.5' y1='-2.18557e-08' x2='92.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          <SpanLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/apps' ? 'active' : ''}>
            <Link href='/apps'>Apps</Link>
          </SpanLink>
          <SpanLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/features' ? 'active' : ''}>
            <TextView href='#' className='hovernone'>
              Company
            </TextView>
            <InnerList company className='innerlist'>
              <ListLi>
                <MenuWrap href='/copilot-plus'>
                  <LeftImg>
                    <svg
                      className='logo'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <circle cx='8' cy='8' r='8' fill='#7DDAA0' />
                      <path
                        d='M8.09817 3.91994C8.98132 3.91791 9.84072 4.20192 10.5461 4.72936L9.83499 5.43329C9.32254 5.08802 8.71752 4.90301 8.09817 4.90301C7.47881 4.90301 6.87379 5.08762 6.36135 5.43329L5.64941 4.72936C6.35479 4.20151 7.2146 3.9175 8.09817 3.91994Z'
                        fill='white'
                      />
                      <path
                        d='M8.0988 11.0037C7.42742 11.0057 6.77365 10.7886 6.23868 10.3857L5.53125 11.086C6.25793 11.6691 7.16444 11.9871 8.0988 11.9871C9.03316 11.9871 9.93966 11.6691 10.6668 11.086L9.95932 10.3857C9.42435 10.7886 8.77059 11.0057 8.0988 11.0037Z'
                        fill='white'
                      />
                      <path
                        d='M5.01764 7.95155C5.01559 7.28697 5.23433 6.64024 5.64027 6.11199L4.93448 5.41211C4.36223 6.11036 4.04191 6.97862 4.02511 7.87852C4.00832 8.77841 4.29547 9.65803 4.84109 10.377L5.55343 9.67223C5.20279 9.16588 5.016 8.56541 5.01805 7.95114L5.01764 7.95155Z'
                        fill='white'
                      />
                      <path
                        d='M3.04584 7.95143C3.04256 6.76793 3.46611 5.62257 4.24031 4.72186L3.53616 4.02441C2.59565 5.09269 2.06928 6.45836 2.05126 7.87678C2.03324 9.29519 2.5252 10.6734 3.43867 11.7644L4.14446 11.0654C3.43007 10.1825 3.04256 9.08341 3.04543 7.95143H3.04584Z'
                        fill='white'
                      />
                      <path
                        d='M13.9232 7.95103C13.9248 6.50705 13.3976 5.11135 12.4395 4.02441L11.7354 4.72186C12.4899 5.60431 12.9122 6.71924 12.9298 7.87637C12.9474 9.0335 12.5599 10.161 11.8328 11.0658L12.5354 11.7689C13.4333 10.6966 13.9236 9.3455 13.9211 7.95143H13.9232V7.95103Z'
                        fill='white'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Enterprise</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='/jobs'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10.5 3.5C10.5 3.23478 10.3946 2.98043 10.2071 2.79289C10.0196 2.60536 9.76522 2.5 9.5 2.5H6.5C6.23478 2.5 5.98043 2.60536 5.79289 2.79289C5.60536 2.98043 5.5 3.23478 5.5 3.5V4H4V3.5C4 2.83696 4.26339 2.20107 4.73223 1.73223C5.20107 1.26339 5.83696 1 6.5 1H9.5C9.8283 1 10.1534 1.06466 10.4567 1.1903C10.76 1.31594 11.0356 1.50009 11.2678 1.73223C11.4999 1.96438 11.6841 2.23998 11.8097 2.54329C11.9353 2.84661 12 3.1717 12 3.5V4H14.5C15.33 4 16 4.67 16 5.5V13.5C16 14.33 15.33 15 14.5 15H1.5C1.10218 15 0.720644 14.842 0.43934 14.5607C0.158035 14.2794 0 13.8978 0 13.5V5.5C0 4.67 0.67 4 1.5 4H10.5V3.5Z'
                        fill='#7DDAA0'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Jobs</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='/brand'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <mask
                        id='mask0_1874_104897'
                        maskUnits='userSpaceOnUse'
                        x='0'
                        y='0'
                        width='16'
                        height='16'>
                        <path d='M16 0H0V16H16V0Z' fill='white' />
                      </mask>
                      <g mask='url(#mask0_1874_104897)'>
                        <path
                          d='M8 0.000976562C3.58219 0.000976562 0 3.58246 0 8.00063C0 12.4188 3.58184 16.0003 8 16.0003C12.4186 16.0003 16 12.4188 16 8.00063C16 3.58246 12.4186 0.000976562 8 0.000976562ZM8 2.39297C9.46182 2.39297 10.6464 3.57789 10.6464 5.03902C10.6464 6.50049 9.46182 7.68507 8 7.68507C6.53887 7.68507 5.3543 6.50049 5.3543 5.03902C5.3543 3.57789 6.53887 2.39297 8 2.39297ZM7.99824 13.9087C6.54028 13.9087 5.20495 13.3777 4.175 12.4989C3.9241 12.2849 3.77932 11.9711 3.77932 11.6419C3.77932 10.16 4.97866 8.974 6.46086 8.974H9.53984C11.0224 8.974 12.2172 10.16 12.2172 11.6419C12.2172 11.9715 12.0731 12.2845 11.8219 12.4986C10.7922 13.3777 9.45656 13.9087 7.99824 13.9087Z'
                          fill='#7DDAA0'
                        />
                      </g>
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Brand</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='101' height='30' viewBox='0 0 101 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='100' y2='7.50001' stroke='#00160E' />
                <line x1='100.5' y1='-2.18557e-08' x2='100.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          <SpanLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/features' ? 'active' : ''}>
            <TextView href='#' className='hovernone'>
              Resources
            </TextView>
            <InnerList company className='innerlist'>
              <ListLi>
                <MenuWrap href='http://copilot.com/blog'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <mask id='mask0_1874_104899' maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
                        <path d='M16 0H0V16H16V0Z' fill='white' />
                      </mask>
                      <g mask='url(#mask0_1874_104899)'>
                        <path
                          d='M12 14.2C12.2652 14.2 12.5196 14.3054 12.7071 14.4929C12.8946 14.6804 13 14.9348 13 15.2C13 15.4652 12.8946 15.7196 12.7071 15.9071C12.5196 16.0946 12.2652 16.2 12 16.2H4C3.73478 16.2 3.48043 16.0946 3.29289 15.9071C3.10536 15.7196 3 15.4652 3 15.2C3 14.9348 3.10536 14.6804 3.29289 14.4929C3.48043 14.3054 3.73478 14.2 4 14.2H12ZM8.5 0L13 7.2L11.29 13.2H4.7L3 7.2L7.5 0V6.29C7.16639 6.40795 6.88522 6.64003 6.70618 6.94524C6.52715 7.25045 6.46177 7.60912 6.5216 7.95787C6.58144 8.30661 6.76264 8.62298 7.03317 8.85105C7.3037 9.07912 7.64616 9.20421 8 9.20421C8.35384 9.20421 8.6963 9.07912 8.96683 8.85105C9.23736 8.62298 9.41856 8.30661 9.4784 7.95787C9.53823 7.60912 9.47285 7.25045 9.29382 6.94524C9.11478 6.64003 8.83361 6.40795 8.5 6.29V0Z'
                          fill='#7DDAA0'
                        />
                      </g>
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Blog</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='http://security.copilot.com'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <mask id='mask0_1874_104901' maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
                        <path d='M16 0H0V16H16V0Z' fill='white' />
                      </mask>
                      <g mask='url(#mask0_1874_104901)'>
                        <path
                          d='M14.9508 2.23927C14.922 2.03298 14.7736 1.86329 14.573 1.80751L8.14224 0.0191373C8.05057 -0.00637909 7.95373 -0.00637909 7.86198 0.0191373L1.43131 1.80751C1.23066 1.86329 1.08224 2.03291 1.05351 2.23927C1.01621 2.50747 0.165316 8.84444 2.3478 11.9969C4.52771 15.1456 7.74353 15.9525 7.87934 15.9853C7.91971 15.9951 7.96084 15.9999 8.00211 15.9999C8.04339 15.9999 8.08452 15.995 8.12488 15.9853C8.26076 15.9525 11.4766 15.1456 13.6565 11.9969C15.8389 8.84451 14.9881 2.50754 14.9508 2.23927ZM12.1491 5.93886L7.76271 10.3252C7.66064 10.4273 7.52678 10.4784 7.393 10.4784C7.25921 10.4784 7.12536 10.4274 7.02329 10.3252L4.31124 7.61318C4.21315 7.51515 4.15807 7.38213 4.15807 7.24347C4.15807 7.1048 4.21322 6.97178 4.31124 6.87376L4.84973 6.33527C5.05393 6.13114 5.38502 6.13107 5.58915 6.33527L7.393 8.13912L10.8712 4.66088C10.9692 4.56279 11.1022 4.50771 11.2409 4.50771C11.3796 4.50771 11.5126 4.56279 11.6106 4.66088L12.1491 5.19937C12.3533 5.40357 12.3533 5.73466 12.1491 5.93886Z'
                          fill='#7DDAA0'
                        />
                      </g>
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Security</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='http://copilot.com/updates'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM3.71662 11.1842L1.32575 10.1197L1.70706 9.26325L2.58947 9.65613C1.98909 7.69034 2.4995 5.50038 3.99991 3.99997C4.88463 3.11525 6.00609 2.55978 7.24312 2.39366C8.44019 2.23294 9.67872 2.46397 10.7308 3.04428L10.278 3.86522C9.40066 3.38122 8.36719 3.18875 7.36794 3.32281C6.33634 3.46141 5.40094 3.92478 4.66281 4.66291C3.40856 5.91716 2.98344 7.74878 3.48875 9.39103L3.92462 8.41203L4.78106 8.79331L3.71662 11.1842ZM13.4105 6.34394C14.0109 8.30972 13.5005 10.4997 12.0001 12.0001C11.1154 12.8848 9.99391 13.4403 8.75688 13.6064C8.50856 13.6397 8.25834 13.6563 8.0085 13.6563C7.05394 13.6563 6.10303 13.4157 5.26916 12.9558L5.72197 12.1348C6.59937 12.6189 7.63288 12.8114 8.63206 12.6772C9.66366 12.5387 10.5991 12.0753 11.3372 11.3372C12.5914 10.0829 13.0166 8.25128 12.5112 6.60903L12.0754 7.58803L11.2189 7.20675L12.2834 4.81584L14.6742 5.88031L14.2929 6.73675L13.4105 6.34394Z'
                        fill='#7DDAA0'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>What’s New</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='https://support.copilot.com/hc/en-us'>
                  <LeftImg>
                    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.00049 0C4.62732 0 1.88281 2.74451 1.88281 6.11768V11.7646C1.88281 12.5432 2.51611 13.1765 3.29456 13.1765C4.07312 13.1765 4.70642 12.5432 4.70642 11.7646V7.05884C4.70642 6.2804 4.07312 5.64709 3.29456 5.64709C3.13611 5.64709 2.98621 5.6792 2.84375 5.72754C3.04456 3.0553 5.2782 0.941162 8.00049 0.941162C10.7213 0.941162 12.9544 3.05334 13.157 5.72375C13.0154 5.67529 12.8646 5.64709 12.7064 5.64709C11.9279 5.64709 11.2946 6.2804 11.2946 7.05884V11.7646C11.2946 12.5432 11.9279 13.1765 12.7064 13.1765C12.8722 13.1765 13.0291 13.1426 13.177 13.0898V13.6471C13.177 13.9067 12.9656 14.1177 12.7064 14.1177H9.32556C9.13062 13.571 8.61316 13.1765 8.00049 13.1765C7.22205 13.1765 6.58875 13.8098 6.58875 14.5883C6.58875 15.3667 7.22205 16 8.00049 16C8.61316 16 9.13062 15.6053 9.32556 15.0588H12.7064C13.4849 15.0588 14.1182 14.4255 14.1182 13.6471C14.1182 10.8165 14.1182 8.95129 14.1182 6.11768C14.1182 2.74451 11.3737 0 8.00049 0Z'
                        fill='#7DDAA0'
                      />
                      <path
                        d='M15.0625 6.6748V12.1484C15.609 11.9536 16.0037 11.4362 16.0037 10.8234V7.99988C16.0037 7.38721 15.609 6.86975 15.0625 6.6748Z'
                        fill='#7DDAA0'
                      />
                      <path
                        d='M0 7.99988V10.8234C0 11.4362 0.394653 11.9536 0.941162 12.1484V6.6748C0.394653 6.86975 0 7.38721 0 7.99988Z'
                        fill='#7DDAA0'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Help Center</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='/university'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M14.2222 0H1.77778C0.791111 0 0 0.752941 0 1.6732V13.3856C0 14.3059 0.791111 15.0588 1.77778 15.0588H14.2222C15.2 15.0588 16 14.3059 16 13.3856V1.6732C16 0.752941 15.2089 0 14.2222 0ZM14.2222 13.3856H1.77778V3.34641H14.2222V13.3856ZM8 6.27451C9.63555 6.27451 11.0933 7.07765 11.8577 8.36601C11.0933 9.6544 9.63555 10.4575 8 10.4575C6.36444 10.4575 4.90666 9.6544 4.14222 8.36601C4.90666 7.07765 6.36444 6.27451 8 6.27451ZM8 5.0196C5.57333 5.0196 3.50222 6.40837 2.66666 8.36601C3.50222 10.3237 5.57333 11.7124 8 11.7124C10.4266 11.7124 12.4977 10.3237 13.3333 8.36601C12.4977 6.40837 10.4266 5.0196 8 5.0196ZM8 9.62089C7.26222 9.62089 6.66666 9.06042 6.66666 8.36601C6.66666 7.67163 7.26222 7.11112 8 7.11112C8.73778 7.11112 9.33333 7.67163 9.33333 8.36601C9.33333 9.06042 8.73778 9.62089 8 9.62089Z'
                        fill='#7DDAA0'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>Video Tutorials</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='http://docs.copilot.com/'>
                  <LeftImg>
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M5.42785 13.1083H4.89844L5.86233 10.1992H6.47464L7.43988 13.1083H6.91047L6.17918 10.7958H6.15779L5.42785 13.1083ZM5.44522 11.9677H6.88907V12.391H5.44522V11.9677Z'
                        fill='#7DDAA0'
                      />
                      <path
                        d='M7.79688 13.1083V10.1992H8.82361C9.03395 10.1992 9.21042 10.2409 9.35303 10.3242C9.49655 10.4076 9.60479 10.5221 9.67792 10.668C9.7519 10.8129 9.78888 10.9776 9.78888 11.1623C9.78888 11.3488 9.7519 11.5146 9.67792 11.6594C9.60394 11.8043 9.49477 11.9184 9.35039 12.0018C9.20597 12.0842 9.02816 12.1254 8.81692 12.1254H8.13644V11.6921H8.75008C8.87307 11.6921 8.97379 11.6694 9.05222 11.6239C9.13065 11.5785 9.18858 11.516 9.22601 11.4364C9.26434 11.3569 9.2835 11.2655 9.2835 11.1623C9.2835 11.0591 9.26434 10.9682 9.22601 10.8896C9.18858 10.811 9.1302 10.7499 9.05088 10.7063C8.97245 10.6618 8.87129 10.6396 8.74741 10.6396H8.29287V13.1083H7.79688Z'
                        fill='#7DDAA0'
                      />
                      <path d='M10.7148 10.1992V13.1083H10.2188V10.1992H10.7148Z' fill='#7DDAA0' />
                      <path
                        d='M7.90618 2C8.9835 2.00005 10.0232 2.42074 10.8277 3.18208C11.6322 3.94342 12.1453 4.99231 12.2694 6.12933C13.0502 6.35554 13.7313 6.86607 14.1937 7.57169C14.6561 8.2773 14.8704 9.13313 14.7991 9.98959C14.7279 10.8461 14.3756 11.6487 13.8039 12.2572C13.2323 12.8657 12.4774 13.2414 11.6715 13.3187L11.6709 12C11.6719 10.9514 11.2853 9.94437 10.5944 9.19563C9.90351 8.44689 8.9635 8.01635 7.97678 7.99668C6.99007 7.97702 6.03554 8.36981 5.31869 9.0905C4.60184 9.81118 4.18 10.8021 4.14399 11.85L4.14148 12V13.3187C3.33548 13.2416 2.58063 12.8659 2.00886 12.2575C1.43707 11.649 1.08474 10.8464 1.01343 9.98988C0.942118 9.1334 1.15637 8.27752 1.61873 7.57185C2.08109 6.86618 2.76216 6.35559 3.54289 6.12933C3.66694 4.99225 4.18001 3.94327 4.98451 3.18191C5.78901 2.42055 6.82882 1.99991 7.90618 2Z'
                        fill='#7DDAA0'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>API Reference</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
              <ListLi>
                <MenuWrap href='https://status.copilot.com/'>
                  <LeftImg>
                    <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M8.00049 0C4.62732 0 1.88281 2.74451 1.88281 6.11768V11.7646C1.88281 12.5432 2.51611 13.1765 3.29456 13.1765C4.07312 13.1765 4.70642 12.5432 4.70642 11.7646V7.05884C4.70642 6.2804 4.07312 5.64709 3.29456 5.64709C3.13611 5.64709 2.98621 5.6792 2.84375 5.72754C3.04456 3.0553 5.2782 0.941162 8.00049 0.941162C10.7213 0.941162 12.9544 3.05334 13.157 5.72375C13.0154 5.67529 12.8646 5.64709 12.7064 5.64709C11.9279 5.64709 11.2946 6.2804 11.2946 7.05884V11.7646C11.2946 12.5432 11.9279 13.1765 12.7064 13.1765C12.8722 13.1765 13.0291 13.1426 13.177 13.0898V13.6471C13.177 13.9067 12.9656 14.1177 12.7064 14.1177H9.32556C9.13062 13.571 8.61316 13.1765 8.00049 13.1765C7.22205 13.1765 6.58875 13.8098 6.58875 14.5883C6.58875 15.3667 7.22205 16 8.00049 16C8.61316 16 9.13062 15.6053 9.32556 15.0588H12.7064C13.4849 15.0588 14.1182 14.4255 14.1182 13.6471C14.1182 10.8165 14.1182 8.95129 14.1182 6.11768C14.1182 2.74451 11.3737 0 8.00049 0Z'
                        fill='#7DDAA0'
                      />
                      <path
                        d='M15.0625 6.6748V12.1484C15.609 11.9536 16.0037 11.4362 16.0037 10.8234V7.99988C16.0037 7.38721 15.609 6.86975 15.0625 6.6748Z'
                        fill='#7DDAA0'
                      />
                      <path
                        d='M0 7.99988V10.8234C0 11.4362 0.394653 11.9536 0.941162 12.1484V6.6748C0.394653 6.86975 0 7.38721 0 7.99988Z'
                        fill='#7DDAA0'
                      />
                    </svg>
                  </LeftImg>
                  <RightText resourcetext>
                    <h6>System Status</h6>
                  </RightText>
                </MenuWrap>
              </ListLi>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='108' height='30' viewBox='0 0 108 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='107' y2='7.50001' stroke='#00160E' />
                <line x1='107.5' y1='-2.18557e-08' x2='107.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          <SpanMobileLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/book-demo' ? 'active' : ''}>
            <Link href='/book-demo'>Book Demo</Link>
          </SpanMobileLink>
        </NavigationBlock>
        <HeaderBtnGroup>
          <SignInSignUpBtn>
            <>
              <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                <Link href='https://dashboard.copilot.com'>Login</Link>
              </SignIn>
              <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                <Link href='/book-demo'>Book demo</Link>
              </SignIn>
              <Button
                bgColor={colorList?.buttonColor}
                fontColor={
                  isEnterPrice
                    ? colorList?.fontColor
                    : colorList?.buttontextColor
                    ? colorList?.buttontextColor
                    : '#FFFFFF'
                }
                text={'Start Trial'}
                borderColor={'transparent'}
                href={'https://dashboard.copilot.com/onboarding'}
                hoverColor={'rgba(255, 255, 255, 0.8)'}
                className='hederbtn'
              />
            </>
          </SignInSignUpBtn>
        </HeaderBtnGroup>
      </NavMenu>
    );
  };

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
                  isOpenResoursesSubMenu || isOpenCompanySubMenu || isOpenFeatureSubMenu ? (
                    <BackWrap textColor={colorList?.fontColor} onClick={closeSubMenu}>
                      <SvgIcon>
                        <Image src='/images/moduleback.svg' width={10} height={10} alt='back-icon' />
                      </SvgIcon>
                      <span>Back</span>
                    </BackWrap>
                  ) : (
                    <Link href='/' aria-label={"Navigate to Home"}><CopilotLogo  alt="copilot logo" loading='lazy' width='96' height='21' src={MobileWhiteLogos.src} /></Link>
                  )
                ) : (
                  <Link href='/' aria-label={"Navigate to Home"}><CopilotLogo alt="copilot logo" loading='lazy' width='143' height='31' src={WhiteLogos.src} /></Link>
                )
              ) : isEnterPrice ? (
                mobile ? (
                  isOpenResoursesSubMenu || isOpenCompanySubMenu || isOpenFeatureSubMenu ? (
                    <BackWrap textColor={colorList?.fontColor} onClick={closeSubMenu}>
                      <SvgIcon>
                        <Image src='/images/moduleback.svg' width={10} height={10} alt='back-icon' />
                      </SvgIcon>
                      <span>Back</span>
                    </BackWrap>
                  ) : (
                    <Link href='/' aria-label={"Navigate to Home"}><CopilotLogo alt="copilot logo" loading='lazy' width='96' height='21' src={MobileGreenLogos.src} /></Link>
                  )
                ) : (
                  <Link href='/' aria-label={"Navigate to Home"}><CopilotLogo alt="copilot logo" loading='lazy' width='143' height='31' src={GreenLogos.src} /></Link>
                )
              ) : mobile ? (
                isOpenResoursesSubMenu || isOpenCompanySubMenu || isOpenFeatureSubMenu ? (
                  <BackWrap onClick={closeSubMenu}>
                    <SvgIcon>
                      <Image src='/images/iconback.svg' width={10} height={10} alt='back-icon' />
                    </SvgIcon>
                    <span>Back</span>
                  </BackWrap>
                ) : (
                  <Link href='/' aria-label={"Navigate to Home"}><CopilotLogo alt="copilot logo" loading='lazy' width='96' height='21' src={MobileBlackLogos.src} /></Link>
                )
              ) : (
                <Link href='/' aria-label={"Navigate to Home"}><CopilotLogo alt="copilot logo" loading='lazy' width='143' height='31' src={CopilotLogos.src} /> </Link>
              )}
           
            {isOpenMobileMenu ? (
              <OverLayBlock>
                <MobileNavigation></MobileNavigation>
              </OverLayBlock>
            ) : null}

            {!mobile ? <Navigation className='hide' /> : null}
            <MobileRight>
              <SignInMobile>
                <>
                  <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <Link href='https://dashboard.copilot.com'>Login</Link>
                  </SignIn>
                  <BlackButton
                    textColor={isModule ? colorList?.fontColor : '#FFFFFF'}
                    backgroundColor={colorList?.buttonColor}>
                    <Link href='https://dashboard.copilot.com/onboarding'>Start Trial</Link>
                  </BlackButton>
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
