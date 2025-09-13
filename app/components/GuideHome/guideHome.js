'use client';
import React, { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'react-medium-image-zoom/dist/styles.css';
import FAQ from '../../components/faq/faq';
import { isEmpty } from '../../helpers/helpers';
import RichTextDetail from '../richTextDetail/richText';
import { CURRENT_SITE_URL } from '../../constants/constant';
import { Caption, FAQSection, GuideCenter, HeroSection, MainContent, PageTitle } from './styles';
import { Content } from '../../styles/commonStyles';

export default function GuideHome({ detail }) {
  const currentPath = usePathname();
  //extract assets block from article content

  let currentDomain = CURRENT_SITE_URL;
  if (typeof window !== 'undefined') currentDomain = window?.location?.host;

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const sectionId = window.location.hash.replace(/^#/, '');
    if (sectionId) {
      scrollToSection(sectionId);
    }
  }, [scrollToSection]);
  return (
    <>
      <MainContent>
        <GuideCenter>
          <HeroSection>
            <PageTitle id={'overview'}>{detail?.name}</PageTitle>
            {!isEmpty(detail?.header) && <Caption>{detail?.header}</Caption>}
          </HeroSection>
          {!isEmpty(detail?.content?.json) && (
            <Content isThemedContent>
              <RichTextDetail data={detail?.content?.json} assets={detail?.content?.links} shouldHeadingCopy />
            </Content>
          )}
        </GuideCenter>
        {!isEmpty(detail?.faQsCollection?.items) && (
          <FAQSection id='faqs'>
            <FAQ
              faqList={detail?.faQsCollection?.items}
              isGuideFAQ={true}
              currentpath={`${currentDomain}${currentPath}`}
            />
          </FAQSection>
        )}
      </MainContent>
    </>
  );
}
