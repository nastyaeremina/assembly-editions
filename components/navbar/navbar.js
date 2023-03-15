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
  BLOG_LINK,
  COPILOT_DASHBOARD_LINK,
  COPILOT_ONBORADING_LINK,
  COPILOT_SECURITY_LINK,
  COPILOT_SYSTEM_STATUS_LINK,
  HELP_CENTER_LINK
} from '../../constants/externalLinks';
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
  Listleft,
  Listright,
  Drop,
  Last,
  LastDroplist,
  FeatureMenu
} from './styles';
import { HelpLink as LastLink } from '../../styles/homepageStyles';
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
                    Solutions
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
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/pricing' ? 'active' : ''}>
                  <MobileTextLink hoverColor={colorList?.primaryColor} href='/pricing'>
                    Pricing
                  </MobileTextLink>
                </SpanLink>
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
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='#' className='hovernone'>
              Features
            </Link>
            <InnerList features className='innerlist'>
              <FeatureMenu>
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
              </FeatureMenu>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='93' height='30' viewBox='0 0 93 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='92' y2='7.50001' stroke='#00160E' />
                <line x1='92.5' y1='-2.18557e-08' x2='92.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/apps'>Apps</Link>
          </SpanLink>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='#' className='hovernone'>
              Solutions
            </Link>
            <InnerList solution className='innerlist'>
              <Drop>
                <Listleft solutionleft>
                  <ListLi>
                    <MenuWrap href='#'>
                      <LeftImg>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect width='20' height='20' rx='10' fill='#7DDAA0' />
                          <path
                            d='M4.29688 15.293H8.6381M4.29688 14.3034H5.14305H4.29688ZM8.6381 14.3034H7.79193H8.6381ZM7.79193 14.3034V9.2711V14.3034ZM7.79193 14.3034H6.4307H7.79193ZM6.4307 14.3034V9.2711V14.3034ZM6.4307 14.3034H5.14305H6.4307ZM5.14305 14.3034V9.2711V14.3034Z'
                            stroke='white'
                            stroke-width='0.625'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M11.3906 15.279H15.7319M11.3906 14.3438H12.2368H11.3906ZM15.7319 14.3438H14.8857H15.7319ZM14.8857 14.3438V9.27129V14.3438ZM14.8857 14.3438H13.5244H14.8857ZM13.5244 14.3438V9.27129V14.3438ZM13.5244 14.3438H12.2368H13.5244ZM12.2368 14.3438V9.27129V14.3438Z'
                            stroke='white'
                            stroke-width='0.625'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M10.0112 7.24174H4.29688L10.0112 4.7L15.7017 7.24174H10.0112Z'
                            stroke='white'
                            stroke-width='0.625'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M4.29688 8.12871H15.7254'
                            stroke='white'
                            stroke-width='0.625'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Accounting & Finance </h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href='#'>
                      <LeftImg>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect width='20' height='20' rx='10' fill='#7DDAA0' />
                          <g clip-path='url(#clip0_8229_72074)'>
                            <path
                              d='M7.52596 11.0616L6.46596 12.1226L7.87996 13.5366L13.5365 7.87956L12.1225 6.46606L11.061 7.52606L11.7685 8.23306L11.061 8.94106L10.354 8.23356L9.64696 8.94106L10.354 9.64806L9.64696 10.3551L8.93996 9.64806L8.23246 10.3551L8.93996 11.0621L8.23246 11.7696L7.52596 11.0611V11.0616ZM12.476 5.40506L14.597 7.52606C14.6907 7.61982 14.7434 7.74698 14.7434 7.87956C14.7434 8.01214 14.6907 8.1393 14.597 8.23306L8.23296 14.5971C8.13919 14.6908 8.01204 14.7435 7.87946 14.7435C7.74687 14.7435 7.61972 14.6908 7.52596 14.5971L5.40496 12.4761C5.31122 12.3823 5.25856 12.2551 5.25856 12.1226C5.25856 11.99 5.31122 11.8628 5.40496 11.7691L11.769 5.40506C11.8627 5.31133 11.9899 5.25867 12.1225 5.25867C12.255 5.25867 12.3822 5.31133 12.476 5.40506ZM11.061 13.1826L11.7685 12.4756L12.8895 13.5971H13.5965V12.8901L12.4755 11.7686L13.1825 11.0616L14.501 12.3796V14.5011H12.38L11.0615 13.1826H11.061ZM6.81896 8.94006L5.40446 7.52606C5.35797 7.47962 5.32109 7.42448 5.29593 7.36378C5.27076 7.30308 5.25781 7.23802 5.25781 7.17231C5.25781 7.1066 5.27076 7.04154 5.29593 6.98084C5.32109 6.92014 5.35797 6.865 5.40446 6.81856L6.81896 5.40456C6.91272 5.31083 7.03987 5.25817 7.17246 5.25817C7.30504 5.25817 7.43219 5.31083 7.52596 5.40456L8.94096 6.81856L8.23296 7.52606L7.17246 6.46506L6.46546 7.17256L7.52596 8.23256L6.81896 8.94006Z'
                              fill='white'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_8229_72074'>
                              <rect width='12' height='12' fill='white' transform='translate(4 4)' />
                            </clipPath>
                          </defs>
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Consulting</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href='#'>
                      <LeftImg>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect width='20' height='20' rx='10' fill='#7DDAA0' />
                          <path
                            d='M4.93515 11.4938H7.76982C7.8496 11.4938 7.92505 11.461 7.97986 11.4044C8.03451 11.3479 8.06434 11.2724 8.06434 11.1947V8.26786C8.06434 8.19014 8.03451 8.11463 7.97986 8.05817C7.92505 8.00154 7.8496 7.96875 7.76982 7.96875H4.93515C4.85536 7.96875 4.77992 8.00154 4.7251 8.05817C4.67046 8.11463 4.64062 8.19014 4.64062 8.26786V11.1947C4.64062 11.2724 4.67046 11.3479 4.7251 11.4044C4.77992 11.461 4.85536 11.4938 4.93515 11.4938ZM7.47529 8.56696V10.8956H5.22968V8.56696H7.47529Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.3125'
                          />
                          <path
                            d='M12.4352 8.36882H15.2698C15.3496 8.36882 15.4251 8.33603 15.4799 8.2794C15.5345 8.22295 15.5643 8.14743 15.5643 8.06971V5.14286C15.5643 5.06514 15.5345 4.98963 15.4799 4.93317C15.4251 4.87654 15.3496 4.84375 15.2698 4.84375H12.4352C12.3554 4.84375 12.2799 4.87654 12.2251 4.93317C12.1705 4.98963 12.1406 5.06514 12.1406 5.14286V8.06971C12.1406 8.14743 12.1705 8.22294 12.2251 8.2794C12.2799 8.33603 12.3554 8.36882 12.4352 8.36882ZM14.9753 5.44196V7.77061H12.7297V5.44196H14.9753Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.3125'
                          />
                          <path
                            d='M15.2698 15.1559H12.4352C12.3554 15.1559 12.2799 15.1231 12.2251 15.0665C12.1705 15.0101 12.1406 14.9345 12.1406 14.8568V11.93C12.1406 11.8523 12.1705 11.7767 12.2251 11.7203M15.2698 15.1559L12.2251 11.7203M15.2698 15.1559C15.3496 15.1559 15.425 15.1231 15.4799 15.0665C15.5345 15.0101 15.5643 14.9345 15.5643 14.8568V11.93C15.5643 11.8523 15.5345 11.7767 15.4799 11.7203C15.425 11.6637 15.3496 11.6309 15.2698 11.6309H12.4352C12.3554 11.6309 12.2799 11.6637 12.2251 11.7203M15.2698 15.1559L12.2251 11.7203M14.9753 12.2291V14.5577H12.7297V12.2291H14.9753Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.3125'
                          />
                          <path
                            d='M12.151 13.9062H10.5365C10.4522 13.9062 10.3772 13.8671 10.3259 13.8075C10.2753 13.7486 10.25 13.6732 10.25 13.5985V6.40145C10.25 6.32684 10.2753 6.25139 10.3259 6.1925M12.151 13.9062L10.3259 6.1925M12.151 13.9062C12.2353 13.9062 12.3103 13.8671 12.3616 13.8075C12.4122 13.7486 12.4375 13.6732 12.4375 13.5985C12.4375 13.5239 12.4122 13.4485 12.3616 13.3896C12.3103 13.33 12.2353 13.2908 12.151 13.2908H10.8229V6.70916H12.151C12.2353 6.70916 12.3103 6.67003 12.3616 6.61041M12.151 13.9062L12.3616 6.61041M10.3259 6.1925C10.3772 6.13287 10.4522 6.09375 10.5365 6.09375H12.151C12.2353 6.09375 12.3103 6.13287 12.3616 6.1925M10.3259 6.1925L12.3616 6.1925M12.3616 6.1925C12.4122 6.25139 12.4375 6.32683 12.4375 6.40145C12.4375 6.47607 12.4122 6.55152 12.3616 6.61041M12.3616 6.1925L12.3616 6.61041'
                            fill='white'
                            stroke='white'
                            stroke-width='0.3125'
                          />
                          <path
                            d='M10.2327 10H8.07978C8.03375 10 7.98962 9.96708 7.95707 9.90847C7.92453 9.84987 7.90625 9.77038 7.90625 9.6875C7.90625 9.60462 7.92453 9.52513 7.95707 9.46653C7.98962 9.40792 8.03375 9.375 8.07978 9.375H10.2327C10.2787 9.375 10.3229 9.40792 10.3554 9.46653C10.388 9.52513 10.4062 9.60462 10.4062 9.6875C10.4062 9.77038 10.388 9.84987 10.3554 9.90847C10.3229 9.96708 10.2787 10 10.2327 10Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.25'
                          />
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Marketing</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                </Listleft>
                <Listright solutionright>
                  <ListLi>
                    <MenuWrap href='#'>
                      <LeftImg>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect width='20' height='20' rx='10' fill='#7DDAA0' />
                          <path
                            d='M13.193 5.01956C11.9565 5.10946 10.7961 5.48273 9.87402 6.08466C9.34462 6.43057 8.72145 6.98169 8.24088 7.53085L8.13344 7.65202L7.37157 7.71261C6.59993 7.77319 6.51202 7.78492 6.37918 7.85332C6.21899 7.93344 6.12718 8.0507 5.6095 8.83438C5.32428 9.26433 5.07423 9.65129 5.05079 9.69428C5.01953 9.75487 5.00781 9.80959 5.00781 9.92098C5.00781 10.048 5.01563 10.0812 5.06446 10.1711C5.13284 10.2923 5.23442 10.3802 5.35358 10.4193C5.40047 10.435 5.70131 10.4877 6.02364 10.5366C6.34597 10.5854 6.62337 10.6304 6.64095 10.6363C6.66635 10.6441 6.67221 10.6753 6.67026 10.8161C6.6683 11.0252 6.70737 11.1483 6.82458 11.3027C6.86951 11.3652 7.31101 11.8167 7.8033 12.3072C8.76443 13.2629 8.78005 13.2746 9.02229 13.3215C9.08089 13.3332 9.18052 13.3371 9.24108 13.3313C9.34657 13.3176 9.35243 13.3195 9.36416 13.3645C9.37002 13.3879 9.41299 13.6694 9.46183 13.986C9.51067 14.3026 9.56341 14.5996 9.57904 14.6465C9.61811 14.7657 9.70602 14.8674 9.82714 14.9358C9.917 14.9846 9.95021 14.9924 10.0772 14.9924C10.1885 14.9924 10.2432 14.9807 10.3038 14.9494C10.3487 14.926 10.7355 14.6739 11.1633 14.3905C11.9487 13.8726 12.062 13.7827 12.144 13.6205C12.2124 13.4857 12.2261 13.3997 12.2847 12.6277L12.3433 11.8655L12.4663 11.758C12.5328 11.6994 12.7125 11.5294 12.8668 11.3769C13.8729 10.392 14.4492 9.40309 14.7656 8.12106C14.9102 7.53476 14.9766 7.02664 14.9942 6.35436C15.0118 5.66057 14.9747 5.47491 14.7774 5.25603C14.6621 5.129 14.4941 5.04301 14.3066 5.01565C14.1444 4.99415 13.5212 4.99415 13.193 5.01956ZM14.3105 5.62149C14.3984 5.68012 14.4042 5.71529 14.4023 6.24492C14.4003 6.95433 14.33 7.49763 14.1581 8.13278C13.867 9.21352 13.3689 10.05 12.4995 10.9177C11.9662 11.4532 11.4134 11.8655 10.7844 12.1997L10.6418 12.274L9.18443 10.8161L7.72711 9.35814L7.80134 9.21352C8.1139 8.61159 8.54563 8.03116 9.08089 7.49763C9.39346 7.18494 9.60639 6.99928 9.92872 6.7589C10.759 6.14524 11.7846 5.7622 12.9586 5.63321C13.3396 5.59022 13.3943 5.58826 13.8572 5.59022C14.1815 5.59217 14.2773 5.59804 14.3105 5.62149ZM7.55911 8.45915C7.25631 8.94187 7.01212 9.46367 6.8617 9.94443C6.83435 10.0343 6.81872 10.0578 6.78747 10.0578C6.73472 10.0558 5.64075 9.88776 5.63294 9.87799C5.61926 9.86431 6.58039 8.42593 6.62532 8.39075C6.66439 8.36144 6.75035 8.34776 7.10003 8.31844C7.33445 8.30085 7.56106 8.28327 7.60013 8.28131L7.67241 8.27936L7.55911 8.45915ZM8.77615 11.2284L10.0616 12.5163L9.87988 12.5769C9.63374 12.657 9.28797 12.7391 9.17466 12.743L9.08089 12.745L8.1686 11.8303L7.25436 10.9177L7.25826 10.8141C7.26217 10.7008 7.37547 10.2278 7.44189 10.0519C7.46534 9.99134 7.48487 9.94053 7.48683 9.94053C7.48683 9.94053 8.06702 10.519 8.77615 11.2284ZM11.681 12.8368C11.6595 13.1026 11.6341 13.3371 11.6205 13.3586C11.6009 13.3977 10.1338 14.3827 10.1202 14.3671C10.1104 14.3573 9.94044 13.2648 9.94044 13.214C9.94044 13.1808 9.97951 13.1612 10.1827 13.0928C10.6183 12.9463 11.1165 12.7059 11.5267 12.4479C11.6263 12.3834 11.7103 12.3385 11.7142 12.3443C11.7162 12.3522 11.7025 12.573 11.681 12.8368Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.25'
                          />
                          <path
                            d='M11.6604 6.69612C10.9396 6.78993 10.3906 7.41531 10.3906 8.14036C10.3926 8.57422 10.5489 8.93576 10.8653 9.22696C11.0333 9.3833 11.3166 9.52988 11.551 9.58069C11.7542 9.62368 12.0804 9.61 12.2758 9.54942C12.7563 9.39894 13.1255 9.01589 13.2642 8.52145C13.3189 8.32797 13.3248 8.00551 13.276 7.80617C13.1334 7.21988 12.645 6.78211 12.0433 6.69807C11.8792 6.67462 11.8226 6.67462 11.6604 6.69612ZM12.0042 7.28437C12.4633 7.3684 12.7974 7.83353 12.7192 8.27911C12.6372 8.74033 12.2523 9.04521 11.7874 9.01785C11.3498 8.99049 11.004 8.64066 10.9806 8.2068C10.9571 7.75731 11.2345 7.38599 11.6682 7.29219C11.8186 7.25896 11.8616 7.25896 12.0042 7.28437Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.3125'
                          />
                          <path
                            d='M6.15558 11.721C6.12823 11.7308 5.86646 11.979 5.57343 12.2721C4.99519 12.8506 4.97956 12.8701 5.02254 13.0265C5.04793 13.1203 5.15147 13.216 5.24524 13.2336C5.3937 13.263 5.41129 13.2493 5.96804 12.6982C6.25716 12.4128 6.5033 12.1509 6.51893 12.1158C6.62247 11.8734 6.39586 11.6272 6.15558 11.721Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.25'
                          />
                          <path
                            d='M7.00235 12.6101C6.91835 12.6531 5.08205 14.4902 5.03712 14.5762C5.01758 14.6172 5 14.6758 5 14.709C5 14.8068 5.06837 14.9182 5.15628 14.9631C5.252 15.012 5.3321 15.012 5.42587 14.9651C5.46494 14.9436 5.92597 14.498 6.44951 13.9723C7.47511 12.9443 7.4458 12.9775 7.41455 12.8055C7.38134 12.6257 7.16645 12.5241 7.00235 12.6101Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.25'
                          />
                          <path
                            d='M7.86518 13.4956C7.83393 13.5151 7.57606 13.7633 7.29476 14.0467C6.86303 14.4845 6.78294 14.5744 6.77122 14.635C6.73019 14.8519 6.92164 15.0395 7.12676 14.9848C7.23225 14.9555 8.27347 13.9119 8.29496 13.8142C8.32231 13.6793 8.2637 13.5484 8.14844 13.4878C8.0703 13.4467 7.93551 13.4506 7.86518 13.4956Z'
                            fill='white'
                            stroke='white'
                            stroke-width='0.25'
                          />
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Technology</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href='#'>
                      <LeftImg>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect width='20' height='20' rx='10' fill='#7DDAA0' />
                          <path
                            d='M4.91769 9.6244L4.9177 9.62439L6.83763 7.95017L6.85562 7.93448V7.9106V5.525C6.85562 5.39969 6.90541 5.2795 6.99402 5.19089C7.08263 5.10228 7.20281 5.0525 7.32812 5.0525H14.6781C14.8034 5.0525 14.9236 5.10228 15.0122 5.19089C15.1008 5.2795 15.1506 5.39969 15.1506 5.525V13.925C15.1506 14.0503 15.1008 14.1705 15.0122 14.2591C14.9236 14.3477 14.8034 14.3975 14.6781 14.3975H5.22812C5.10281 14.3975 4.98263 14.3477 4.89402 14.2591C4.80541 14.1705 4.75563 14.0503 4.75563 13.925V9.98068C4.75562 9.91315 4.77008 9.84642 4.79804 9.78497C4.82599 9.72351 4.86679 9.66876 4.91769 9.6244ZM8.32562 13.4V13.4525H8.37812H9.95312H10.0056V13.4V10.2196V10.1957L9.98763 10.18L7.88763 8.34878L7.85312 8.31869L7.81862 8.34878L5.71862 10.18L5.70062 10.1957V10.2196V13.4V13.4525H5.75312H7.32812H7.38063V13.4V11.3525H8.32562V13.4ZM10.9506 13.4V13.4525H11.0031H14.1531H14.2056V13.4V6.05V5.9975H14.1531H7.85312H7.80062V6.05V7.16667V7.21917H7.85312C7.96375 7.21917 8.07468 7.25792 8.16342 7.33581L8.16355 7.33592L10.7885 9.6244L10.7886 9.6244C10.8395 9.66876 10.8803 9.72351 10.9082 9.78497C10.9362 9.84642 10.9506 9.91315 10.9506 9.98067V13.4ZM12.1056 9.2525H13.0506V10.1975H12.1056V9.2525ZM12.1056 11.3525H13.0506V12.2975H12.1056V11.3525ZM12.1056 7.1525H13.0506V8.0975H12.1056V7.1525ZM10.0056 7.1525H10.9506V8.0975H10.0056V7.1525Z'
                            fill='white'
                            stroke='#7DDAA0'
                            stroke-width='0.105'
                          />
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Real Estate</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href='#'>
                      <LeftImg>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <rect width='20' height='20' rx='10' fill='#7DDAA0' />
                          <g clip-path='url(#clip0_8229_72105)'>
                            <path
                              d='M7.5 13.9998H12.5'
                              stroke='white'
                              stroke-width='0.818182'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M7 7.00035L10 6.50035L13 7.00035'
                              stroke='white'
                              stroke-width='0.818182'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M10 5.5V14'
                              stroke='white'
                              stroke-width='0.818182'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M8.5 10L7 7L5.5 10C5.5 10.3978 5.65804 10.7794 5.93934 11.0607C6.22064 11.342 6.60218 11.5 7 11.5C7.39782 11.5 7.77936 11.342 8.06066 11.0607C8.34196 10.7794 8.5 10.3978 8.5 10Z'
                              stroke='white'
                              stroke-width='0.818182'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M14.5 10L13 7L11.5 10C11.5 10.3978 11.658 10.7794 11.9393 11.0607C12.2206 11.342 12.6022 11.5 13 11.5C13.3978 11.5 13.7794 11.342 14.0607 11.0607C14.342 10.7794 14.5 10.3978 14.5 10Z'
                              stroke='white'
                              stroke-width='0.818182'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_8229_72105'>
                              <rect width='12' height='12' fill='white' transform='translate(4 4)' />
                            </clipPath>
                          </defs>
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Legal</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                </Listright>
              </Drop>
              <LastDroplist>
                <Last className='icon-link'>
                  <a href={'#'} className='learn-link mb0'>
                    View All Solutions
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
                  </a>
                </Last>
              </LastDroplist>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='101' height='30' viewBox='0 0 101 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='100' y2='7.50001' stroke='#00160E' />
                <line x1='100.5' y1='-2.18557e-08' x2='100.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='#' className='hovernone'>
              Resources
            </Link>
            <InnerList company className='innerlist'>
              {/* dropdownlist */}
              <Drop>
                <Listleft>
                  <ListLi>
                    <MenuWrap href={HELP_CENTER_LINK}>
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
                    <MenuWrap href='/brand'>
                      <LeftImg>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <mask id='mask0_8095_44108' maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
                            <path d='M16 0H0V16H16V0Z' fill='white' />
                          </mask>
                          <g mask='url(#mask0_8095_44108)'>
                            <path
                              d='M8 0.00104523C3.58219 0.00104523 0 3.58253 0 8.0007C0 12.4189 3.58184 16.0003 8 16.0003C12.4186 16.0003 16 12.4189 16 8.0007C16 3.58253 12.4186 0.00104523 8 0.00104523ZM8 2.39304C9.46182 2.39304 10.6464 3.57796 10.6464 5.03909C10.6464 6.50056 9.46182 7.68513 8 7.68513C6.53887 7.68513 5.3543 6.50056 5.3543 5.03909C5.3543 3.57796 6.53887 2.39304 8 2.39304ZM7.99824 13.9088C6.54028 13.9088 5.20495 13.3778 4.175 12.499C3.9241 12.285 3.77932 11.9712 3.77932 11.6419C3.77932 10.1601 4.97866 8.97407 6.46086 8.97407H9.53984C11.0224 8.97407 12.2172 10.1601 12.2172 11.6419C12.2172 11.9715 12.0731 12.2846 11.8219 12.4987C10.7922 13.3778 9.45656 13.9088 7.99824 13.9088Z'
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
                  {/* <ListLi>
                  <MenuWrap href={'/blog'}>
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
                </ListLi> */}
                </Listleft>
                <Listright>
                  <ListLi>
                    <MenuWrap href={'/updates'}>
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
                    <MenuWrap href={COPILOT_SECURITY_LINK}>
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
                    <MenuWrap href={COPILOT_SYSTEM_STATUS_LINK}>
                      <LeftImg>
                        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M8.51048 6.26787C8.05028 6.22242 7.58729 6.32033 7.18489 6.54819C6.78248 6.77604 6.46034 7.12271 6.26257 7.54073C6.0648 7.95875 6.00107 8.42768 6.08009 8.88332C6.15912 9.33896 6.37705 9.75904 6.70404 10.086C7.03103 10.413 7.4511 10.631 7.90673 10.71C8.36236 10.789 8.83128 10.7253 9.24928 10.5275C9.66729 10.3297 10.014 10.0076 10.2418 9.60518C10.4697 9.20277 10.5676 8.73976 10.5221 8.27956C10.4703 7.76366 10.2417 7.28154 9.87509 6.91491C9.50847 6.54828 9.02636 6.31969 8.51048 6.26787ZM13.911 8.5C13.9096 8.7438 13.8917 8.98723 13.8574 9.22862L15.4418 10.4714C15.5108 10.5286 15.5573 10.6084 15.573 10.6966C15.5888 10.7848 15.5727 10.8758 15.5277 10.9533L14.0288 13.5467C13.9833 13.6235 13.9121 13.6817 13.8279 13.7111C13.7436 13.7406 13.6517 13.7393 13.5683 13.7076L11.9947 13.0739C11.908 13.0394 11.814 13.0269 11.7212 13.0376C11.6284 13.0483 11.5397 13.0819 11.4631 13.1353C11.2229 13.3007 10.9706 13.4476 10.7082 13.5748C10.6257 13.6149 10.5544 13.6746 10.5005 13.7489C10.4465 13.8231 10.4117 13.9094 10.3991 14.0002L10.1632 15.6786C10.1478 15.7673 10.102 15.8478 10.0337 15.9064C9.96542 15.965 9.87891 15.9981 9.78895 16H6.79113C6.70265 15.9985 6.61734 15.9668 6.54924 15.9103C6.48114 15.8538 6.43431 15.7758 6.41649 15.6891L6.18098 14.0132C6.16775 13.9214 6.13204 13.8342 6.07701 13.7595C6.02199 13.6848 5.94935 13.6248 5.86557 13.5849C5.6035 13.4584 5.352 13.3111 5.11348 13.1444C5.03711 13.0913 4.94873 13.058 4.85628 13.0475C4.76384 13.037 4.67025 13.0497 4.58394 13.0845L3.01073 13.7178C2.92736 13.7495 2.83546 13.7508 2.75122 13.7215C2.66698 13.6921 2.5958 13.6339 2.55023 13.5572L1.05131 10.9638C1.00625 10.8863 0.990146 10.7953 1.00587 10.7071C1.02159 10.6188 1.06812 10.539 1.13718 10.4819L2.47628 9.43049C2.54964 9.37225 2.6073 9.29661 2.64402 9.21044C2.68074 9.12427 2.69536 9.03029 2.68656 8.93703C2.67394 8.79089 2.66623 8.64509 2.66623 8.49895C2.66623 8.3528 2.67359 8.20911 2.68656 8.06612C2.6944 7.97343 2.67906 7.88025 2.64193 7.79496C2.60479 7.70968 2.54702 7.63497 2.47383 7.57757L1.13542 6.52617C1.06749 6.46872 1.02194 6.38921 1.00676 6.30155C0.991569 6.21389 1.00772 6.12368 1.05237 6.04673L2.55128 3.45327C2.5968 3.37651 2.66795 3.31829 2.7522 3.28886C2.83644 3.25943 2.92837 3.26069 3.01178 3.29241L4.58534 3.92605C4.67212 3.9606 4.76611 3.97309 4.85889 3.96238C4.95168 3.95168 5.04036 3.91812 5.11699 3.86472C5.35714 3.69934 5.60949 3.55242 5.87187 3.42523C5.95436 3.38514 6.02571 3.32535 6.07962 3.25115C6.13353 3.17695 6.16834 3.09061 6.18098 2.99977L6.41684 1.32138C6.43233 1.23274 6.47812 1.15223 6.54639 1.09361C6.61466 1.03499 6.70117 1.0019 6.79113 1H9.78895C9.87743 1.00153 9.96274 1.03315 10.0308 1.08966C10.0989 1.14617 10.1458 1.22419 10.1636 1.31086L10.3991 2.9868C10.4123 3.07864 10.448 3.1658 10.5031 3.24052C10.5581 3.31523 10.6307 3.37519 10.7145 3.41507C10.9766 3.54157 11.2281 3.68889 11.4666 3.85561C11.543 3.90874 11.6314 3.94204 11.7238 3.9525C11.8162 3.96297 11.9098 3.95026 11.9961 3.91554L13.5693 3.28224C13.6527 3.25049 13.7446 3.24919 13.8289 3.27855C13.9131 3.30791 13.9843 3.36606 14.0299 3.44276L15.5288 6.03621C15.5738 6.1137 15.5899 6.20466 15.5742 6.29291C15.5585 6.38116 15.512 6.46096 15.4429 6.51811L14.1038 7.56951C14.0301 7.62756 13.9721 7.70311 13.9351 7.7893C13.8981 7.87548 13.8832 7.96956 13.8918 8.06297C13.9033 8.20806 13.911 8.35386 13.911 8.5Z'
                            fill='#7DDAA0'
                          />
                        </svg>
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>System Status</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href={'/jobs'}>
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
                </Listright>
              </Drop>
              {/* <LastDroplist>
                <Last className='icon-link'>
                  <p>Read our blog</p>
                  <svg class='HoverArrow' width='10' height='10' viewBox='0 0 10 10' aria-hidden='true'>
                    <g fill-rule='evenodd'>
                      <path class='HoverArrow__linePath' d='M0 5h7'></path>
                      <path class='HoverArrow__tipPath' d='M1 1l4 4-4 4'></path>
                    </g>
                  </svg>
                  <svg
                    width='8'
                    height='14'
                    viewBox='0 0 8 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    class='mobilearrow'>
                    <path
                      d='M2 3L6 7L2 11'
                      stroke='#131313'
                      stroke-width='1.85714'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </Last>
              </LastDroplist> */}
              <LastDroplist>
                <Last className='icon-link'>
                  <a href={BLOG_LINK} className='learn-link mb0'>
                    Read our blog
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
                    {/* <svg width='8' height='12' viewBox='0 0 8 12' fill='none' class='mobilearrow'>
                      <path
                        d='M2 3L6 7L2 11'
                        stroke='#09AA6C'
                        stroke-width='1.85714'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg> */}
                  </a>
                </Last>
              </LastDroplist>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='108' height='30' viewBox='0 0 108 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='107' y2='7.50001' stroke='#00160E' />
                <line x1='107.5' y1='-2.18557e-08' x2='107.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/pricing'>Pricing</Link>
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
                <Link href={COPILOT_DASHBOARD_LINK}>Log in</Link>
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
                href={COPILOT_ONBORADING_LINK}
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
                isOpenResoursesSubMenu || isOpenCompanySubMenu || isOpenFeatureSubMenu ? (
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
              isOpenResoursesSubMenu || isOpenCompanySubMenu || isOpenFeatureSubMenu ? (
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
              <SignInMobile>
                <>
                  <SignIn textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <Link href={COPILOT_DASHBOARD_LINK}>Log in</Link>
                  </SignIn>
                  <BlackButton
                    textColor={isModule ? colorList?.fontColor : '#FFFFFF'}
                    backgroundColor={colorList?.buttonColor}>
                    <Link href={COPILOT_ONBORADING_LINK}>Start trial</Link>
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
