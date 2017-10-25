import type { Action } from '../types';

export const appStarted = (): Action => ({
  type: 'APP_STARTED'
});

export const setTheme = (theme: string): Action => ({
  type: 'SET_THEME',
  payload: { theme }
});
