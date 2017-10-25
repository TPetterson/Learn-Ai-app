import type { Action, AppState } from '../types';

const initialState = {
  started: false,
  currentTheme: 'defaultTheme',
  fetch: false
};

const reducer = (state: AppState = initialState, action: Action): AppState => {
  switch (action.type) {
    case 'APP_STARTED':
      return { ...state, started: true };
    case 'SET_THEME':
      return { ...state, currentTheme: action.payload.theme };
    default:
      return state;
  }
};

export default reducer;
