'use client';
import { BookSection, ImageSection, DemoContain, BottomName, BgOverlay } from '../../../styles/bookdemoStyles';
import BookDemoForm from '../../bookdemo/bookDemo';

export default function BookDemoPage() {
  return (
    <>
      <BookSection>
        <BookDemoForm />
        <ImageSection>
          <BgOverlay></BgOverlay>
          <DemoContain>
            <p>
              “Copilot is the ultimate sidekick for us. It lets us streamline client communication, manage projects, and
              create a special on-brand experience for our clients. The platform is user-friendly, easy to set up, and
              the support team is always there to help.”
            </p>
            <BottomName>
              <p>Joshua Brueckner</p>
              <p>Trulytell</p>
            </BottomName>
          </DemoContain>
        </ImageSection>
      </BookSection>
    </>
  );
}
