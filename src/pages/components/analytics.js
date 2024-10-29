'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track on client side
    if (typeof window === 'undefined') return;

    // Function to track page view
    const trackPageView = () => {
      // Get or create session ID
      let sessionId = sessionStorage.getItem('_pa_sid');
      if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem('_pa_sid', sessionId);
      }

      // Send analytics data
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: pathname,
          sessionId: sessionId,
          referrer: document.referrer,
          screenSize: `${window.innerWidth}x${window.innerHeight}`,
        }),
      }).catch(console.error);
    };

    // Track the page view
    trackPageView();
  }, [pathname]); // Re-run when path changes

  return null;
}