import { BookSection, ImageSection, DemoContain, BottomName, BgOverlay } from '../../styles/bookdemoStyles';
import BookDemoForm from '../../components/bookdemo/bookDemo';
import SEO from '../../components/seo';
import { BOOK_DEMO_SEO_ID } from '../../constants/constant';
import { getSEOdata } from '../../lib/contentful-seo';

export default function BookDemo({ seoData }) {
  return (
    <>
      <SEO seoData={seoData}></SEO>
      <BookSection>
        <BookDemoForm />
        <ImageSection>
          <BgOverlay></BgOverlay>
          <DemoContain>
            <h3>
              “Copilot is the ultimate sidekick for us. It lets us streamline client communication, manage projects, and create a special 
              on-brand experience for our clients. The platform is user-friendly, easy to set up, and the support team is always there to help.”
            </h3>
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
export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata(BOOK_DEMO_SEO_ID)) ?? [];
  seoData.canonical="https://www.copilot.com/book-demo";
  return {
    props: {
      seoData
    }
  };
}
