'use client';
import React, { useCallback, useEffect } from 'react';
import slugify from 'slugify';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import copy from 'copy-to-clipboard';
import FAQ from '../../components/faq/faq';
import { isEmpty } from '../../helpers/helpers';
import CopyIcon from '../../../public/images/copy-icon.svg';
import { Caption, FAQSection, GuideCenter, GuideDetail, HeroSection, MainContent, PageTitle } from './styles';

export default function GuideHome({ detail }) {
  const currentPath = usePathname();
  const currentDomain = window?.location?.host || 'https://www.copilot.com';

  // console.log('router.pathname', window?.location);

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
      [BLOCKS.HEADING_2]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        const tagId = `${slugify(newNode?.toLowerCase())}`;
        return (
          <h2 id={tagId}>
            {children}
            <Image
              src={CopyIcon}
              alt='copy-icon'
              width={24}
              height={24}
              className='copy-icon'
              onClick={() => {
                copy(`${currentDomain}/${currentPath}#${tagId}`);
              }}
            />
          </h2>
        );
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        const tagId = `${slugify(newNode?.toLowerCase())}`;
        return (
          <h2 id={tagId}>
            {children}
            <Image
              src={CopyIcon}
              alt='copy-icon'
              width={24}
              height={24}
              className='copy-icon'
              onClick={() => {
                copy(`${currentDomain}/${currentPath}#${tagId}`);
              }}
            />
          </h2>
        );
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        const tagId = `${slugify(newNode?.toLowerCase())}`;
        return (
          <h3 id={tagId}>
            {children}{' '}
            <Image
              src={CopyIcon}
              alt='copy-icon'
              width={24}
              height={24}
              className='copy-icon'
              onClick={() => {
                copy(`${currentDomain}/${currentPath}#${tagId}`);
              }}
            />
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        const tagId = `${slugify(newNode?.toLowerCase())}`;
        return (
          <h4 id={tagId}>
            {children}
            <Image
              src={CopyIcon}
              alt='copy-icon'
              width={18}
              height={18}
              className='copy-icon-h4'
              onClick={() => {
                copy(`${currentDomain}/${currentPath}#${tagId}`);
              }}
            />
          </h4>
        );
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        const tagId = `${slugify(newNode?.toLowerCase())}`;
        return (
          <h5 id={tagId}>
            {children}
            <Image
              src={CopyIcon}
              alt='copy-icon'
              width={18}
              height={18}
              className='copy-icon-h4'
              onClick={() => {
                copy(`${currentDomain}/${currentPath}#${tagId}`);
              }}
            />
          </h5>
        );
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        const tagId = `${slugify(newNode?.toLowerCase())}`;
        return (
          <h6 id={tagId}>
            {children}
            <Image
              src={CopyIcon}
              alt='copy-icon'
              width={18}
              height={18}
              className='copy-icon-h4'
              onClick={() => {
                copy(`${currentDomain}/${currentPath}#${tagId}`);
              }}
            />
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
              faqData={detail?.faQsCollection?.items}
              isGuideFAQ={true}
              currentpath={`${currentDomain}/${currentPath}`}
            />
          </FAQSection>
        )}
      </MainContent>
    </>
  );
}
