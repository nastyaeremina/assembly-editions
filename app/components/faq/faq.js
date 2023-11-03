'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStyletron } from 'baseui';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';
import copy from 'copy-to-clipboard';
import slugify from 'slugify';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { getFAQData } from '../../lib/contentful-faq';
import { PER_API_LIMIT_FOR_FAQ_SECTION } from '../../constants/constant';
import CopyIcon from '../../../public/images/copy-icon.svg';
import { FaqSection, FaqTitle, DivFAQ, FAQAnsware } from './styles';
import CopyLink from '../copyLink/copyLink';

export default function FAQ({ enterprise, faqData, isGuideFAQ, currentpath, faqList }) {
  const [allPosts, setAppPosts] = useState([]);
  //activeAccrodion use for open specific FAQ. In this we store FAQ element Id
  const [activeAccordion, setActiveAccordion] = useState();

  const loadData = useCallback(async () => {
    try {
      let posts = [];

      if (!isEmpty(faqList)) {
        //Some cases we get all faqlist rather than only FAQ Id list.
        //so we don't need to call fetch API for this
        posts = faqList;
      } else {
        let allPosts = [];
        const dataIdList = faqData?.map((item) => `"${item.sys.id}"`) || [];

        const batchPromises = [];

        for (let i = 0; i < dataIdList.length; i += PER_API_LIMIT_FOR_FAQ_SECTION) {
          const batch = dataIdList.slice(i, i + PER_API_LIMIT_FOR_FAQ_SECTION);
          batchPromises.push(Promise.all(batch.map((id) => getFAQData(`id_in: [${id}]`))));
        }

        const batchResults = await Promise.all(batchPromises);
        batchResults.forEach((data) => {
          allPosts = allPosts.concat(...data);
        });
        posts = dataIdList
          ?.map((dataId) => {
            const matchedData = allPosts?.find((dataItem) => {
              return dataItem?.sys?.id === dataId.replace(/"/g, '');
            });
            return matchedData ? { ...matchedData } : null;
          })
          .filter((item) => item !== null);
      }
      setAppPosts(posts);
    } catch (error) {
      console.log('error', error);
      return null;
    }
  }, [faqData, faqList]);

  useEffect(() => {
    loadData();
    if (typeof window !== 'undefined' && !isEmpty(window?.location?.hash?.slice(1))) {
      // set FAQ id that open default
      // when user open link directly like https://copilot.com//guide/customization-and-setup#how-do-i-update-the-name-that-is-used-in-the-portal-and-for-email-notifications-to-clients
      setActiveAccordion(window?.location?.hash?.slice(1));
    }
  }, [loadData]);

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
    const faqDetailList = isEmpty(faqList) ? allPosts : faqList;
    if (isEmpty(faqDetailList)) return null;
    return faqDetailList?.map((item, index) => {
      const faqId = slugify(item?.question, { lower: true }) || '';
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
  }, [activeAccordion, allPosts, faqList, isGuideFAQ, onClickQuestion]);

  const [css] = useStyletron();
  return (
    <>
      <FaqSection enterprise={enterprise} isGuideFAQ={isGuideFAQ}>
        {(!isEmpty(faqList) || !isEmpty(allPosts)) && (
          <Container>
            <FaqTitle isGuideFAQ={isGuideFAQ} id='faq'>
              <h2 className='faqtitle'>Frequently Asked Questions</h2>
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
