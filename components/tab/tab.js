import { StatefulTabs, StyledTab, Tab } from 'baseui/tabs';
import { LabelMedium } from 'baseui/typography';
import Image from 'next/image';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import {
  ContainWrap,
  IconSvg,
  IconWrap,
  ImageDiv,
  LeftDetail,
  RightDetail,
  TabRow,
  ZoomImage
} from '../../styles/homepageStyles';
import Button from '../button/button';
import TabContent from '../tabbutton/TabContent';
import TabNavItem from '../tabbutton/TabNavItem';
import { Tabbutton } from '../tabbutton/tabstyled';
import { OverLayDiv } from '../../styles/blogstyles';
import ZoomImg from '../zoomImage';

export default function TabView({ bgColor, textColor, isHome, tabData: allPosts, isAutomation }) {
  const [activeTab, setActiveTab] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Tabbutton className='Tabs'>
        <ul className='nav'>
          {allPosts?.map((item, index) => {
            return (
              <>
                <TabNavItem
                  title={item?.title}
                  bgColor={bgColor}
                  textColor={textColor}
                  id={index}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </>
            );
          })}
        </ul>
        <div className='outlet'>
          {allPosts?.map((item, index) => {
            const link = item?.link?.split('copilot.com/')?.[1];
            return (
              <>
                <TabContent id={index} activeTab={activeTab}>
                  <ContainWrap isAutomation={isAutomation}>
                    <LeftDetail>
                      {item?.icon?.url && (
                        <IconWrap>
                          <IconSvg>
                            <Image src={item?.icon?.url} width={44} height={44} alt='msg-icon' />
                          </IconSvg>
                        </IconWrap>
                      )}
                      <h3>{item?.title}</h3>
                      <p>{item?.description}</p>
                      {link && (
                        <Button
                          bgColor={'transparent'}
                          fontColor={'#000000'}
                          borderColor={'#000000'}
                          href={link ?? ''}
                          text={'Learn More'}
                          hoverColor={'rgba(0, 0, 0, 0.5)'}
                          className='btnmobi'
                        />
                      )}
                    </LeftDetail>
                    <RightDetail onClick={onClick} isAutomation={isAutomation}>
                      <ZoomImg src={item?.image?.url} width={881.76} height={550.63} alt='msg-screen' />
                    </RightDetail>
                  </ContainWrap>
                </TabContent>
              </>
            );
          })}
        </div>
      </Tabbutton>
    </>
  );
}
