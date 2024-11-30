import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NAVBAR_COLOR_LIST } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import { NavMenu, NavigationBlock, SpanLink, MobileText, MobileTextLink, SpanMobileLink } from './styles';
import ResponsiveSubsection from './responsiveSubsection';

function ResponsiveNavbar({ mobile, navbarData, setOpenDropdownIndex, openDropdownIndex }) {
  const colorList = NAVBAR_COLOR_LIST[0];
  const router = useRouter();
  const isAnyDropdownOpen = openDropdownIndex !== null;

  const toggleDropdown = useCallback(
    (index) => {
      setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    [setOpenDropdownIndex]
  );

  return (
    <NavMenu mobile={mobile} isBoxShadow>
      <NavigationBlock>
        {navbarData.map((item, index) => {
          const isDropdownOpen = openDropdownIndex === index;

          if (!isAnyDropdownOpen && isEmpty(item.subsections) && item.link) {
            return (
              <SpanLink
                textColor={colorList?.fontColor}
                hoverColor={colorList?.primaryColor}
                key={`navbar_${item.title}`}>
                <MobileTextLink href={item.link} hoverColor={colorList?.primaryColor}>
                  {item.title}
                </MobileTextLink>
              </SpanLink>
            );
          }
          if (!isEmpty(item.subsections)) {
            return (
              <>
                {!isAnyDropdownOpen && (
                  <>
                    <SpanLink
                      textColor={colorList?.fontColor}
                      hoverColor={colorList?.primaryColor}
                      onClick={() => toggleDropdown(index)}>
                      <MobileText>{item.title}</MobileText>
                    </SpanLink>
                  </>
                )}
                {isDropdownOpen && (
                  <>
                    <ResponsiveSubsection subsectionData={item.subsections} isDropdownOpen={isDropdownOpen} />
                  </>
                )}
              </>
            );
          }
          return null;
        })}
        {!isAnyDropdownOpen && (
          <SpanMobileLink
            textColor={colorList?.fontColor}
            hoverColor={colorList?.primaryColor}
            className={router.pathname === '/book-demo' ? 'active' : ''}>
            <Link href='/book-demo'>Book Demo</Link>
          </SpanMobileLink>
        )}
      </NavigationBlock>
    </NavMenu>
  );
}

export default ResponsiveNavbar;
