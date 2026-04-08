import { type TailorThemeProps } from '../types';
import modernTheme from './modern';
import classicTheme from './classic';
import classicJustinTheme from './classic-justin';

export const themes: Record<string, TailorThemeProps> = {
  modern: modernTheme,
  classic: classicTheme,
  'classic-justin': classicJustinTheme,
} as const;

export type ThemeName = keyof typeof themes;
