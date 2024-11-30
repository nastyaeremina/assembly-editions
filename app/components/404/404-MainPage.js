'use client';
import Footer from '../footer/footer';
import ErrorPage from './404-page';

export default function NotFoundPage({ footerData, children }) {
  return (
    <>
      <div>
        <main>
          {children}
          <ErrorPage />
        </main>
      </div>
      <Footer isEnterPrice={false} footerData={footerData} />
    </>
  );
}
