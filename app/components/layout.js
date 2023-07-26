'use client';
import Footer from './footer/footer';

export default function Layout({ children = <></>, isEnterPrice = false }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer isEnterPrice={isEnterPrice} />
    </>
  );
}
