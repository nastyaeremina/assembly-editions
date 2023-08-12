import React from 'react';
import slugify from 'slugify';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import FAQ from '../../components/faq/faq';
import { isEmpty } from '../../helpers/helpers';
import { Caption, FAQSection, GuideCenter, GuideDetail, HeroSection, MainContent, PageTitle } from './styles';

export default function GuideHome({ detail }) {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h2 id={`${slugify(newNode?.toLowerCase())}-h2`}>{children}</h2>;
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h2 id={`${slugify(newNode?.toLowerCase())}-h2`}>{children}</h2>;
      },

      [BLOCKS.HEADING_3]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h3 id={`${slugify(newNode?.toLowerCase())}-h3`}>{children}</h3>;
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h4 id={`${slugify(newNode?.toLowerCase())}-h4`}>{children}</h4>;
      },
      [BLOCKS.HEADING_5]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h5 id={`${slugify(newNode?.toLowerCase())}-h5`}>{children}</h5>;
      },
      [BLOCKS.HEADING_6]: (node, children) => {
        var newNode = children[0];
        while (newNode?.type) {
          newNode = newNode?.props?.children;
        }
        return <h6 id={`${slugify(newNode?.toLowerCase())}-h6`}>{children}</h6>;
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
        {!isEmpty(detail?.faqGroup?.sys?.id) && (
          <FAQSection>
            <FAQ contentID={detail?.faqGroup?.sys?.id} isGuideFAQ={true} />
          </FAQSection>
        )}
      </MainContent>
    </>
  );
}
