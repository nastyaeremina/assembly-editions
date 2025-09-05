'use client';
import React, { useEffect, useRef, useState } from 'react';
import { GridSection, SectionContentDiv, SectionDiv, TabSection, TabContentGridItem, GridItemSection } from './style';
import SectionHeader from '../sectionHeader/sectionHeader';
import { Container } from '../../styles/commonStyles';
import { SectionTone } from '../../constants/constant';
import TabSwitcher from './switcherComponent/tabSwitcher';
import { isEmpty } from '../../helpers/helpers';
import Image from 'next/image';
import QuoteSectionComponent from '../quoteSection/quoteSection';

/**
 * Section component for displaying a section with a header and optional buttons.
 * @param {Object} props - Component props.
 * @param {SectionTone} [props.tone=SectionTone.LIGHT] - The visual tone of the section, either light or dark.
 * @param {string} props.title - The main title of the section.
 * @param {string} props.description - The description text for the section.
 * @param {string} props.primaryButtonLink - The URL for the primary call-to-action button.
 * @param {string} props.primaryButtonText - The text displayed on the primary button.
 * @param {string} props.secondaryButtonLink - The URL for the secondary call-to-action button.
 * @param {string} props.secondaryButtonText - The text displayed on the secondary button.
 * @param {Array<Object>} props.tabItems - An array of objects, where each object has a 'title' and 'image' property for the tab.
 */

function SectionComponent({
  tone = SectionTone.LIGHT,
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  tabItems
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const handleTabChange = (tabItem) => {
    const newIndex = tabItems.findIndex((item) => item.title === tabItem.title);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const activeEl = containerRef.current.querySelector("[data-active='true']");
        if (activeEl) {
          setHeight(activeEl.offsetHeight);
        }
      }
    };

    updateHeight(); // Initial height calculation
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [activeIndex]);

  return (
    <SectionDiv tone={tone}>
      <Container>
        <SectionContentDiv>
          <SectionHeader
            title={title}
            description={description}
            primaryButtonText={primaryButtonText}
            primaryButtonLink={primaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            tone={tone}
          />
          <TabSection>
            <TabSwitcher
              tabItems={tabItems}
              tone={tone}
              isButton={!isEmpty(primaryButtonText) || !isEmpty(secondaryButtonText)}
              onTabChange={handleTabChange}
            />
            <GridSection ref={containerRef} style={{ height }} tone={tone}>
              {tabItems.map((tabItem, index) => (
                <GridItemSection key={index} isActive={index === activeIndex} data-active={index === activeIndex}>
                  {tabItem.image && (
                    <Image src={tabItem.image} width={877} height={827} className='image' alt='Section' />
                  )}
                  {!isEmpty(tabItem.quoteSection) && (
                    <QuoteSectionComponent
                      tone={tone}
                      imageSrc={tabItem.quoteSection.imageSrc}
                      name={tabItem.quoteSection.name}
                      companyName={tabItem.quoteSection.companyName}
                      description={tabItem.quoteSection.description}
                      linkHref={tabItem.quoteSection.linkHref}
                    />
                  )}
                </GridItemSection>
              ))}
            </GridSection>
          </TabSection>
        </SectionContentDiv>
      </Container>
    </SectionDiv>
  );
}

export default SectionComponent;
