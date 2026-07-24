'use client';

import { useSyncExternalStore } from 'react';

export function usePathname() {
  return useSyncExternalStore(
    () => () => {},
    () => window.location.pathname,
    () => '',
  );
}
