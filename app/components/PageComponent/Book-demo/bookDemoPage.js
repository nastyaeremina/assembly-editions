'use client';
import Image from 'next/image';
import {
  BookSection,
  ImageSection,
  DemoContain,
  BottomName,
  PropertyDiv,
  SectionWrapper,
  ImageSectionWrapper,
  ImageDiv,
  DotIcon,
  TextBox,
  LeftSection,
  DotIconLarge,
  LogoSection,
  LogoDiv,
  MainBlockWrapper
} from '../../../styles/bookdemoStyles';
import BookDemoForm from '../../bookdemo/bookDemo';
import BookDemoImage from '../../../../public/images/new-bookdemo.png';
import { Container } from '../../../styles/commonStyles';
import G2Logo from '../../../../public/images/round-g2logo.png';
import CapterraLogo from '../../../../public/images/round-capterra-logo.png';
import ProductHuntLogo from '../../../../public/images/round-product-hunt-logo.png';

export default function BookDemoPage({ data, thankYouMessage, externalLinks = {} }) {
  return (
    <MainBlockWrapper>
      <BookSection>
        <Container>
          <SectionWrapper>
            <BookDemoForm data={data} thankYouMessage={thankYouMessage} externalLinks={externalLinks} />
            <ImageSectionWrapper>
              <ImageSection>
                <ImageDiv>
                  <Image src={BookDemoImage} width={648} height={930} alt='Book Demo' className='img' />
                </ImageDiv>
                <TextBox>
                  <PropertyDiv>
                    <LeftSection>
                      <p>1000+ reviews</p>
                      <DotIconLarge />
                      <p>4.8 (5)</p>
                    </LeftSection>
                    <LogoSection>
                      <LogoDiv>
                        <Image src={G2Logo} alt='g2-icon' width={33} height={33} />
                      </LogoDiv>
                      <LogoDiv>
                        <Image src={CapterraLogo} alt='capterra-icon' width={33} height={33} />
                      </LogoDiv>
                      <LogoDiv>
                        <Image src={ProductHuntLogo} alt='producthunt-icon' width={33} height={33} />
                      </LogoDiv>
                    </LogoSection>
                  </PropertyDiv>
                  <DemoContain>
                    <p>
                      “Assembly eliminates all the clutter. It keeps everything streamlined, centralized, and easy to
                      manage. Clients also love it at first glance because of its convenience.”
                    </p>
                    <BottomName>
                      <p>Mallory Durrick</p>
                      <DotIcon />
                      <p>Founder Durrick Designs</p>
                    </BottomName>
                  </DemoContain>
                </TextBox>
              </ImageSection>
            </ImageSectionWrapper>
          </SectionWrapper>
        </Container>
      </BookSection>
    </MainBlockWrapper>
  );
}
