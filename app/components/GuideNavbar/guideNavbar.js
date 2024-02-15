'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useHotkeys } from 'react-hotkeys-hook';
import Image from 'next/image';
import CopilotLogos from '../../../public/images/blacklogo.svg';
import { addGuideSiderItem, deleteGuideSiderItem } from '../../actions/guideActions';
import { FirstLine, MobileMenu, ThirdLine } from '../navbar/styles';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import {
  BtnIcon,
  CopilotGuideLogo,
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
  SideNavbar,
  SideNavbarHead,
  Text
} from './styles';
import GuideSearch from './guideSearch';

export default function GuideNavbar({ sectionData, articleData }) {
  const guideSelector = useSelector((state) => state?.guide);
  let isScrollPage = false;
  const [clientWindowHeight, setClientWindowHeight] = useState('');
  const [isClick, setIsClick] = useState(false);
  // State to manage the mobile menu's open/closed state
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isSecOpen, setIsSecOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // State to store the hotkey combination based on the operating system
  const [hotkeyCombination, setHotkeyCombination] = useState('ctrl+k');

  const { guideSectionData } = guideSelector;
  let selectedArticleId, section, parentArticleId;
  const slug = useSelectedLayoutSegment();
  const dispatch = useDispatch();

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

  // Function to toggle the section's open/close state
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

  //calculate total article of perticluar section
  const calculateTotalSubArticle = useCallback((sectionData) => {
    const total = sectionData?.items?.reduce((accumulator, element) => {
      return accumulator + 1;
    }, 0);
    return total;
  }, []);

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
  }, [isOpenMobileMenu]);

  // Function to render the article items
  const renderArticleItemView = useCallback(
    (item, index, isSub = false) => {
      return item?.items?.map((childItem, childIndex) => {
        if (isEmpty(childItem?.name)) return null;
        //check is current section open or not
        let isOpen = isSectionOpen(childItem?.sys?.id);
        let height = calculateTotalSubArticle(childItem?.childArticlesCollection) * 34;
        return (
          <>
            <NavItem
              key={`guidearticle_index${childItem?.sys?.id}`}
              isSubItem={isSub}
              onClick={() => {
                onOpenSection(childItem?.sys?.id);
                isOpen = isSectionOpen(childItem?.sys?.id);
                setIsSecOpen(true);
                setIsOpenMobileMenu(false);
              }}>
              <Link href={`/guide/${childItem?.slug}`} className='guidelink' shallow={true}>
                {!isEmpty(childItem?.iconCode) && (
                  <Icon className='svgicon' isSelected={selectedArticleId === childItem?.slug}>
                    <div dangerouslySetInnerHTML={{ __html: childItem?.iconCode }} />
                  </Icon>
                )}
                <IconText isSelected={selectedArticleId === childItem?.slug} className='secondhead'>
                  {childItem?.name}
                </IconText>
              </Link>

              {childItem?.childArticlesCollection?.total > 0 && (
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
              )}
            </NavItem>
            <ul className={isOpen ? 'open' : ''} style={{ height: height }}>
              {isOpen && <>{renderArticleItemView(childItem?.childArticlesCollection, index, true)}</>}
            </ul>
          </>
        );
      });
    },
    [calculateTotalSubArticle, isSectionOpen, onOpenSection, selectedArticleId]
  );

  const navbarRenderView = useMemo(() => {
    if (isEmpty(sectionData)) return null;
    return sectionData.map((item, index) => {
      if (isEmpty(item?.name)) return null;
      // calulate total height of section one section need 34px
      const total = item?.articlesCollection?.total;
      let hegith = total * 34;
      item?.articlesCollection?.items?.forEach((x) => {
        if (isSectionOpen(x?.sys?.id)) {
          hegith = x?.childArticlesCollection?.total * 34 + hegith;
        }
      });

      let isOpen = isSectionOpen(item?.sys?.id);
      return (
        <>
          <GuideSectionItem totalHeight={hegith}>
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
            <ul className={isOpen ? 'open' : ''} style={{ height: hegith }}>
              {isOpen && renderArticleItemView(item?.articlesCollection, index)}
            </ul>
          </GuideSectionItem>
        </>
      );
    });
  }, [sectionData, isSectionOpen, onOpenSection, renderArticleItemView]);

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
          <Maindiv>
            <SideNavbarHead>
              <Link href='/' aria-label={'Navigate to Home'}>
                <CopilotGuideLogo alt='copilot logo' loading='lazy' width='142' height='30' src={CopilotLogos.src} />
              </Link>
              <NavTitle>
                <Link href={'/guide'}>Guide</Link>
              </NavTitle>
            </SideNavbarHead>
            <InputWrap onClick={setIsSearchModalOpen}>
              <Image src='/images/guideask.svg' alt='search-icon' width={24} height={24} className='ask-icon' />
              <Text>Search guide...</Text>
              <BtnIcon>
                <Image src='/images/command.svg' alt='search-icon' width={20} height={20} />
                <Image src='/images/commandk.svg' alt='search-icon' width={20} height={20} />
              </BtnIcon>
            </InputWrap>
            <NavmenuSection>{navbarRenderView}</NavmenuSection>
          </Maindiv>
        </SideNavbar>
        <GuideMobileNavbar className={isScrollPage ? 'scroll' : ''}>
          <NavbarHeader>
            <SideNavbarHead>
              <Link href='/' aria-label={'Navigate to Home'}>
                <CopilotGuideLogo alt='copilot logo' loading='lazy' width='142' height='30' src={CopilotLogos.src} />
              </Link>
              <NavTitle>
                <Link href={'/guide'} onClick={() => setIsOpenMobileMenu(false)}>
                  Guide
                </Link>
              </NavTitle>
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
    </>
  );
}
