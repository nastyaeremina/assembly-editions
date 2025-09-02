'use client';
import ErrorPage from './404-page';

export default function NotFoundPage({ children }) {
  return (
    <>
      <div>
        <main>
          {children}
          <ErrorPage />
        </main>
      </div>
    </>
  );
}
