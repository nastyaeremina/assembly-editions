'use client';
import Footer from '../footer/footer';
import NavbarComponent from '../navbar/mainNavbar';
import ErrorPage from './404-page';

export default function NotFoundPage({ topbarContent, solutionDataList, isAuthenticated, footerData }) {
  return (
    <>
      <div>
        <main>
          <NavbarComponent
            isEnterPrice={false}
            isAuthenticated={isAuthenticated}
            topbarContent={topbarContent}
            solutionDataList={solutionDataList}
          />
          <ErrorPage />
        </main>
      </div>
      <Footer isEnterPrice={false} footerData={footerData} />
    </>
  );
}
