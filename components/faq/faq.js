import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useStyletron } from 'baseui';
import { Accordion, Panel } from 'baseui/accordion';
import { isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { getFAQs } from '../../lib/contentful-faq';
import { FaqSection, FaqWrap, FaqTitle, FaqPanel } from './styles';

function CustomPanel(props) {
  return <Panel {...props} />;
}

export default function FAQ({ enterprise, contentID }) {
  const [allPosts, setAppPosts] = useState([]);
  const loadData = useCallback(async () => {
    const posts = (await getFAQs(contentID)) ?? [];
    console.log(posts);
    setAppPosts(posts);
  }, [contentID]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const faqView = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      return (
        <CustomPanel
          title={
            <div className='listtitle' aria-expanded={true}>
              {item?.question}
            </div>
          }
          key={`faqview_index_${index}`}>
          <div className='listcaption' aria-expanded={true}>
            {item?.answer}
          </div>
        </CustomPanel>
      );
    });
  }, [allPosts]);

  const [css] = useStyletron();
  return (
    <>
      <FaqSection enterprise={enterprise}>
        <Container>
          <FaqTitle>
            <h3 className='faqtitle'>Frequently Asked Questions</h3>
          </FaqTitle>
          <Accordion
            onChange={({ expanded }) => console.log('expanded', expanded)}
            overrides={{
              Header: {
                style: ({ $theme }) => ({
                  color: '#131313',
                  paddingTop: '40px',
                  paddingBottom: '0px',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  fontSize: '32px',
                  lineHeight: '34px',
                  fontFamily: 'Bagoss',
                  fontWeight: '400',
                  backgroundColor: 'transparent'

                  // ":hover": {
                  //   color: "white",
                  // },
                })
              },
              Content: {
                style: ({ $theme }) => ({
                  backgroundColor: 'transparent',
                  paddingTop: '0',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  paddingBottom: '40px',
                  color: '#4C4C4C',
                  fontSize: '24px',
                  lineHeight: '31px',
                  fontFamily: 'Bagoss',
                  fontWeight: '400',
                  letterSpacing: '0.02em'
                })
              },
              ContentAnimationContainer: {
                style: ({ $theme }) => ({
                  padding: '0px'
                })
              },
              PanelContainer: {
                style: ({ $theme }) => ({
                  borderBottomColor: '#131313',
                  overflow: 'hidden',
                  paddingBottom: '40px',
                  transition: 'all 350ms ease-in-out'
                  // ':hover': {
                  //   backgroundColor: 'rgba(5, 255, 0, 0.12)'
                  // }
                })
              },
              ToggleIcon: {
                style: ({ $theme }) => ({
                  color: '#000000',
                  paddingRight: '0',
                  width: '32px',
                  height: '32px'
                })
              },
              ToggleIconGroup: {
                style: ({ $theme }) => ({
                  fontWeight: '100',
                  paddingRight: '0',
                  fontSize: '32px'
                })
              }
            }}>
            {faqView}
          </Accordion>
        </Container>
      </FaqSection>
    </>
  );
}
