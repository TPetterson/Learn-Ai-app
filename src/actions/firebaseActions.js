import type { Action } from '../types';
import database from './database';

export function fetchArticles() {
  return dispatch => {
    dispatch(fetchRequested());
    return database
      .ref('/')
      .once('value', snap => {
        const invite = snap.val();
        dispatch(fetchSucceeded(invite));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchFailed());
      });
  };
}

export const fetchRequested = (): Action => ({ type: 'FETCH_REQUESTED' });
const fetchFailed = (): Action => ({ type: 'FETCH_FAILED' });
const fetchSucceeded = (articles: object): Action => ({
  type: 'FETCH_SUCCEEDED',
  payload: { articles }
});
