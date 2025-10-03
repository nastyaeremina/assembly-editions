import React from 'react';
import Button from '../../components/button/button';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import StartList from '../../components/reviewSection/starList';
import { isEmpty } from '../../helpers/helpers.js';
import { EXTERNAL_LINK_KEYS } from '../../constants/constant';
import BlogCTAImage from '../../../public/images/blogcta.png';
import { Caption, Content, G2Section, Image, ImageDiv, ReviewText, SideBarCTA, Title } from './style';
import ButtonV2Component from '../button/buttonV2/buttonV2';

export default function BlogSidebarCTA({ headerText, bodyText, externalLinks = {} }) {
  return (
    <SideBarCTA>
      <ImageDiv>
        <Image src={BlogCTAImage.src} alt='' width={336} height={209} className='image' />
      </ImageDiv>
      <Content>
        {!isEmpty(headerText) && <Title>{headerText}</Title>} {!isEmpty(bodyText) && <Caption>{bodyText} </Caption>}
        <G2Section>
          <SVGComponent name='g2-icon' width='18' height='18' viewBox='0 0 21 21' />
          <ReviewText>
            <StartList rate={4.5} iconSize='18' />
            <p>4.9 rating</p>
          </ReviewText>
        </G2Section>
      </Content>

      <ButtonV2Component
        title={'Try for free'}
        href={externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#'}
        isWidth
      />
    </SideBarCTA>
  );
}
