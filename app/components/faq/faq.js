'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import CopyIcon from '../../../public/images/copy-icon.svg';
import CopyLink from '../copyLink/copyLink';
import { FaqSection, FaqTitle, DivFAQ, FAQAnswer } from './styles';

export default function FAQ({ enterprise, isGuideFAQ, currentpath, faqList: allPosts, title, isStandardPage }) {
  //activeAccrodion use for open specific FAQ. In this we store FAQ element Id
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [heights, setHeights] = useState([]);
  useEffect(() => {
    const handleHashChange = () => {
      if (!isEmpty(window?.location?.hash?.slice(1))) {
        setActiveAccordion(window?.location?.hash?.slice(1));
      }
    };

    // Check if window object is available
    if (typeof window !== 'undefined') {
      // Set the active accordion based on initial URL hash
      if (!isEmpty(window?.location?.hash?.slice(1))) {
        setActiveAccordion(window?.location?.hash?.slice(1));
      }

      // Add event listener for hash change
      window.addEventListener('hashchange', handleHashChange);

      // Cleanup function to remove event listener
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  const onClickQuestion = useCallback(
    (faqId) => {
      setActiveAccordion(faqId === activeAccordion ? null : faqId);
    },
    [activeAccordion]
  );
  useEffect(() => {
    // Ensure this runs only on the client side
    const elements = document.getElementsByClassName('faqitem-answer');

    const scrollHeights = Array.from(elements).map((el) => el.scrollHeight);
    setHeights(scrollHeights);
  }, []);

  const faqView = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts.map((item, index) => {
      const faqId = stringToSlugyfy(item?.question);

      return (
        <>
          <DivFAQ isGuideFAQ={isGuideFAQ} onClick={() => onClickQuestion(faqId)}>
            <div className={'accordion-title'} onClick={() => onClickQuestion(faqId)}>
              <div style={{ display: 'inline-flex', alignItems: 'center' }} id={faqId}>
                <div className='accordion-heading'>
                  {item.question}
                  {isGuideFAQ && (
                    <>
                      <CopyLink tagId={faqId} className='faq-copy-icon' size={18} />
                    </>
                  )}
                </div>
              </div>
              <div>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    className={faqId !== activeAccordion ? 'active' : ''}
                    d='M1.70703 16L30.2904 16'
                    stroke='black'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                  <path d='M1.70703 16L30.2904 16' stroke='black' stroke-width='2' stroke-linecap='round' />
                </svg>
              </div>
            </div>
            <FAQAnswer
              isActive={faqId === activeAccordion}
              isGuideFAQ={isGuideFAQ}
              height={heights[index]}
              className={'faqitem-answer'}>
              <div>
                <ReactMarkdown>{item.answer}</ReactMarkdown>
              </div>
            </FAQAnswer>
          </DivFAQ>
        </>
      );
    });
  }, [activeAccordion, allPosts, heights, isGuideFAQ, onClickQuestion]);

  return (
    <>
      {!isEmpty(allPosts) && (
        <FaqSection enterprise={enterprise} isGuideFAQ={isGuideFAQ} isStandardPage={isStandardPage}>
          <Container>
            <FaqTitle isGuideFAQ={isGuideFAQ} id='faq'>
              <h2 className='faqtitle'>{!isEmpty(title) ? title : 'Frequently Asked Questions'}</h2>
              {isGuideFAQ && currentpath && (
                <Image
                  src={CopyIcon}
                  alt='copy-icon'
                  width={24}
                  height={24}
                  className='copy-icon-h4'
                  onClick={() => {
                    copy(`${currentpath}#faqs`);
                  }}
                />
              )}
            </FaqTitle>
            {faqView}
          </Container>
        </FaqSection>
      )}
    </>
  );
}
