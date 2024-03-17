'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import CopilotLogos from 'public/images/blacklogo.svg';
import GreenLogos from 'public/images/greenlogo.svg';
import WhiteLogos from 'public/images/whitelogo.svg';
import MobileBlackLogos from 'public/images/mobileblacklogo.svg';
import MobileWhiteLogos from 'public/images/whitemobilelogo.svg';
import MobileGreenLogos from 'public/images/greenmblogo.svg';
import plateformmake from 'public/images/plateformmake.svg';
import SVGComponent from 'public/images/svg/SVGComponent';
import plateformhome from 'public/images/plateformhome.svg';
import plateformapps from 'public/images/plateformapps.svg';
import plateformzapier from 'public/images/plateformzapier.svg';
import { BlackButton, Container } from '../../styles/commonStyles';
import { GUIDE_LINK_INFO, HEADER_LIST, FEATURE_THEME_LIST, NAVBAR_COLOR_LIST } from '../../constants/constant';
import useMobileDevice from '../../hooks/useMobileDevice';
import { isEmpty } from '../../helpers/helpers';
import Button from '../button/button';
import {
  COPILOT_DASHBOARD_LINK,
  COPILOT_ONBORADING_LINK,
  COPILOT_SECURITY_LINK,
  COPILOT_SYSTEM_STATUS_LINK,
  OPEN_COPILOT_LINK
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
  TopBar,
  AnnounceBar,
  HelpLink,
  Dspace,
  Listleft,
  Listright,
  Drop,
  Last,
  LastDroplist,
  DropDownHeading,
  BorderLine,
  FeatureDropdown,
  Dropdown
} from './styles';
import FeatureSubMenu from './featuresubmenu';
import ResourcesSubMenu from './resourcessubmenu';
import SolutionSubMenu from './solutionsubmenu';
import { COPILOT_REFERENCE_API_LINK } from '../../constants/externalLinks';

