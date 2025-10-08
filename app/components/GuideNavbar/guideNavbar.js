'use client';
import React, { useCallback, useEffect, useMemo, useState, useRef, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useHotkeys } from 'react-hotkeys-hook';
import { addGuideSiderItem, deleteGuideSiderItem } from '../../actions/guideActions';
import { BergerMenu, FirstLine, SecondLine, ThirdLine } from '../navbar/styles';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import {
  Divider,
  GuideMobileNavbar,
  GuideSectionItem,
  Icon,
  IconText,
  InputWrap,
  Maindiv,
  MobileNavMenu,
  NavHead,
  NavItem,
  NavTitle,
  NavbarHeader,
  NavmenuSection,
  OptionIcon,
  OptionName,
  ResponsiveInputWrap,
  SearchBarContent,
  SideNavbar,
  SideNavbarHead,
  Text
} from './styles';
import GuideSearch from './guideSearch';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import LinkComponent from '../linkComponent/linkComponent';

export default function GuideNavbar({ sectionData, articleData }) {
  const guideSelector = useSelector((state) => state?.guide);
  let isScrollPage = false;
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const [isClick, setIsClick] = useState(false);
  // State to manage the mobile menu's open/closed state
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [rowHeight, setRowHeight] = useState(32);

  // State to store the hotkey combination based on the operating system
  const [hotkeyCombination, setHotkeyCombination] = useState('ctrl+k');

  const { guideSectionData } = guideSelector;
  let selectedArticleId, section, parentArticleId;
  const slug = useSelectedLayoutSegment();
  const dispatch = useDispatch();

  const navContainerRef = useRef(null);
  const responsiveNavContainerRef = useRef(null);
  const [measuredHeights, setMeasuredHeights] = useState({});
  const measureHeightsRef = useRef(null);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    //get open dropdown and whole sidebar tag using id
    const openButton = document.getElementById('OpenButton');
    var nav = document.getElementById('nav');

    const handleButtonClick = () => {
      nav.classList.toggle('open');
    };

    if (openButton) {
      //handle click event of guide article item
      openButton.addEventListener('click', handleButtonClick);
    }
    return () => {
      // Cleanup the event listener when the component unmounts
      if (openButton) {
        //remove handled event
        openButton.removeEventListener('click', handleButtonClick);
      }
    };
  }, []);

  //check current section(id) is open or not
  const isSectionOpen = useCallback(
    (id) => {
      const findIndex = guideSectionData?.findIndex((item) => item?.id === id);
      if (findIndex !== -1 || (id === section && !isClick)) return true;
      return false;
    },
    [guideSectionData, isClick, section]
  );

  // Check if a section has any active item within it
  const isSectionActive = useCallback(
    (sectionId) => {
      // Only return true if there's a valid selectedArticleId from the current URL
      if (!sectionId || !selectedArticleId || !slug) return false;

      // Find the section data
      const sectionItem = sectionData?.find((item) => item?.sys?.id === sectionId);
      if (!sectionItem) return false;

      // Check if any article in this section is currently selected
      const hasActiveArticle = sectionItem?.articlesCollection?.items?.some((article) => {
        // Check if the current article matches
        if (article?.slug === selectedArticleId) return true;

        // Check if any sub-article matches
        if (article?.childArticlesCollection?.items?.some((subArticle) => subArticle?.slug === selectedArticleId)) {
          return true;
        }

        return false;
      });

      // This ensures only one section can be active at a time
      return hasActiveArticle;
    },
    [sectionData, selectedArticleId, slug]
  );

  // Function to toggle the section's open/close state
  const onOpenSection = useCallback(
    (id) => {
      const findIndex = guideSectionData?.findIndex((item) => item?.id === id);
      if (id === section && !isClick) {
        setIsClick(true);
      }
      if (findIndex === -1) {
        dispatch(addGuideSiderItem({ id }));
        // Focus the first focusable element in the opened dropdown after a short delay
        setTimeout(() => {
          const sectionElement = document.querySelector(`[data-section-id="${id}"]`);
          if (sectionElement) {
            const firstFocusableElement = sectionElement.querySelector('a.guidelink');
            if (firstFocusableElement) {
              firstFocusableElement.focus();
            }
          }
        }, 200);
      } else {
        dispatch(deleteGuideSiderItem(id));
      }
    },
    [dispatch, guideSectionData, isClick, section]
  );

  // Determine the initial section and parent article based on the slug
  // so that we open perticluar section  dropdown
  if (!isEmpty(slug)) {
    selectedArticleId = slug;
    sectionData?.forEach((element) => {
      // Check if the slug is found in top-level articles
      const parentArticleData = removeEmptyElement(element?.articlesCollection?.items)?.find(
        (item) => item.slug === slug
      );

      if (parentArticleData) {
        section = element?.sys?.id; // Capture the section ID
        parentArticleId = parentArticleData.sys.id; // Capture the parent article's ID
        return;
      }

      // Check if the slug is found in child articles
      const childArticleData = element?.articlesCollection?.items?.find((item) =>
        item.childArticlesCollection?.items?.some((childItem) => childItem.slug === slug)
      );

      if (childArticleData) {
        section = element?.sys?.id; // Capture the section ID
        parentArticleId = childArticleData.sys.id; // Capture the parent article's ID
      }
    });
  }

  // Attach scroll event listener
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    window.addEventListener('scroll', handleScroll);
    dispatch(addGuideSiderItem({ id: section }));
    dispatch(addGuideSiderItem({ id: parentArticleId }));
  }, [dispatch, parentArticleId, section]);

  // Check if the page is scrolled
  if (clientWindowHeight > 10) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }

  useEffect(() => {
    const updateRowHeight = () => {
      setRowHeight(window.innerWidth <= 991 ? 48 : 32);
    };

    updateRowHeight(); // initial check
    window.addEventListener('resize', updateRowHeight);
    return () => window.removeEventListener('resize', updateRowHeight);
  }, []);

  // FIXED useLayoutEffect to recalc parent height when sub opens
  useLayoutEffect(() => {
    const desktopRoot = navContainerRef.current;
    const mobileRoot = responsiveNavContainerRef.current;
    if (!desktopRoot && !mobileRoot) return;

    const measure = () => {
      const newHeights = {};

      // helper fn for reusability
      const measureRoot = (root) => {
        if (!root) return;
        sectionData?.forEach((sectionItem) => {
          const sectionId = sectionItem?.sys?.id;
          const sectionWrapper = root.querySelector(`[data-section-id="${sectionId}"]`);
          if (!sectionWrapper) return; // 🚀 important: no overwrite if not found

          const sectionUl = sectionWrapper.querySelector(':scope > ul');
          let totalHeight = 0;
          if (sectionUl) {
            const clone = sectionUl.cloneNode(true);
            clone.style.height = 'auto';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.style.pointerEvents = 'none';
            clone.style.width = sectionUl.offsetWidth + 'px'; // Ensure same width for accurate text wrapping
            sectionUl.parentNode.appendChild(clone);
            totalHeight = clone.scrollHeight;
            sectionUl.parentNode.removeChild(clone);
          }

          // Section height save (merge instead of overwrite)
          newHeights[`section_${sectionId}`] = Math.max(newHeights[`section_${sectionId}`] || 0, totalHeight);

          // Sub-dropdowns
          const subUls = sectionWrapper.querySelectorAll('ul.subitem-dropdown');
          subUls.forEach((subUl) => {
            const articleId = subUl.getAttribute('data-article-id');
            if (!articleId) return;

            const clone = subUl.cloneNode(true);
            clone.style.height = 'auto';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.style.pointerEvents = 'none';
            clone.style.width = subUl.offsetWidth + 'px'; // Ensure same width for accurate text wrapping
            subUl.parentNode.appendChild(clone);
            const subHeight = clone.scrollHeight;
            subUl.parentNode.removeChild(clone);

            newHeights[`article_${articleId}`] = Math.max(newHeights[`article_${articleId}`] || 0, subHeight);
          });
        });
      };

      measureRoot(desktopRoot);
      measureRoot(mobileRoot);

      setMeasuredHeights(newHeights);
    };

    measureHeightsRef.current = measure;
    measure();

    const onResize = () => measure();
    window.addEventListener('resize', onResize);

    let roDesktop, roMobile;
    try {
      if (desktopRoot) {
        roDesktop = new ResizeObserver(measure);
        roDesktop.observe(desktopRoot);
      }
      if (mobileRoot) {
        roMobile = new ResizeObserver(measure);
        roMobile.observe(mobileRoot);
      }
    } catch (e) {}

    return () => {
      window.removeEventListener('resize', onResize);
      if (roDesktop) roDesktop.disconnect();
      if (roMobile) roMobile.disconnect();
    };
  }, [sectionData, rowHeight, articleData, guideSectionData]);

  // Additional effect to trigger height measurement when guideSectionData changes
  useLayoutEffect(() => {
    if (measureHeightsRef.current) {
      // Use a small delay to ensure DOM has updated
      const timeoutId = setTimeout(() => {
        measureHeightsRef.current();
      }, 10);

      return () => clearTimeout(timeoutId);
    }
  }, [guideSectionData]);

  const calculateSubHeight = useCallback(
    (collection) => {
      if (!collection?.items?.length) return 0;
      return collection.items.length * rowHeight;
    },
    [rowHeight]
  );

  // Calculate parent section height with proper text wrapping consideration
  const calculateSectionHeight = useCallback(
    (collection) => {
      if (!collection?.items?.length) return 0;
      // Use a more generous height calculation for parent sections to account for potential text wrapping
      // Each item could potentially wrap to 2 lines, so we use 1.5x the base row height
      return collection.items.length * rowHeight * 1.5;
    },
    [rowHeight]
  );

  // Function to toggle the mobile menu
  const handleMobileMenu = useCallback(() => {
    const body = document.querySelector('body');
    if (isOpenMobileMenu) {
      body.style.overflow = 'auto';
      setIsOpenMobileMenu(false);
    } else {
      body.style.overflow = 'hidden';
      setIsOpenMobileMenu(true);
    }
    setIsActive(!isActive);
  }, [isOpenMobileMenu, isActive]);

  // Render child articles
  const renderArticleItemView = useCallback(
    (collection, index, isSub = false, parentSectionId = null) => {
      if (!collection?.items?.length) return null;

      return collection.items.map((childItem) => {
        if (isEmpty(childItem?.name)) return null;

        const isOpen = isSectionOpen(childItem?.sys?.id);
        const subHeight =
          measuredHeights[`article_${childItem?.sys?.id}`] ?? calculateSubHeight(childItem?.childArticlesCollection);

        // Determine if this item should be focusable
        // For top-level articles, check if their parent section is open
        // For sub-articles, check if their parent article is open
        const shouldBeFocusable = parentSectionId ? isSectionOpen(parentSectionId) : isSectionOpen(childItem?.sys?.id);

        return (
          <React.Fragment key={`guidearticle_${childItem?.sys?.id}`}>
            <Link
              href={`/guide/${childItem?.slug}`}
              className='guidelink'
              shallow
              tabIndex={shouldBeFocusable ? 0 : -1}>
              <NavItem
                isSubItem={isSub}
                onClick={() => {
                  // If this is a sub-article, open its parent article
                  if (childItem?.childArticlesCollection?.items?.length > 0) {
                    onOpenSection(childItem?.sys?.id);
                  }

                  setIsOpenMobileMenu(false);
                  setIsActive(false);
                }}>
                {!isEmpty(childItem?.iconCode) && (
                  <Icon isSelected={selectedArticleId === childItem?.slug}>
                    <div dangerouslySetInnerHTML={{ __html: childItem?.iconCode }} />
                  </Icon>
                )}
                <IconText isSelected={selectedArticleId === childItem?.slug} className='secondhead'>
                  {childItem?.name}
                </IconText>
              </NavItem>

              {childItem?.childArticlesCollection?.items?.length > 0 && (
                <OptionIcon className={isOpen && 'close'}>
                  <SVGComponent
                    name='angle-right-arrow-icon'
                    width='14'
                    height='14'
                    viewBox='0 0 16 16'
                    className={isOpen ? 'rotate-icon' : ''}
                  />
                </OptionIcon>
              )}
            </Link>

            {/* Only render <ul> if there are sub-articles */}
            {childItem?.childArticlesCollection?.items?.length > 0 && (
              <ul
                className={isOpen ? 'open subitem-dropdown' : 'subitem-dropdown'}
                data-article-id={childItem?.sys?.id}
                style={{ height: isOpen ? `${subHeight}px` : 0 }}>
                {renderArticleItemView(childItem?.childArticlesCollection, index, true, childItem?.sys?.id)}
              </ul>
            )}
          </React.Fragment>
        );
      });
    },
    [calculateSubHeight, isSectionOpen, onOpenSection, selectedArticleId, measuredHeights]
  );

  const navbarRenderView = useMemo(() => {
    if (isEmpty(sectionData)) return null;

    return sectionData.map((item, index) => {
      if (isEmpty(item?.name)) return null;

      const isOpen = isSectionOpen(item?.sys?.id);
      const measuredSectionHeight =
        measuredHeights[`section_${item?.sys?.id}`] ?? calculateSectionHeight(item?.articlesCollection);

      return (
        <GuideSectionItem data-section-id={item?.sys?.id} totalHeight={measuredSectionHeight} key={`section_${index}`}>
          <NavHead onClick={() => onOpenSection(item?.sys?.id)} className='nav-button' tabIndex={0}>
            <OptionName isSelected={isSectionActive(item?.sys?.id)} className='head'>
              {item?.name}
            </OptionName>
            <OptionIcon className={isOpen && 'close'}>
              <SVGComponent
                name='angle-right-arrow-icon'
                width='14'
                height='14'
                viewBox='0 0 16 16'
                className={isOpen ? 'rotate-icon' : ''}
              />
            </OptionIcon>
          </NavHead>

          {/* Render children only if exist */}
          {item?.articlesCollection?.items?.length > 0 && (
            <ul className={isOpen ? 'open' : ''} style={{ height: isOpen ? `${measuredSectionHeight}px` : 0 }}>
              {renderArticleItemView(item?.articlesCollection, index, false, item?.sys?.id)}
            </ul>
          )}
        </GuideSectionItem>
      );
    });
  }, [
    sectionData,
    isSectionOpen,
    onOpenSection,
    renderArticleItemView,
    measuredHeights,
    calculateSectionHeight,
    isSectionActive
  ]);

  // Effect to determine the hotkey combination based on the user agent (OS)
  useEffect(() => {
    const isMacOS = navigator.userAgent.includes('Mac');
    const hotkey = isMacOS ? 'meta+k' : 'ctrl+k';

    setHotkeyCombination(hotkey);
  }, []);

  useHotkeys([hotkeyCombination], (event) => {
    event.preventDefault();
    setIsSearchModalOpen(true);
  });

  useHotkeys('esc', (event) => {
    event.preventDefault();
    setIsSearchModalOpen(false);
  });

  const onCloseSearch = useCallback(() => {
    setIsSearchModalOpen(false);
  }, []);

  return (
    <>
      {isSearchModalOpen && (
        <div>
          <GuideSearch articleData={articleData} onCloseSearch={onCloseSearch} />
        </div>
      )}

      <>
        <SideNavbar>
          <Maindiv ref={navContainerRef}>
            <SideNavbarHead>
              <Link href='/' aria-label={'Navigate to Home'}>
                <SVGComponent name='assembly-small-icon' width='24' height='24' viewBox='0 0 24 24' />
              </Link>
              <Divider />
              <NavTitle>
                <LinkComponent title='Help Guides' linkHref='/guide' />
              </NavTitle>
            </SideNavbarHead>
            <InputWrap onClick={() => setIsSearchModalOpen(true)}>
              <div className='desktop-search-icon'>
                <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' className='search-icon' />
              </div>
              <Text>Search</Text>
            </InputWrap>
            <NavmenuSection>{navbarRenderView}</NavmenuSection>
          </Maindiv>
        </SideNavbar>
        <GuideMobileNavbar className={isScrollPage ? 'scroll' : ''}>
          <NavbarHeader>
            <SideNavbarHead>
              <Link href='/' aria-label={'Navigate to Home'}>
                <SVGComponent name='assembly-small-icon' width='24' height='24' viewBox='0 0 24 24' />
              </Link>
              <Divider />
              <NavTitle>
                <Link href={'/guide'} onClick={() => setIsOpenMobileMenu(false)}>
                  Help Guides
                </Link>
              </NavTitle>
            </SideNavbarHead>
            <SearchBarContent>
              <ResponsiveInputWrap onClick={() => setIsSearchModalOpen(true)}>
                <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' className='search-icon' />
              </ResponsiveInputWrap>
              <BergerMenu onClick={handleMobileMenu} aria-label='navbar menu button'>
                <FirstLine isActive={isActive} />
                <SecondLine isActive={isActive} />
                <ThirdLine isActive={isActive} />
              </BergerMenu>
            </SearchBarContent>
          </NavbarHeader>
          <MobileNavMenu isOpenMobile={isOpenMobileMenu} ref={responsiveNavContainerRef}>
            <NavmenuSection>{navbarRenderView}</NavmenuSection>
          </MobileNavMenu>
        </GuideMobileNavbar>
      </>
    </>
  );
}
