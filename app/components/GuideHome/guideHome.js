'use client';
import React, { useCallback, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { usePathname } from 'next/navigation';
import FAQ from '../../components/faq/faq';
import { extractTagId, isEmpty } from '../../helpers/helpers';
import CopyLink from '../copyLink/copyLink';
import { Caption, FAQSection, GuideCenter, GuideDetail, HeroSection, MainContent, PageTitle } from './styles';

export default function GuideHome({ detail }) {
  const currentPath = usePathname();
  let currentDomain = 'https://www.copilot.com';
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

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h1 id={tagId}>
            {children}
            <CopyLink tagId={tagId} />
          </h1>
        );
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h2 id={tagId}>
            {children}
            <CopyLink tagId={tagId} />
          </h2>
        );
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h3 id={tagId}>
            {children} <CopyLink tagId={tagId} />
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h4 id={tagId}>
            {children}
            <CopyLink tagId={tagId} />
          </h4>
        );
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h5 id={tagId}>
            {children}
            <CopyLink tagId={tagId} />
          </h5>
        );
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        const tagId = extractTagId(children[0]);
        return (
          <h6 id={tagId}>
            {children}
            <CopyLink tagId={tagId} />
          </h6>
        );
      }
    }
  };

  return (
    <>
      <MainContent>
        <GuideCenter>
          <HeroSection>
            <PageTitle id={'overview'}>{detail?.name}</PageTitle>
            {!isEmpty(detail?.header) && <Caption>{detail?.header}</Caption>}
          </HeroSection>
          {!isEmpty(detail?.content?.json) && (
            <GuideDetail>{documentToReactComponents(detail?.content?.json, options)}</GuideDetail>
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
