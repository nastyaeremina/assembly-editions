'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStyletron } from 'baseui';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { getFAQs } from '../../lib/contentful-faq';
import { FaqSection, FaqTitle, DivFAQ, FAQAnsware } from './styles';

export default function FAQ({ enterprise, contentID, isGuideFAQ }) {
  const [allPosts, setAppPosts] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(false);

  const loadData = useCallback(async () => {
    const posts = (await getFAQs(contentID)) ?? [];
    setAppPosts(posts);
  }, [contentID]);

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
          <DivFAQ>
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
            <FAQAnsware className={activeAccordion === index ? 'active' : ''}>
              <div>{item?.answer}</div>
            </FAQAnsware>
          </DivFAQ>
        </>
      );
    });
  }, [activeAccordion, allPosts, onClickQuestion]);

  const [css] = useStyletron();
  return (
    <>
      <FaqSection enterprise={enterprise} isGuideFAQ={isGuideFAQ}>
        <Container>
          <FaqTitle>
            <h2 className='faqtitle'>Frequently Asked Questions</h2>
          </FaqTitle>

          {faqView}
        </Container>
      </FaqSection>
    </>
  );
}
