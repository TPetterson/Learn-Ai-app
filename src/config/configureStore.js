import { createStore, applyMiddleware, compose } from 'redux';
import configureReducer from './configureReducer';
import { autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

type Options = {
  initialState: Object,
  platformDeps?: Object,
  platformReducers?: Object,
  platformMiddleware?: Array<Function>,
  platformStoreEnhancers?: Array<Function>
};

const configureStore = (options: Options) => {
  const {
    initialState,
    platformDeps = {},
    platformMiddleware = [],
    platformReducers = {},
    platformStoreEnhancers = []
  } = options;

  const reducer = configureReducer(initialState, platformReducers);

  const middleware = [thunk, logger];

  // $FlowFixMe
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate(),
      ...platformStoreEnhancers
    )
  );

  // Enable hot reloading for reducers.
  if (module.hot && typeof module.hot.accept === 'function') {
    module.hot.accept(() => {
      const configureReducer = require('./configureReducer').default;

      store.replaceReducer(configureReducer(platformReducers, initialState));
    });
  }
  return store;
};

export default configureStore;
