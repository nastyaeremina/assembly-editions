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
            <h3>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam”
            </h3>
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
