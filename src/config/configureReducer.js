// @flow
import { combineReducers } from 'redux';

import * as reducers from '../reducers';

const configureReducer = (platformReducers: Object, initialState: Object) => {
  let reducer = combineReducers({
    ...platformReducers,
    ...reducers
  });

  return reducer;
};

export default configureReducer;
