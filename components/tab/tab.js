import { StatefulTabs, StyledTab, Tab } from 'baseui/tabs';
import { LabelMedium } from 'baseui/typography';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { ContainWrap, IconSvg, IconWrap, LeftDetail, RightDetail, TabRow } from '../../styles/homepageStyles';
import Button from '../button/button';

export default function TabView({ bgColor, textColor, isHome, tabData: allPosts }) {
  function TabOverride(rest) {
    return (
      <StyledTab {...rest}>
        {
          <LabelMedium
            overrides={{
              Block: {
                style: {
                  color: 'inherit'
                }
              }
            }}>
            {rest?.children}
          </LabelMedium>
        }
      </StyledTab>
    );
  }

  const tabBarStyle = ({ $theme }) => ({
    backgroundColor: '#fff',
    'margin-bottom': '20px',
    'padding-left': '0px',
    paddingLeft: '0',
    paddingRight: '0',
    backgroundColor: 'transparent'
  });
  const tabContentStyle = ({ $theme }) => ({
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderBottomWidth: '2px',
    borderTopWidth: '0',
    borderLeftColor: $theme.colors.mono600,
    borderRightColor: $theme.colors.mono600,
    borderTopColor: $theme.colors.mono600,
    borderBottomColor: $theme.colors.mono600,
    paddingBottom: '0',
    paddingTop: '0px',
    paddingLeft: '0',
    paddingRight: '0'
  });
  let activeKey = 0;
  const tabStyle = ({ $active, $disabled, $theme }) => ({
    backgroundColor: $active ? (bgColor ? bgColor : '#120800') : 'inherit',
    color: $active ? (textColor ? textColor : '#fff') : '#757575',
    'border-radius': '40px',
    padding: '7px 20px',
    marginLeft: '0',
    marginRight: '0'
  });

  const tablistview = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      return (
        <Tab title={item?.title} className={index === 0 ? 'ml0' : 'ml0'} key={index} id={item?.title}>
          <ContainWrap>
            <LeftDetail>
              <h4>{item?.subTitle}</h4>
              <p>{item?.description}</p>
            </LeftDetail>
            <RightDetail>
              <Image src={item?.image?.url} width={881} height={550} alt='msg-screen' />
            </RightDetail>
          </ContainWrap>
        </Tab>
      );
    });
  }, [allPosts]);

  const homeTablistview = useMemo(() => {
    if (isEmpty(allPosts)) return null;

    return allPosts?.map((item, index) => {
      const link = item?.link?.split('copilot.com/')?.[1];
      return (
        <Tab title={item?.title} className={index === 0 ? 'ml0' : 'ml0'} key={index} id={item?.title}>
          <ContainWrap>
            <LeftDetail>
              <IconWrap>
                <IconSvg>
                  <Image src={item?.icon?.url} width={44} height={44} alt='msg-icon' />
                </IconSvg>
              </IconWrap>
              <h4>{item?.title}</h4>
              <p>{item?.description}</p>
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'Learn More'}
                href={link ?? ''}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
                className='btnmobi'
              />
            </LeftDetail>
            <RightDetail>
              <Image src={item?.image?.url} width={881.76} height={550.63} alt='msg-screen' />
            </RightDetail>
          </ContainWrap>
        </Tab>
      );
    });
  }, [allPosts]);
  return (
    <>
      {!isEmpty(allPosts) && (
        <TabRow>
          <StatefulTabs
            initialState={{
              activeKey: activeKey
            }}
            overrides={{
              TabBar: {
                style: tabBarStyle
              },
              TabContent: {
                style: tabContentStyle
              },
              Tab: { component: TabOverride, style: tabStyle }
            }}>
            {isHome ? homeTablistview : tablistview}
          </StatefulTabs>
        </TabRow>
      )}
    </>
  );
}
