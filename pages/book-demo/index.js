import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
// import {} from "../../styles/commonStyles";

import { BookSection, ImageSection, DemoContain, BottomName, BgOverlay } from '../../styles/bookdemoStyles';
import BookDemoForm from '../../components/bookdemo/bookDemo';
import Slider from '../../components/bookdemo/slider';

export default function BookDemo() {
  return (
    <>
      <NextSeo
        title='Copilot - It’s all about connection'
        description='copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business.'
      />
      <BookSection>
        <BookDemoForm />
        <ImageSection>
          <BgOverlay></BgOverlay>
          {/* <Image src='/images/bookdemo.png' alt='book-logo' width={900} height={900} /> */}
          <DemoContain>
            <h3>“Here’s a quote from someone, its not a long quote but it does fit on 3 lines”</h3>
            <BottomName>
              <p>John Doe</p>
              <p>Founder at ABC Agency</p>
            </BottomName>
          </DemoContain>
        </ImageSection>
      </BookSection>
    </>
  );
}
