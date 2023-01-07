import { BookSection, ImageSection, DemoContain, BottomName, BgOverlay } from '../../styles/bookdemoStyles';
import BookDemoForm from '../../components/bookdemo/bookDemo';
import SEO from '../../components/seo';
import { BOOK_DEMO_SEO_ID } from '../../constants/constant';

export default function BookDemo() {
  return (
    <>
      <SEO id={BOOK_DEMO_SEO_ID}></SEO>
      <BookSection>
        <BookDemoForm />
        <ImageSection>
          <BgOverlay></BgOverlay>
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
