'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStyletron } from 'baseui';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { getFAQData, getFAQs } from '../../lib/contentful-faq';
import { PER_API_LIMIT_FOR_FAQ_SECTION } from '../../constants/constant';
import { FaqSection, FaqTitle, DivFAQ, FAQAnsware } from './styles';

export default function FAQ({ enterprise, contentID, faqData, isGuideFAQ }) {
  const [allPosts, setAppPosts] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(false);

  const loadData = useCallback(async () => {
    try {
      let posts = [];
      if (contentID) {
        posts = (await getFAQs(contentID)) ?? [];
      } else {
        let allPosts = [];
        let data = [];
        const dataIdList = faqData?.map((item) => `"${item.sys.id}"`) || [];
        for (let i = 0; i < dataIdList.length; i += PER_API_LIMIT_FOR_FAQ_SECTION) {
          const batch = dataIdList.slice(i, i + PER_API_LIMIT_FOR_FAQ_SECTION);
          data = (await getFAQData(`id_in: [${batch}]`)) || [];
          allPosts = allPosts.concat(data);
        }
        posts = dataIdList
          ?.map((dataId) => {
            const matchedData = allPosts?.find((dataItem) => dataItem.sys.id === dataId.replace(/"/g, ''));
            return matchedData ? { ...matchedData } : null;
          })
          .filter((item) => item !== null);
      }
      setAppPosts(posts);
    } catch (error) {
      console.log('error', error);
      return null;
    }
  }, [contentID, faqData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onClickQuestion = useCallback(
    (index) => {
      if (index === activeAccordion) {
        setActiveAccordion();
      } else {
        setActiveAccordion(index);
      }
    },
    [activeAccordion]
  );

  const faqView = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      return (
        <>
          <DivFAQ isGuideFAQ={isGuideFAQ}>
            <div className='accordion-title' onClick={() => onClickQuestion(index)}>
              <div className='accordion-heading'>{item?.question}</div>
              <div>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    className={activeAccordion === index ? '' : 'active'}
                    d='M1.70703 16L30.2904 16'
                    stroke='black'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                  <path d='M1.70703 16L30.2904 16' stroke='black' stroke-width='2' stroke-linecap='round' />
                </svg>
              </div>
            </div>
            <FAQAnsware className={activeAccordion === index ? 'active' : ''} isGuideFAQ={isGuideFAQ}>
              <div>
                <ReactMarkdown>{item?.answer}</ReactMarkdown>
              </div>
            </FAQAnsware>
          </DivFAQ>
        </>
      );
    });
  }, [activeAccordion, allPosts, isGuideFAQ, onClickQuestion]);

  const [css] = useStyletron();
  return (
    <>
      <FaqSection enterprise={enterprise} isGuideFAQ={isGuideFAQ}>
        {!isEmpty(allPosts) && (
          <Container>
            <FaqTitle isGuideFAQ={isGuideFAQ}>
              <h2 className='faqtitle'>Frequently Asked Questions</h2>
            </FaqTitle>

            {faqView}
          </Container>
        )}
      </FaqSection>
    </>
  );
}
