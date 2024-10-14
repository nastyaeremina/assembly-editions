import React from 'react';
import Button from '../../components/button/button';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks.js';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import StartList from '../../components/reviewSection/starList';
import { isEmpty } from '../../helpers/helpers.js';
import { Caption, Content, G2Section, Image, ImageDiv, ReviewText, SideBarCTA, Title } from './style';
import BlogCTAImage from '../../../public/images/blogdetailCTA.png';

export default function BlogSidebarCTA({ headerText, bodyText }) {
  return (
    <SideBarCTA>
      <ImageDiv>
        <Image src={BlogCTAImage.src} alt='' width={258} height={160} />
      </ImageDiv>
      <Content>
        {!isEmpty(headerText) && <Title>{headerText}</Title>} {!isEmpty(bodyText) && <Caption>{bodyText} </Caption>}
        <G2Section>
          <SVGComponent name='g2-icon' width='20' height='20' viewBox='20' />
          <ReviewText>
            <StartList rate={5} />
            <p>4.9 rating</p>
          </ReviewText>
        </G2Section>
      </Content>
      <Button
        bgColor={'--primary'}
        fontColor={'--white'}
        borderColor={'--primary'}
        text={'Start trial'}
        href={COPILOT_ONBORADING_LINK}
        hoverColor={'--secondary-hover-color'}
        className={'CTA-button'}
      />
    </SideBarCTA>
  );
}
