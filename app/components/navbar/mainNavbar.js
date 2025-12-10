'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';
import { Container } from '../../styles/commonStyles';
import useMobileDevice from '../../hooks/useMobileDevice';
import { isEmpty } from '../../helpers/helpers';
import { ButtonSize, ButtonVariant, EXTERNAL_LINK_KEYS } from '../../constants/constant';
import { usePathname } from 'next/navigation';
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

/**
 * Main Navigation Bar Component
 *
 * Features:
 * - Responsive design with mobile/desktop layouts
 * - Keyboard navigation support (Tab, Shift+Tab, Arrow keys, Enter, Escape)
 * - Accessible dropdown menus with proper focus management
 * - Top bar announcement support
 * - Authentication state handling
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isAuthenticated - User authentication status
 * @param {Object} props.topbarContent - Top bar announcement content
 * @param {Array} props.navbarData - Navigation menu data structure
 * @param {Object} props.externalLinks - External application links
 */
export default function NavbarComponent({ isAuthenticated: userAuth, topbarContent, navbarData, externalLinks = {} }) {
  // ===== STATE MANAGEMENT =====
  const mobile = useMobileDevice();
  const pathname = usePathname();

  // UI State
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isActive, setIsActive] = useState(false);

  // Measurements for CSS variables
  const [topbarHeight, setTopbarHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [clientWindowHeight, setClientWindowHeight] = useState('');

  // Keyboard navigation state
  const [focusedItemIndex, setFocusedItemIndex] = useState(-1);
  const [shouldAutoFocus, setShouldAutoFocus] = useState(false);

  // ===== REFS =====
  const topbarRef = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const dropdownRefs = useRef({});
  const menuItemRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

  // ===== EFFECTS =====

  // Set CSS custom properties for navbar heights
  useEffect(() => {
    document.documentElement.style.setProperty('--topbar-height', `${topbarHeight}px`);
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
  }, [topbarHeight, navbarHeight]);

  // Reset navigation state on route change
  useEffect(() => {
    setIsOpenMobileMenu(false);
    setIsActive(false);
    setOpenDropdownIndex(null);
    setFocusedItemIndex(-1);
    setShouldAutoFocus(false);
  }, [pathname]);

  // Initialize measurements and event listeners
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';

    // Set heights for responsive calculations
    if (topbarRef.current) setTopbarHeight(topbarRef.current.offsetHeight);
    if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);

    // Scroll handler for navbar styling
    const handleScroll = () => setClientWindowHeight(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Global keyboard navigation handler
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Tab' && e.shiftKey && openDropdownIndex !== null) {
        closeSubMenu();

        // Special handling for first dropdown (Products)
        if (openDropdownIndex === 0) {
          e.preventDefault();
          setTimeout(() => focusLogoOrPreviousElement(), 50);
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [openDropdownIndex]);

  // Auto-focus first dropdown item when opened via keyboard
  useEffect(() => {
    if (openDropdownIndex !== null && !mobile && shouldAutoFocus) {
      const timeoutId = setTimeout(() => {
        const allItems = getAllDropdownItems(openDropdownIndex);
        if (allItems.length > 0) {
          const firstItem = allItems[0];
          setFocusedItemIndex(firstItem.globalIndex);
          const firstItemKey = `${openDropdownIndex}-${firstItem.globalIndex}`;
          if (menuItemRefs.current[firstItemKey]) {
            menuItemRefs.current[firstItemKey].focus();
          }
        }
        setShouldAutoFocus(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else if (openDropdownIndex === null) {
      setFocusedItemIndex(-1);
    }
  }, [openDropdownIndex, mobile, shouldAutoFocus]);

  // ===== HELPER FUNCTIONS =====

  /**
   * Close all open dropdowns and reset focus state
   */
  const closeSubMenu = useCallback(() => {
    setOpenDropdownIndex(null);
    setFocusedItemIndex(-1);
  }, []);

  /**
   * Get all focusable items within a dropdown menu
   * @param {number} dropdownIndex - Index of the dropdown menu
   * @returns {Array} Array of dropdown items with their positions
   */
  const getAllDropdownItems = useCallback(
    (dropdownIndex) => {
      if (!navbarData[dropdownIndex]?.subsections) return [];

      const allItems = [];
      navbarData[dropdownIndex].subsections.forEach((section, sectionIndex) => {
        if (section.title.toLowerCase() !== 'footer' && section.items) {
          section.items.forEach((item, itemIndex) => {
            allItems.push({
              sectionIndex,
              itemIndex,
              globalIndex: sectionIndex * 100 + itemIndex,
              item
            });
          });
        }
      });
      return allItems;
    },
    [navbarData]
  );

  /**
   * Focus the logo or previous element before navbar
   */
  const focusLogoOrPreviousElement = useCallback(() => {
    if (logoRef.current) {
      logoRef.current.focus();
    } else {
      const navbarElement = navbarRef.current;
      if (navbarElement) {
        const focusableElements = document.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        let navbarPosition = -1;
        for (let i = 0; i < focusableElements.length; i++) {
          if (navbarElement.contains(focusableElements[i])) {
            navbarPosition = i;
            break;
          }
        }

        if (navbarPosition > 0) {
          focusableElements[navbarPosition - 1].focus();
        } else if (dropdownRefs.current[0]) {
          dropdownRefs.current[0].focus();
        }
      }
    }
  }, []);

  /**
   * Handle Shift+Tab navigation within dropdowns
   */
  const handleShiftTab = useCallback(
    (e, dropdownIndex) => {
      if (e.key === 'Tab' && e.shiftKey) {
        closeSubMenu();
        const currentDropdownIndex = openDropdownIndex;

        if (currentDropdownIndex !== null) {
          setTimeout(() => {
            if (currentDropdownIndex === 0) {
              focusLogoOrPreviousElement();
            } else {
              const prevIndex = currentDropdownIndex - 1;
              if (dropdownRefs.current[prevIndex]) {
                dropdownRefs.current[prevIndex].focus();
              }
            }
          }, 50);
        }
        return true;
      }
      return false;
    },
    [openDropdownIndex, closeSubMenu, focusLogoOrPreviousElement]
  );

  /**
   * Handle keyboard navigation within dropdown items
   */
  const handleKeyDown = useCallback(
    (e, dropdownIndex, totalItems, currentGlobalIndex = 0) => {
      if (mobile) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (openDropdownIndex === dropdownIndex) {
            const allItems = getAllDropdownItems(dropdownIndex);
            const currentItemIndex = allItems.findIndex((item) => item.globalIndex === currentGlobalIndex);
            const nextItemIndex = (currentItemIndex + 1) % allItems.length;
            const nextItem = allItems[nextItemIndex];

            setFocusedItemIndex(nextItem.globalIndex);
            setTimeout(() => {
              const nextItemKey = `${dropdownIndex}-${nextItem.globalIndex}`;
              if (menuItemRefs.current[nextItemKey]) {
                menuItemRefs.current[nextItemKey].focus();
              }
            }, 50);
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          if (openDropdownIndex === dropdownIndex) {
            const allItems = getAllDropdownItems(dropdownIndex);
            const currentItemIndex = allItems.findIndex((item) => item.globalIndex === currentGlobalIndex);
            const prevItemIndex = currentItemIndex <= 0 ? allItems.length - 1 : currentItemIndex - 1;
            const prevItem = allItems[prevItemIndex];

            setFocusedItemIndex(prevItem.globalIndex);
            setTimeout(() => {
              const prevItemKey = `${dropdownIndex}-${prevItem.globalIndex}`;
              if (menuItemRefs.current[prevItemKey]) {
                menuItemRefs.current[prevItemKey].focus();
              }
            }, 50);
          }
          break;

        case 'Escape':
          e.preventDefault();
          closeSubMenu();
          if (dropdownRefs.current[dropdownIndex]) {
            dropdownRefs.current[dropdownIndex].focus();
          }
          break;

        case 'Tab':
          if (openDropdownIndex !== null) {
            closeSubMenu();
          }
          break;
      }
    },
    [mobile, openDropdownIndex, closeSubMenu, getAllDropdownItems]
  );

  /**
   * Handle dropdown trigger keyboard events
   */
  const handleDropdownTriggerKeyDown = useCallback(
    (e, dropdownIndex) => {
      if (mobile) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (openDropdownIndex !== dropdownIndex) {
          setShouldAutoFocus(true);
          setOpenDropdownIndex(dropdownIndex);
        } else {
          setOpenDropdownIndex(null);
        }
      } else if (e.key === 'Escape' && openDropdownIndex === dropdownIndex) {
        e.preventDefault();
        closeSubMenu();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (openDropdownIndex !== dropdownIndex) {
          setShouldAutoFocus(true);
          setOpenDropdownIndex(dropdownIndex);
        } else {
          const allItems = getAllDropdownItems(dropdownIndex);
          if (allItems.length > 0) {
            const firstItem = allItems[0];
            setFocusedItemIndex(firstItem.globalIndex);
            const firstItemKey = `${dropdownIndex}-${firstItem.globalIndex}`;
            if (menuItemRefs.current[firstItemKey]) {
              menuItemRefs.current[firstItemKey].focus();
            }
          }
        }
      }
    },
    [mobile, openDropdownIndex, closeSubMenu, getAllDropdownItems]
  );

  // ===== EVENT HANDLERS =====

  /**
   * Toggle mobile menu and manage body scroll
   */
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
  }, [closeSubMenu, isOpenMobileMenu, isActive]);

  /**
   * Handle mouse enter on dropdown trigger
   */
  const handleMouseEnter = useCallback(
    (index) => {
      if (mobile) return;
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setShouldAutoFocus(false);
      setOpenDropdownIndex(index);
    },
    [mobile]
  );

  /**
   * Keep dropdown open while moving between trigger and panel
   */
  const handleDropdownAreaEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  /**
   * Handle mouse leave from dropdown area
   */
  const handleMouseLeave = useCallback(() => {
    if (mobile) return;
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdownIndex(null);
      setFocusedItemIndex(-1);
    }, 150);
  }, [mobile]);

  // ===== RENDER FUNCTIONS =====

  /**
   * Render individual dropdown menu items
   */
  const renderSubItemView = useCallback(
    (data, title, dropdownIndex, sectionIndex = 0) => {
      if (title.toLowerCase() === 'highlight') {
        return (
          <div key={`highlight_section_${title}`}>
            {data?.map((highlightItem, index) => (
              <HighlightSection
                key={`highlight_${index}`}
                href={highlightItem.Link}
                title={highlightItem.Title}
                description={highlightItem.Description}
                image={highlightItem.Image}
              />
            ))}
          </div>
        );
      }

      return data?.map((item, index) => {
        let itemIcon = item?.Icon;
        if (itemIcon && itemIcon.startsWith('//')) {
          itemIcon = `https:${itemIcon}`;
        }

        const globalIndex = sectionIndex * 100 + index;
        const itemKey = `${dropdownIndex}-${globalIndex}`;

        return (
          <ListLi key={`feature_navbar_index_${index}`}>
            <MenuWrap
              href={item?.Link}
              ref={(el) => (menuItemRefs.current[itemKey] = el)}
              tabIndex={openDropdownIndex === dropdownIndex ? 0 : -1}
              onKeyDown={(e) => {
                if (handleShiftTab(e, dropdownIndex)) {
                  e.preventDefault();
                  return;
                }
                const totalItems = getAllDropdownItems(dropdownIndex).length;
                handleKeyDown(e, dropdownIndex, totalItems, globalIndex);
              }}>
              {!isEmpty(itemIcon) && (
                <LeftImg isSmallImage={isEmpty(item?.Description)}>
                  <Image
                    src={itemIcon}
                    alt='menu-icon'
                    width={!isEmpty(item?.Description) ? 18 : 14}
                    height={!isEmpty(item?.Description) ? 18 : 14}
                  />
                </LeftImg>
              )}
              <RightText>
                <span className='title'>{item?.Title}</span>
                {!isEmpty(item?.Description) && <span>{item?.Description}</span>}
              </RightText>
            </MenuWrap>
          </ListLi>
        );
      });
    },
    [openDropdownIndex, handleKeyDown, handleShiftTab, getAllDropdownItems]
  );

  /**
   * Render dropdown menu sections
   */
  const renderNavbarSubItems = useCallback(
    (data, dropdownIndex) => {
      if (isEmpty(data)) return null;
      const totalItems = data.filter((item) => item.title.toLowerCase() !== 'footer').length;

      return (
        <Drop>
          <ParentMenuDiv itemCount={totalItems}>
            {data.map((item, sectionIndex) => {
              if (item.title.toLowerCase() === 'footer') return null;
              return (
                <DropDownComponent
                  title={item.title}
                  shouldTitleShow={item.title.toLowerCase() !== 'highlight'}
                  key={`navbar_sub_item_${item.title}`}
                  viewRenderer={renderSubItemView(item.items, item.title, dropdownIndex, sectionIndex)}
                />
              );
            })}
          </ParentMenuDiv>
        </Drop>
      );
    },
    [renderSubItemView]
  );

  /**
   * Render main navigation menu
   */
  const renderNavigation = useMemo(() => {
    if (isEmpty(navbarData)) return null;

    return (
      <NavMenu mobile={mobile}>
        <NavigationBlock>
          {navbarData.map((item, index) => {
            // Simple link without dropdown
            if (isEmpty(item.subsections) && item.link) {
              return (
                <SpanLink key={`navbar_${item.title}`}>
                  <LinkText href={item.link}>{item.title}</LinkText>
                </SpanLink>
              );
            }

            // Dropdown menu item
            if (!isEmpty(item.subsections)) {
              return (
                <SpanLink key={`navbar_${item.title}`} className='SpanLink'>
                  <LinkText
                    href='#'
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    tabIndex={0}
                    className='link-text'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => {
                      if (mobile) return;
                      setShouldAutoFocus(true);
                      setOpenDropdownIndex(index);
                    }}
                    onKeyDown={(e) => handleDropdownTriggerKeyDown(e, index)}
                    onClick={(e) => {
                      e.preventDefault();
                      setShouldAutoFocus(false);
                      setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                    }}>
                    {item.title}
                  </LinkText>
                  <InnerList
                    solution
                    className='innerlist'
                    $isOpen={openDropdownIndex === index}
                    onMouseEnter={handleDropdownAreaEnter}
                    onMouseLeave={handleMouseLeave}>
                    {renderNavbarSubItems(item.subsections, index, item.title)}
                  </InnerList>
                  <LineMenuImg></LineMenuImg>
                </SpanLink>
              );
            }
          })}
        </NavigationBlock>

        {/* Authentication-based action buttons */}
        <HeaderBtnGroup>
          <SignInSignUpBtn>
            {userAuth ? (
              <>
                <SpanLink>
                  <LinkText href={'/book-demo'}>Book demo</LinkText>
                </SpanLink>
                <ButtonV2Component
                  title={'Open Dashboard'}
                  href={externalLinks?.[EXTERNAL_LINK_KEYS.DashboardLink] || '#'}
                  size='small'
                />
              </>
            ) : (
              <>
                <SpanLink>
                  <LinkText href={'/book-demo'}>Book demo</LinkText>
                </SpanLink>
                <SpanLink>
                  <LinkText href={externalLinks?.[EXTERNAL_LINK_KEYS.DashboardLink] || '#'}>Log in</LinkText>
                </SpanLink>
                <ButtonV2Component
                  title={'Start Trial'}
                  href={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}
                  size='small'
                />
              </>
            )}
          </SignInSignUpBtn>
        </HeaderBtnGroup>
      </NavMenu>
    );
  }, [
    mobile,
    navbarData,
    renderNavbarSubItems,
    userAuth,
    openDropdownIndex,
    handleMouseEnter,
    handleMouseLeave,
    handleDropdownTriggerKeyDown
  ]);

  /**
   * Render top announcement bar
   */
  const renderTopBarView = useMemo(() => {
    if (isEmpty(topbarContent)) return null;

    return (
      <div id='topbarContent'>
        <TopBar ref={topbarRef} data-topbar='true'>
          <Container>
            <AnnounceBar>
              <HelpLink className='icon-link'>
                <Link href={topbarContent?.url} className='learn-link mb0' target='_blank'>
                  <p>{topbarContent?.title}</p>
                  <Icon>
                    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='12' viewBox='0 0 16 16'>
                      <path
                        d='M15.0006 8.00179C15.0006 8.20804 14.9162 8.40491 14.7693 8.54554L14.7662 8.54241L9.26621 13.7924C8.96621 14.0768 8.49121 14.0674 8.20683 13.7674C7.92246 13.4674 7.93183 12.9955 8.23183 12.708L13.1595 8.00179L8.23496 3.29241C7.93496 3.00804 7.92558 2.53304 8.20996 2.23304C8.49433 1.93304 8.96933 1.92054 9.26933 2.20804L14.7693 7.45804C14.9162 7.60179 15.0006 7.79554 15.0006 8.00179Z'
                        className='hover-tip-path'
                      />
                      <path
                        d='M1.85562 7.25177H13.2305C13.6447 7.25177 13.9805 7.58756 13.9805 8.00177C13.9805 8.41598 13.6436 8.75177 13.2294 8.75177H1.85562C1.38146 8.75177 1 8.41739 1 8.00177C1 7.58615 1.38146 7.25177 1.85562 7.25177Z'
                        className='hover-line-path'
                      />
                    </svg>
                  </Icon>
                </Link>
              </HelpLink>
            </AnnounceBar>
          </Container>
        </TopBar>
      </div>
    );
  }, [topbarContent]);

  /**
   * Render mobile navigation overlay
   */
  const renderMobileNavigation = useMemo(() => {
    if (isEmpty(navbarData)) return null;
    return (
      <ResponsiveNavbar
        mobile={mobile}
        navbarData={navbarData}
        openDropdownIndex={openDropdownIndex}
        setOpenDropdownIndex={setOpenDropdownIndex}
        topbarContent={topbarContent}
      />
    );
  }, [mobile, navbarData, openDropdownIndex]);

  // ===== MAIN RENDER =====

  const isScrollPage = clientWindowHeight > 10;

  return (
    <NavbarMainDiv>
      {renderTopBarView}
      <NavbarWrapper className={isScrollPage ? 'scroll' : ''} ref={navbarRef} data-navbar='true'>
        <Container>
          <NavbarInner>
            {/* Assembly Logo - Accessible Home Link */}
            {mobile ? (
              <Link
                href='/'
                aria-label='Navigate to Home'
                ref={logoRef}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.location.href = '/';
                  }
                }}>
                <SVGComponent
                  name='assembly-big-logo'
                  width='174'
                  height='32'
                  viewBox='0 0 200 38'
                  className='logo-icon'
                />
              </Link>
            ) : (
              <Link
                href='/'
                aria-label='Navigate to Home'
                ref={logoRef}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.location.href = '/';
                  }
                }}>
                <SVGComponent name='assembly-big-logo' width='174' height='32' viewBox='0 0 200 38' />
              </Link>
            )}

            {/* Mobile Menu Overlay */}
            <OverLayBlock top={topbarHeight + navbarHeight} isOpenModal={isOpenMobileMenu}>
              {renderMobileNavigation}
            </OverLayBlock>

            {/* Main Navigation */}
            <NavigationMainDiv>{renderNavigation}</NavigationMainDiv>

            {/* Mobile Actions & Menu Toggle */}
            <MobileRight>
              <SignInMobile>
                {userAuth ? (
                  <ButtonV2Component
                    title='Open Dashboard'
                    href={externalLinks?.[EXTERNAL_LINK_KEYS.DashboardLink] || '#'}
                    size={ButtonSize.SMALL}
                  />
                ) : (
                  <>
                    <SpanLink className='login-link'>
                      <LinkText href={externalLinks?.[EXTERNAL_LINK_KEYS.DashboardLink] || '#'}>Log in</LinkText>
                    </SpanLink>
                    <ButtonV2Component
                      title='Start Trial'
                      href={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}
                      size={ButtonSize.SMALL}
                    />
                  </>
                )}
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
