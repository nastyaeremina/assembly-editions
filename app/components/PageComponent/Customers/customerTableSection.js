import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BlankDiv,
  BottomTableSection,
  ContentSection,
  CustomerDesignation,
  CustomerName,
  LogoDiv,
  TabItem,
  Table,
  TableItem,
  TableSection,
  TabsSection,
  VisitSite
} from '../../../styles/customerstyles';
import { Container } from '../../../styles/commonStyles';
import SectionHeader from '../../sectionHeader/sectionHeader';
import Image from 'next/image';
import { isEmpty } from '../../../helpers/helpers';
import SVGComponent from '../../../../public/images/svg/SVGComponent';

/**
 * CustomerTableSection Component
 * @param {Object} props - Component props
 * @param {Array<string>} props.designations - An array of designation strings for the tabs.
 * @param {Array<Object>} props.caseStudies - An array of case study objects to display in the table.
 * @param {string} props.title - The title for the section header.
 * @param {string} props.description - The description for the section header.
 * @param {string} props.primaryButtonLink - The URL for the primary button in the section header.
 * @param {string} props.primaryButtonText - The text for the primary button in the section header.
 * @returns {JSX.Element} - JSX markup for the CustomerTableSection component.
 */

function CustomerTableSection({ designations, caseStudies, title, description, primaryButtonLink, primaryButtonText }) {
  // Filter out designations that have no data
  const designationsWithData = useMemo(() => {
    if (!designations || !caseStudies) return [];
    return designations.filter((designation) => caseStudies.some((item) => item?.designation === designation));
  }, [designations, caseStudies]);

  const [activeTab, setActiveTab] = useState(designationsWithData[0]);
  const tabRefs = useRef({});

  const renderTabs = useMemo(() => {
    return designationsWithData?.map((designation) => (
      <TabItem
        key={`${designation}`}
        ref={(el) => (tabRefs.current[designation] = el)}
        onClick={() => setActiveTab(designation)}
        isSelect={activeTab === designation}>
        {designation}
      </TabItem>
    ));
  }, [designationsWithData, activeTab]);

  // Update activeTab if current one is no longer available
  useEffect(() => {
    if (designationsWithData.length > 0 && !designationsWithData.includes(activeTab)) {
      setActiveTab(designationsWithData[0]);
    }
  }, [designationsWithData, activeTab]);

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el && el.parentNode) {
      const parent = el.parentNode;

      // Element’s position and size
      const elLeft = el.offsetLeft; // distance of element from parent’s left edge
      const elWidth = el.offsetWidth; // width of active tab

      // Parent container size
      const parentWidth = parent.offsetWidth;

      // Calculate the target scroll so that active tab stays in the center
      const scrollTo = elLeft - parentWidth / 2 + elWidth / 2;

      // Smoothly scroll the parent horizontally
      parent.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, [activeTab]);

  const filteredCaseStudies = useMemo(() => {
    if (!caseStudies) return [];
    return caseStudies.filter((item) => item?.designation === activeTab);
  }, [caseStudies, activeTab]);

  const [hoverIndex, setHoverIndex] = useState(0);

  const renderTable = useMemo(() => {
    return filteredCaseStudies.map((item, index) => {
      const isHovered = hoverIndex === index;
      const isPrevHovered = hoverIndex === index + 1; // current item is just above hovered one

      return (
        <TableItem
          key={`case-study-item-${index}`}
          href={item?.slug || item?.visitLink || ''}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}>
          <ContentSection className={`${isHovered || isPrevHovered ? 'hovered-border' : ''}`}>
            <LogoDiv>
              <Image
                src={item?.customerLogo}
                alt={item?.customerName}
                width={58}
                height={30}
                className='customer-logo'
              />
              <CustomerName>{item?.customerName}</CustomerName>
            </LogoDiv>
            <CustomerDesignation>{item?.designation}</CustomerDesignation>
            {isEmpty(item?.slug)
              ? !isEmpty(item?.visitLink) && (
                  <VisitSite>
                    Visit site <SVGComponent name='visit-site-icon' width='16' height='16' viewBox='0 0 16 16' />
                  </VisitSite>
                )
              : !isEmpty(item?.slug) && (
                  <VisitSite>
                    Read Story
                    <SVGComponent
                      name='hover-arrow-icon'
                      width='18'
                      height='16'
                      viewBox='0 0 16 16'
                      className='hover-arrow-icon'
                    />
                  </VisitSite>
                )}
            {isEmpty(item?.slug) && isEmpty(item?.visitLink) && <BlankDiv />}
          </ContentSection>
        </TableItem>
      );
    });
  }, [filteredCaseStudies, hoverIndex]);

  return (
    !isEmpty(designationsWithData) && (
      <TableSection>
        <Container>
          <SectionHeader
            title={title}
            description={description}
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
          />
          <BottomTableSection>
            <TabsSection>{renderTabs}</TabsSection>
            {!isEmpty(caseStudies) && <Table>{renderTable}</Table>}
          </BottomTableSection>
        </Container>
      </TableSection>
    )
  );
}

export default CustomerTableSection;
