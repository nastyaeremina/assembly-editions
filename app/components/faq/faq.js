'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStyletron } from 'baseui';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import { isEmpty, stringToSlugyfy } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import CopyIcon from '../../../public/images/copy-icon.svg';
import CopyLink from '../copyLink/copyLink';
import { FaqSection, FaqTitle, DivFAQ, FAQAnsware } from './styles';

export default function FAQ({ enterprise, isGuideFAQ, currentpath, faqList: allPosts, title, isStandardPage }) {
  //activeAccrodion use for open specific FAQ. In this we store FAQ element Id
  const [activeAccordion, setActiveAccordion] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined' && !isEmpty(window?.location?.hash?.slice(1))) {
      // set FAQ id that open default
      // when user open link directly like https://copilot.com//guide/customization-and-setup#how-do-i-update-the-name-that-is-used-in-the-portal-and-for-email-notifications-to-clients
      setActiveAccordion(window?.location?.hash?.slice(1));
    }
  }, []);

  const onClickQuestion = useCallback(
    (faqId) => {
      if (faqId === activeAccordion) {
        setActiveAccordion();
      } else {
        setActiveAccordion(faqId);
      }
    },
    [activeAccordion]
  );

  const faqView = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts.map((item, index) => {
      const faqId = stringToSlugyfy(item?.question);
      return (
        <>
          <DivFAQ isGuideFAQ={isGuideFAQ}>
            <div className='accordion-title' onClick={() => onClickQuestion(faqId)}>
              <div style={{ display: 'inline-flex', alignItems: 'center' }} id={faqId}>
                <div className='accordion-heading'>
                  {item?.question}{' '}
                  {isGuideFAQ && (
                    <>
                      <CopyLink tagId={faqId} className='faq-copy-icon' size={18} />
                    </>
                  )}
                </div>
                {/* {isGuideFAQ && (
                  <Image
                    src={CopyIcon}
                    alt='copy-icon'
                    width={18}
                    height={18}
                    className='faq-copy-icon'
                    onClick={() => {
                      copy(`${currentpath}#${faqId}`);
                    }}
                  />
                )} */}
              </div>
              <div>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    className={activeAccordion === faqId ? '' : 'active'}
                    d='M1.70703 16L30.2904 16'
                    stroke='black'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                  <path d='M1.70703 16L30.2904 16' stroke='black' stroke-width='2' stroke-linecap='round' />
                </svg>
              </div>
            </div>
            <FAQAnsware className={activeAccordion === faqId ? 'active' : ''} isGuideFAQ={isGuideFAQ}>
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
      <FaqSection enterprise={enterprise} isGuideFAQ={isGuideFAQ} isStandardPage={isStandardPage}>
        {!isEmpty(allPosts) && (
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
        )}
      </FaqSection>
    </>
  );
}
