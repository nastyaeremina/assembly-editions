'use client';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function Providers({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('test=old-domain')) {
      // Remove 'test=old-domain' from the hash
      const cleanHash = window.location.hash.replace(/[?&]test=old-domain/, '');

      // Redirect to domain-change page with the cleaned hash
      router.replace(
        `/domain-change?next=${encodeURIComponent(window.location.pathname + window.location.search + cleanHash)}`
      );
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
