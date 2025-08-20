import React from 'react';
import Link from 'next/link';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import {
  COPILOT_FACEBOOK_LINK,
  COPILOT_INSTAGRAM_LINK,
  COPILOT_LINKEDIN_LINK,
  COPILOT_TWITTER_LINK,
  COPILOT_YOUTUBE_CHANNEL_LINK
} from '../../constants/externalLinks';
import { FooterSocialItem, FooterSocialList } from './styles';

function SocialMediaListItems() {
  return (
    <FooterSocialList>
      <Link href={COPILOT_TWITTER_LINK} aria-label={'Twitter'}>
        <FooterSocialItem>
          <SVGComponent name='x-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
        </FooterSocialItem>
      </Link>
      <Link href={COPILOT_LINKEDIN_LINK} aria-label={'Linkedin'}>
        <FooterSocialItem>
          <SVGComponent name='linkedin-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
        </FooterSocialItem>
      </Link>
      <Link href={COPILOT_INSTAGRAM_LINK} aria-label={'Instagram'}>
        <FooterSocialItem>
          <SVGComponent name='instagram-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
        </FooterSocialItem>
      </Link>
      <Link href={COPILOT_YOUTUBE_CHANNEL_LINK} aria-label={'Youtube'}>
        <FooterSocialItem>
          <SVGComponent name='you-tube-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
        </FooterSocialItem>
      </Link>
      <Link href={COPILOT_FACEBOOK_LINK} aria-label={'Facebook'}>
        <FooterSocialItem>
          <SVGComponent name='facebook-logo-gray' width='24' height='24' viewBox='0 0 24 24' />
        </FooterSocialItem>
      </Link>
    </FooterSocialList>
  );
}

export default SocialMediaListItems;
