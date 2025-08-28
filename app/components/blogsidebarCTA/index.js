import React from 'react';
import Button from '../../components/button/button';
import { COPILOT_ONBOARDING_LINK } from '../../constants/externalLinks.js';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import StartList from '../../components/reviewSection/starList';
import { isEmpty } from '../../helpers/helpers.js';
import BlogCTAImage from '../../../public/images/blogcta.png';
import { Caption, Content, G2Section, Image, ImageDiv, ReviewText, SideBarCTA, Title } from './style';

export default function BlogSidebarCTA({ headerText, bodyText }) {
  return (
    <SideBarCTA>
      <ImageDiv>
        <Image src={BlogCTAImage.src} alt='' width={336} height={209} />
      </ImageDiv>
      <Content>
        {!isEmpty(headerText) && <Title>{headerText}</Title>} {!isEmpty(bodyText) && <Caption>{bodyText} </Caption>}
        <G2Section>
          <SVGComponent name='g2-icon' width='24' height='24' viewBox='0 0 20 20' />
          <ReviewText>
            <StartList rate={4.5} />
            <p>4.9 rating</p>
          </ReviewText>
        </G2Section>
      </Content>
      <Button
        bgColor={'--title'}
        fontColor={'--off-white-100'}
        borderColor={'--title'}
        text={'Try for free'}
        href={COPILOT_ONBOARDING_LINK}
        hoverColor={'--secondary-hover-color'}
        className={'CTA-button'}
      />
    </SideBarCTA>
  );
}
