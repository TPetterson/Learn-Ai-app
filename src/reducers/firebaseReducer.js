import type { Action, FirebaseState } from '../types';

const initialState = {
  data: { Articles: [{ id: 1 }, { id: 2 }] },
  fetching: false,
  success: 'Nah',
  error: 'Nah'
};

const reducer = (
  state: FirebaseState = initialState,
  action: Action
): FirebaseState => {
  switch (action.type) {
    case 'FETCH_REQUESTED':
      console.log('feeeetch');
      return { ...state, fetching: true };
    case 'FETCH_FAILED':
      return { ...state, fetching: false, error: 'Data fetch failed' };
    case 'FETCH_SUCCEEDED':
      return {
        ...state,
        fetching: false,
        success: 'Data fetch succeeded',
        data: action.payload.articles
      };
    default:
      return state;
  }
};

export default reducer;
