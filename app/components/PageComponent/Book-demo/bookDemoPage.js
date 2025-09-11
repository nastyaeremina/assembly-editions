'use client';
import Image from 'next/image';
import { BookSection, ImageSection, DemoContain, BottomName, PropertyDiv } from '../../../styles/bookdemoStyles';
import BookDemoForm from '../../bookdemo/bookDemo';
import BookDemoImage from '../../../../public/images/bookdemo.png';
import SocialProofProperty from '../../socialProofProperty/socialProofProperty';
import UserAvtar from '../../../../public/images/useravtar.png';

export default function BookDemoPage({ data, thankYouMessage, externalLinks = {} }) {
  return (
    <>
      <BookSection>
        <BookDemoForm  data={data} thankYouMessage={thankYouMessage} externalLinks={externalLinks} />
        <div className='image-section'>
          <ImageSection>
            <div className='img'>
              <Image src={BookDemoImage} width={752} height={771} alt='' />
            </div>
            <PropertyDiv>
              <SocialProofProperty rateCount='1000+' isBookDemo={true} />
            </PropertyDiv>
            <DemoContain>
              <p>
                “A modern, fast, and intuitive tool to engage with clients and get work done. A natural extension of our
                brand and business.”
              </p>
              <BottomName>
                <Image src={UserAvtar} width={32} height={32} alt='' />
                <p>Lachlan Nicolson, Waymaker Finance</p>
              </BottomName>
            </DemoContain>
          </ImageSection>
        </div>
      </BookSection>
    </>
  );
}
