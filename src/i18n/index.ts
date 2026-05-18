import { en } from './en';
import { zh } from './zh';

export type Language = 'en' | 'zh';
export type Dictionary = typeof en;

export const dictionaries: Record<Language, Dictionary> = { en, zh };

export const languageNames: Record<Language, string> = {
  en: 'English',
  zh: '中文',
};
