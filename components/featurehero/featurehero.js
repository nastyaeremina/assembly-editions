import { Container, PrimaryButton } from '../../styles/commonStyles';
import { FeatureHeroSection, HeroBlock, BlockLeft, BlockRight, BlockImage, BlockLine, BLockImg } from './styles';
import Image from 'next/image';
import Button from '../button/button';
import { HEADER_LIST, HOME_MODULE_LIST, MODULE_COLOR_LIST, NAVBAR_COLOR_LIST } from '../../constants/constant';

export default function FeatureHero({ currentModule }) {
  const colorList = NAVBAR_COLOR_LIST[currentModule];
  return (
    <FeatureHeroSection>
      <Container>
        <HeroBlock>
          <BlockLeft>
            <BlockLine>
              <BlockImage>
                <Image src='/images/module-icon.svg' alt='main-logo' height={44} width={44} />
              </BlockImage>
            </BlockLine>
            <h2>Messaging App</h2>
            <p>
              Make client communication secure and seamless, and never miss a message with comprehensive email
              notifications.
            </p>
            {/* <PrimaryButton>
              <a href='/'>Start Trial</a>
            </PrimaryButton> */}
            <Button
              bgColor={colorList?.buttonColor}
              borderColor={colorList?.buttonColor}
              fontColor={colorList?.buttontextColor}
              href='#'
              text={'Start Trial'}
            />
          </BlockLeft>
          <BlockRight>
            <BLockImg>
              <Image src='/images/heroimage.png' alt='main-logo' height={392} width={570} className='' />
              <Image src='/images/videoiconblack.svg' alt='video-logo' height={76} width={76} className='icon' />
            </BLockImg>
          </BlockRight>
        </HeroBlock>
      </Container>
    </FeatureHeroSection>
  );
}
