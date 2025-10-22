'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import CopyIcon from '../../../public/images/copy-icon.svg';
import CopyLink from '../copyLink/copyLink';
import { FaqSection, FaqTitle, DivFAQ, FAQAnswer } from './styles';

export default function FAQ({ isGuideFAQ, currentpath, faqList: allPosts, title }) {
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
                  <p>{item.question}</p>
                  {isGuideFAQ && (
                    <div className='copy-icon'>
                      <CopyLink tagId={faqId} className='faq-copy-icon' size={18} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10.0014 1.87524C10.4822 1.87524 10.8719 2.265 10.8719 2.74578V17.2547C10.8719 17.7355 10.4822 18.1252 10.0014 18.1252C9.52061 18.1252 9.13086 17.7355 9.13086 17.2547V2.74578C9.13086 2.265 9.52061 1.87524 10.0014 1.87524Z'
                    fill='var(--title)'
                    className={faqId == activeAccordion ? 'active' : ''}
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M1.87695 10.0004C1.87695 9.51963 2.26671 9.12988 2.74749 9.12988H17.2564C17.7372 9.12988 18.127 9.51963 18.127 10.0004C18.127 10.4812 17.7372 10.871 17.2564 10.871H2.74749C2.26671 10.871 1.87695 10.4812 1.87695 10.0004Z'
                    fill='var(--title)'
                  />
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
        <FaqSection isGuideFAQ={isGuideFAQ}>
          {isGuideFAQ ? (
            <>
              <FaqTitle isGuideFAQ={isGuideFAQ} id='faq'>
                <h2 className='faqtitle'>{!isEmpty(title) ? title : 'Frequently asked questions'}</h2>
                {isGuideFAQ && currentpath && <CopyLink tagId={`faqs`} className='copy-icon' size={24} />}
              </FaqTitle>
              {faqView}
            </>
          ) : (
            <Container>
              <FaqTitle isGuideFAQ={isGuideFAQ} id='faq'>
                <h2 className='faqtitle'>{!isEmpty(title) ? title : 'Frequently asked questions'}</h2>
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
          )}
        </FaqSection>
      )}
    </>
  );
}
