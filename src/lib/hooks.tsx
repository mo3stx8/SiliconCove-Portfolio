'use client';

import { useSyncExternalStore } from 'react';

export function usePathname() {
  return useSyncExternalStore(
    () => () => {},
    () => window.location.pathname,
    () => '',
  );
}

export function useBasePath() {
  return useSyncExternalStore(
    () => () => {},
    () => {
      const path = window.location.pathname;
      if (path.startsWith('/SiliconCove-Portfolio/')) return '/SiliconCove-Portfolio';
      return '';
    },
    () => '/SiliconCove-Portfolio',
  );
}
