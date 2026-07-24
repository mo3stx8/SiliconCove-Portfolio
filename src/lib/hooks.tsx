'use client';

import { useSyncExternalStore } from 'react';

export function usePathname() {
  return useSyncExternalStore(
    () => () => {},
    () => window.location.pathname,
    () => '',
  );
}

const BASE_PATH = '/SiliconCove-Portfolio';

export function useBasePath() {
  return BASE_PATH;
}
