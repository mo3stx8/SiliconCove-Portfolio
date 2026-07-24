'use client';

import { createContext, useContext, ReactNode } from 'react';

export type Locale = 'en' | 'ar';

type Messages = Record<string, unknown>;

const I18nContext = createContext<{ locale: Locale; messages: Messages }>({
  locale: 'en',
  messages: {},
});

export function useLocale() {
  return useContext(I18nContext).locale;
}

export function useMessages() {
  return useContext(I18nContext).messages;
}

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function t(messages: Messages, key: string): string {
  const keys = key.split('.');
  let result: unknown = messages;
  for (const k of keys) {
    if (typeof result === 'object' && result !== null) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof result === 'string' ? result : key;
}
