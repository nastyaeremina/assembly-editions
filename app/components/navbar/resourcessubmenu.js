'use client';

import { GUIDE_LINK_INFO } from '../../constants/constant';
import { COPILOT_SECURITY_LINK, COPILOT_SYSTEM_STATUS_LINK } from '../../constants/externalLinks';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import {
  NavigationBlock,
  NavMenu,
  MobileListLi,
  MenuMobileWrap,
  LeftImg,
  RightText,
  LastDroplist,
  Last
} from './styles';

export default function ResourcesSubMenu({ mobile }) {
  return (
    <>
      <NavMenu mobile={mobile} isBoxShadow>
        <NavigationBlock isResourcemenu>
          <MobileListLi>
            <MenuMobileWrap href={GUIDE_LINK_INFO.link}>
              <LeftImg>
                <SVGComponent name='copilot-guide-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>{GUIDE_LINK_INFO.text}</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href='/university'>
              <LeftImg>
                <SVGComponent name='video-tutorials-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Video Tutorials</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href={'/updates'}>
              <LeftImg>
                <SVGComponent name='whats-new-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>What’s New</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href='/experts'>
              <LeftImg>
                <SVGComponent name='find-expert-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Find an Expert</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href={COPILOT_SECURITY_LINK}>
              <LeftImg>
                <SVGComponent name='security-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Security</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href={'/brand'}>
              <LeftImg>
                <SVGComponent name='brand-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Brand</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href={'/jobs'}>
              <LeftImg>
                <SVGComponent name='jobs-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Jobs</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>

          <MobileListLi>
            <MenuMobileWrap href={COPILOT_SYSTEM_STATUS_LINK}>
              <LeftImg>
                <SVGComponent name='system-status-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>System Status</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href={'/experts-program'}>
              <LeftImg>
                <SVGComponent name='experts-program-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Experts Program</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <MobileListLi>
            <MenuMobileWrap href={'/affiliates-program'}>
              <LeftImg>
                <SVGComponent name='affiliate-program-icon' width='16' height='16' viewBox='16' />
              </LeftImg>
              <RightText resourcetext>
                <h6>Affiliates Program</h6>
              </RightText>
            </MenuMobileWrap>
          </MobileListLi>
          <LastDroplist Mobilemenu isResourcemenu>
            <Last className='icon-link'>
              <a href={'/blog'} className='learn-link mb0'>
                Read our blog
                <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                  <path
                    d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__tipPath'
                  />
                  <path
                    d='M10.33 5.99951H1.5'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__linePath'
                  />
                </svg>
              </a>
            </Last>
          </LastDroplist>
        </NavigationBlock>
      </NavMenu>
    </>
  );
}