const PlateformData = [
  {
    href: 'https://docs.copilot.com/',
    plateformIcon: plateformhome,
    plateformname: 'Developer Home',
    plateformDescription: 'Resources for developers'
  },
  {
    href: 'https://docs.copilot.com/docs/',
    plateformIcon: plateformapps,
    plateformname: 'Custom Apps',
    plateformDescription: 'Build apps on our platform'
  },
  {
    href: 'https://zapier.com/apps/copilot/integrations',
    plateformIcon: plateformzapier,
    plateformname: 'Copilot on Zapier',
    plateformDescription: 'Discover Zapier automations'
  },
  {
    href: 'https://www.make.com/en/integrations/copilot',
    plateformIcon: plateformmake,
    plateformname: 'Copilot on Make',
    plateformDescription: 'Discover Make automations'
  }
];
export default function NavbarComponent({
  isModule,
  headerIndex,
  isEnterPrice,
  isAuthenticated: userAuth,
  solutionDataList: navbarSolutionList,
  topbarContent,
  navbarColorList,
  featureData
}) {
  const mobile = useMobileDevice();
  const router = useRouter();
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenFeatureSubMenu, setIsOpenFeatureSubMenu] = useState(false);
  const [isOpenSolutionSubMenu, setIsOpenSolutionSubMenu] = useState(false);
  const [isOpenResoursesSubMenu, setIsOpenResoursesSubMenu] = useState(false);
  var colorList = NAVBAR_COLOR_LIST[0];
  if (navbarColorList) colorList = navbarColorList;
  else if (headerIndex) colorList = NAVBAR_COLOR_LIST[headerIndex];
  else colorList = NAVBAR_COLOR_LIST[HEADER_LIST.DEFAULT];
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

  const [isAppsSubmenu, setIsAppsSubmenu] = useState(false);
  const [isPlatformSubmenu, setIsPlatformSubmenu] = useState(false);
  const [isIndustriesSubmenu, setIsIndustriesSubmenu] = useState(false);
  const [isUseCaseSubmenu, setIsUseCaseSubSubmenu] = useState(false);

  const renderSolutionList = useCallback((list) => {
    return list?.map((item, index) => {
      return (
        <ListLi key={`solutionlistview_index_${index}`}>
          <MenuWrap href={`/solutions/${item?.slug}`}>
            {!isEmpty(item?.industryIcon?.url) && (
              <LeftImg>
                <Image src={item?.industryIcon?.url} alt='hybridright' width={20} height={20} className='hover-image' />
              </LeftImg>
            )}
            <RightText resourcetext>
              <h6>{item?.name} </h6>
            </RightText>
          </MenuWrap>
        </ListLi>
      );
    });
  }, []);

  const renderFeaturePlateform = useMemo(() => {
    return PlateformData?.map((item, index) => {
      return (
        <ListLi key={`feature_navbar_index_${index}`}>
          <MenuWrap href={item?.href}>
            <LeftImg>
              <Image src={item?.plateformIcon} alt='msg-icon' width={32} height={32} />
            </LeftImg>
            <RightText>
              <h5>{item?.plateformname}</h5>
              <span>{item?.plateformDescription}</span>
            </RightText>
          </MenuWrap>
        </ListLi>
      );
    });
  }, []);

  const renderSolutionMenu = useMemo(() => {
    if (isEmpty(navbarSolutionList)) return null;
    const solutionCount = navbarSolutionList.length;
    const totlItemInPart = solutionCount % 2 === 0 ? solutionCount / 2 : solutionCount / 2 + 1;

    const evenList = navbarSolutionList?.slice(0, totlItemInPart);
    const oddList = navbarSolutionList?.slice(totlItemInPart);
    return (
      <Drop>
        <div style={{ width: '100%' }}>
          <DropDownHeading>Industries</DropDownHeading>
          <Listleft solutionleft>{renderSolutionList(navbarSolutionList)}</Listleft>
        </div>
      </Drop>
    );
  }, [navbarSolutionList, renderSolutionList]);

  const MobileNavigation = useMemo(() => {
    return (
      <>
        <NavMenu mobile={mobile} isBoxShadow>
          <NavigationBlock>
            {isOpenFeatureSubMenu ? (
              // <FeatureSubMenu data={featureData} mobile={mobile} />
              <>
                <>
                  <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                    <MobileText
                      onClick={() => {
                        setIsAppsSubmenu(!isAppsSubmenu);
                        setIsPlatformSubmenu(false);
                      }}>
                      Apps
                      <SVGComponent
                        name='dropdown-icon'
                        width='12'
                        height='12'
                        fill='none'
                        viewBox='12'
                        className={isAppsSubmenu ? 'open-icon' : 'close-icon'}
                      />
                    </MobileText>
                  </SpanLink>
                  <Dropdown className={isAppsSubmenu ? 'open' : ''} style={{ height: 438 }}>
                    {isAppsSubmenu ? (
                      <>
                        <FeatureSubMenu data={featureData} mobile={mobile} />
                      </>
                    ) : (
                      <></>
                    )}
                  </Dropdown>
                </>
                <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                  <MobileText
                    onClick={() => {
                      setIsPlatformSubmenu(!isPlatformSubmenu);
                      setIsAppsSubmenu(false);
                    }}>
                    Platform
                    <SVGComponent
                      name='dropdown-icon'
                      width='12'
                      height='12'
                      fill='none'
                      viewBox='12'
                      className={isPlatformSubmenu ? 'open-icon' : 'close-icon'}
                    />
                  </MobileText>
                </SpanLink>
                <Dropdown className={isPlatformSubmenu ? 'open' : ''} style={{ height: 309 }}>
                  {isPlatformSubmenu ? (
                    <>
                      {renderFeaturePlateform}
                      <LastDroplist>
                        <Last className='icon-link'>
                          <a href={COPILOT_REFERENCE_API_LINK} className='learn-link mb0'>
                            Go to API reference
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
                    </>
                  ) : (
                    <></>
                  )}
                </Dropdown>
              </>
            ) : isOpenSolutionSubMenu ? (
              <>
                <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
                  <MobileText
                    onClick={() => {
                      setIsIndustriesSubmenu(!isIndustriesSubmenu);
                      setIsPlatformSubmenu(false);
                    }}>
                    Industries
                    <SVGComponent
                      name='dropdown-icon'
                      width='12'
                      height='12'
                      fill='none'
                      viewBox='12'
                      className={isIndustriesSubmenu ? 'open-icon' : 'close-icon'}
                    />
                  </MobileText>
                </SpanLink>
                <Dropdown className={isIndustriesSubmenu ? 'open' : ''} style={{ height: 390 }}>
                  {isIndustriesSubmenu ? <SolutionSubMenu data={navbarSolutionList} mobile={mobile} /> : <></>}
                </Dropdown>
                <LastDroplist Mobilemenu isSolutionmenu>
                  <Last className='icon-link'>
                    <a href={'/customers/'} className='learn-link mb0'>
                      Meet our customers
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
              </>
            ) : isOpenResoursesSubMenu ? (
              <ResourcesSubMenu mobile={mobile} />
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
                {/* <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/apps' ? 'active' : ''}>
                  <MobileTextLink href='/apps' hoverColor={colorList?.primaryColor}>
                    Apps
                  </MobileTextLink>
                </SpanLink> */}
                {/* <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/automations' ? 'active' : ''}>
                  <MobileTextLink href='/automations' hoverColor={colorList?.primaryColor}>
                    Automations
                  </MobileTextLink>
                </SpanLink> */}
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/features' ? 'active' : ''}>
                  <MobileText
                    onClick={() => {
                      setIsOpenSolutionSubMenu(true);
                    }}>
                    Solutions
                  </MobileText>
                </SpanLink>
                <SpanLink
                  textColor={colorList?.fontColor}
                  hoverColor={colorList?.primaryColor}
                  className={router.pathname === '/templates' ? 'active' : ''}>
                  <MobileTextLink href='/templates' hoverColor={colorList?.primaryColor}>
                    Templates
                  </MobileTextLink>
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
  }, [
    colorList?.fontColor,
    colorList?.primaryColor,
    featureData,
    isAppsSubmenu,
    isIndustriesSubmenu,
    isOpenFeatureSubMenu,
    isOpenResoursesSubMenu,
    isOpenSolutionSubMenu,
    isPlatformSubmenu,
    mobile,
    navbarSolutionList,
    renderFeaturePlateform,
    router.pathname
  ]);
  const renderFeatureView = useMemo(() => {
    return featureData?.map((item, index) => {
      const colorList = FEATURE_THEME_LIST[item?.theme].colorList;

      return (
        <ListLi key={`feature_navbar_index_${index}`}>
          <MenuWrap darkColor={colorList.dark} lightColor={colorList.light} href={`/features/${item?.slug}`}>
            <LeftImg>
              <Image src={item?.featureIcon?.url} alt='msg-icon' width={32} height={32} />
            </LeftImg>
            <RightText>
              <h5>{item?.name}</h5>
              <span>{item?.navbarDescription}</span>
            </RightText>
          </MenuWrap>
        </ListLi>
      );
    });
  }, [featureData]);

  const Navigation = () => {
    return (
      <NavMenu mobile={mobile}>
        <NavigationBlock>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='#' className='hovernone'>
              Features
            </Link>
            {/* <InnerList features className='innerlist'>
              <FeatureMenu>{renderFeatureView}</FeatureMenu>
            </InnerList> */}
            <InnerList solution className='innerlist'>
              <Drop>
                <FeatureDropdown>
                  <div>
                    <DropDownHeading isFeatureWidth>Apps</DropDownHeading>
                    <Listright solutionright>{renderFeatureView}</Listright>
                  </div>
                  <LastDroplist>
                    <Last className='icon-link'>
                      <a href={'/apps/directory'} className='learn-link mb0'>
                        Go to app directory
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
                </FeatureDropdown>
                <FeatureDropdown>
                  <div>
                    <DropDownHeading isFeatureWidth>Platform</DropDownHeading>
                    <Listright solutionright>{renderFeaturePlateform}</Listright>
                  </div>
                  <LastDroplist>
                    <Last className='icon-link'>
                      <a href={COPILOT_REFERENCE_API_LINK} className='learn-link mb0'>
                        Go to API reference
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
                </FeatureDropdown>
              </Drop>
            </InnerList>
            <LineMenuImg className='img-line' lineColor={colorList?.lineColor}>
              <svg width='93' height='30' viewBox='0 0 93 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <line x1='20.5' y1='-2.18557e-08' x2='20.5' y2='30' stroke='#00160E' />
                <line x1='20' y1='7.5' x2='92' y2='7.50001' stroke='#00160E' />
                <line x1='92.5' y1='-2.18557e-08' x2='92.5' y2='8' stroke='#00160E' />
              </svg>
            </LineMenuImg>
          </SpanLink>
          {/* <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/apps'>Apps</Link>
          </SpanLink>
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='/automations'>Automations</Link>
          </SpanLink> */}
          <SpanLink textColor={colorList?.fontColor} hoverColor={colorList?.primaryColor}>
            <Link href='#' className='hovernone'>
              Solutions
            </Link>
            <InnerList solution className='innerlist'>
              {renderSolutionMenu}
              <LastDroplist>
                <Last className='icon-link'>
                  <a href={'/customers'} className='learn-link mb0'>
                    Meet our customers
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
            <Link href='/templates'>Templates</Link>
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
                    <MenuWrap href={GUIDE_LINK_INFO.link}>
                      <LeftImg>
                        <SVGComponent name='copilot-guide-icon' width='16' height='16' viewBox='16' />
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>{GUIDE_LINK_INFO.text}</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href='/university'>
                      <LeftImg>
                        <SVGComponent name='video-tutorials-icon' width='16' height='16' viewBox='16' />
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Video Tutorials</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href={'/updates'}>
                      <LeftImg>
                        <SVGComponent name='whats-new-icon' width='16' height='16' viewBox='16' />
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>What’s New</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href='/experts'>
                      <LeftImg>
                        <SVGComponent name='find-expert-icon' width='16' height='16' viewBox='16' />
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Find an Expert</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                  <ListLi>
                    <MenuWrap href={COPILOT_SECURITY_LINK}>
                      <LeftImg>
                        <SVGComponent name='security-icon' width='16' height='16' viewBox='16' />
                      </LeftImg>
                      <RightText resourcetext>
                        <h6>Security</h6>
                      </RightText>
                    </MenuWrap>
                  </ListLi>
                </Listleft>
                <BorderLine>
                  <Listright>
                    <ListLi>
                      <MenuWrap href='/brand'>
                        <LeftImg>
                          <SVGComponent name='brand-icon' width='16' height='16' viewBox='16' />
                        </LeftImg>
                        <RightText resourcetext>
                          <h6>Brand</h6>
                        </RightText>
                      </MenuWrap>
                    </ListLi>
                    <ListLi>
                      <MenuWrap href={'/jobs'}>
                        <LeftImg>
                          <SVGComponent name='jobs-icon' width='16' height='16' viewBox='16' />
                        </LeftImg>
                        <RightText resourcetext>
                          <h6>Jobs</h6>
                        </RightText>
                      </MenuWrap>
                    </ListLi>
                    <ListLi>
                      <MenuWrap href={COPILOT_SYSTEM_STATUS_LINK}>
                        <LeftImg>
                          <SVGComponent name='system-status-icon' width='16' height='16' viewBox='16' />
                        </LeftImg>
                        <RightText resourcetext>
                          <h6>System Status</h6>
                        </RightText>
                      </MenuWrap>
                    </ListLi>
                    <ListLi>
                      <MenuWrap href={'/experts-program'}>
                        <LeftImg>
                          <SVGComponent name='experts-program-icon' width='16' height='16' viewBox='16' />
                        </LeftImg>
                        <RightText resourcetext>
                          <h6>Experts Program</h6>
                        </RightText>
                      </MenuWrap>
                    </ListLi>
                    <ListLi>
                      <MenuWrap href={'/affiliates-program'}>
                        <LeftImg>
                          <SVGComponent name='affiliate-program-icon' width='16' height='16' viewBox='16' />
                        </LeftImg>
                        <RightText resourcetext>
                          <h6>Affiliates Program</h6>
                        </RightText>
                      </MenuWrap>
                    </ListLi>
                  </Listright>
                </BorderLine>
              </Drop>
              <LastDroplist>
                <Last className='icon-link'>
                  <a href={'/blog'} className='learn-link mb0'>
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
          {/* <SpanMobileLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/book-demo' ? 'active' : ''}>
            <Link href='/book-demo'>Book Demo</Link>
          </SpanMobileLink> */}
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
                        : '#FFFFFF'
                    }
                    text={'Open Dashboard'}
                    borderColor={'transparent'}
                    href={OPEN_COPILOT_LINK}
                    hoverColor={'rgba(255, 255, 255, 0.8)'}
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
                        : '#FFFFFF'
                    }
                    text={'Start Trial'}
                    borderColor={'transparent'}
                    href={COPILOT_ONBORADING_LINK}
                    hoverColor={'rgba(255, 255, 255, 0.8)'}
                    className='hederbtn'
                  />
                </>
              )}
            </>
          </SignInSignUpBtn>
        </HeaderBtnGroup>
      </NavMenu>
    );
  };

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
                isOpenResoursesSubMenu || isOpenSolutionSubMenu || isOpenFeatureSubMenu ? (
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
                isOpenResoursesSubMenu || isOpenSolutionSubMenu || isOpenFeatureSubMenu ? (
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
              isOpenResoursesSubMenu || isOpenSolutionSubMenu || isOpenFeatureSubMenu ? (
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
                        textColor={isModule ? colorList?.fontColor : '#FFFFFF'}
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
                        textColor={isModule ? colorList?.fontColor : '#FFFFFF'}
                        backgroundColor={colorList?.buttonColor}>
                        <Link href={COPILOT_ONBORADING_LINK}>Start trial</Link>
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
