import { StatefulTabs, StyledTab, Tab } from 'baseui/tabs';
import { LabelMedium } from 'baseui/typography';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FEATURES_MESSAG_TAB_ID, HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import { getTabGroupById } from '../../lib/contentful-tabs';
import { Container, SecondryButton } from '../../styles/commonStyles';
import { ContainWrap, IconSvg, IconWrap, LeftDetail, RightDetail, TabRow } from '../../styles/homepageStyles';
import Button from '../button/button';

export default function TabView({ tabId, bgColor, textColor, isHome }) {
  console.log('bgColor', bgColor, textColor);
  const [allPosts, setAppPosts] = useState([]);
  const loadData = useCallback(async () => {
    const posts = (await getTabGroupById(tabId)) ?? [];
    setAppPosts(posts);
  }, [tabId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  function TabOverride(rest) {
    // const { $active, id } = rest;
    // const fontColor = MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.fontColor
    // const bgColor = MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.bgColor

    // const newRest = {
    //     ...rest,
    //     bgColor: bgColor,
    //     fontColor: fontColor,
    // };
    return (
      <StyledTab {...rest}>
        {
          <LabelMedium
            overrides={{
              Block: {
                style: {
                  color: 'inherit'
                  // ':hover': { color: '#131313;' }
                  // color: $active ? MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.fontColor : 'inherit',
                  // backgroundColor: $active ? MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.bgColor : 'inherit', ':hover': { color: 'inherit' }
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
    paddingRight: '0'
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
    // outlineColor: $theme.colors.white,
    // color: $active ? fontColor && fontColor : '#757575',
    // backgroundColor: $active ? bgColor && bgColor : 'inherit',

    // eslint-disable-next-line no-dupe-keys
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
