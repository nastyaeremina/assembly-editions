import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { isEmpty } from '../../helpers/helpers';
import {
  NavMenu,
  NavigationBlock,
  SpanLink,
  MobileText,
  MobileTextLink,
  SpanMobileLink,
  ResponsiveSpanLink,
  Dropdown,
  DropdownContainer
} from './styles';
import ResponsiveSubsection from './responsiveSubsection';
import { Container } from '../../styles/commonStyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

function ResponsiveNavbar({ mobile, navbarData, setOpenDropdownIndex, openDropdownIndex }) {
  const router = useRouter();

  const calculateDropdownHeight = useCallback((subsections) => {
    let height = 0;
    subsections.forEach((section) => {
      const isHighlightSection = section.title?.toLowerCase() === 'highlight';

      if (section.title && !isHighlightSection) {
        height += 50; // Title + margin
      }

      section.items.forEach((item) => {
        if (isHighlightSection) {
          height += 650; // Approximate height for HighlightSection card
        } else {
          height += item.Description ? 75 : 55;
        }
      });
    });
    return height + 55; // padding
  }, []);

  const toggleDropdown = useCallback(
    (index) => {
      setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    [setOpenDropdownIndex]
  );

  return (
    <>
      <NavMenu mobile={mobile}>
        <Container>
          <NavigationBlock>
            {navbarData.map((item, index) => {
              const isDropdownOpen = openDropdownIndex === index;

              if (!isEmpty(item.subsections)) {
                return (
                  <DropdownContainer key={`navbar_${item.title}`}>
                    <ResponsiveSpanLink onClick={() => toggleDropdown(index)}>
                      <MobileText>
                        {item.title}
                        <SVGComponent
                          name='angle-right-arrow-icon'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          className={isDropdownOpen ? 'rotate-icon' : ''}
                        />
                      </MobileText>
                    </ResponsiveSpanLink>
                    <Dropdown
                      className={isDropdownOpen ? 'open' : ''}
                      calculatedHeight={calculateDropdownHeight(item.subsections)}>
                      <ResponsiveSubsection subsectionData={item.subsections} />
                    </Dropdown>
                  </DropdownContainer>
                );
              }
              if (item.link) {
                return (
                  <SpanLink key={`navbar_${item.title}`}>
                    <MobileTextLink href={item.link}>{item.title}</MobileTextLink>
                  </SpanLink>
                );
              }
              return null;
            })}
            <SpanMobileLink className={router.pathname === '/book-demo' ? 'active' : ''}>
              <MobileTextLink href='/book-demo'>Book Demo</MobileTextLink>
            </SpanMobileLink>
          </NavigationBlock>
        </Container>
      </NavMenu>
    </>
  );
}

export default ResponsiveNavbar;
