import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import configureStore from './config/configureStore';
import configureStorage from './config/configureStorage';
import uuid from 'react-native-uuid';
import Root from './app/root';
import { persistStore } from 'redux-persist';

const store = configureStore({
  initialState: {},
  platformDeps: { uuid } //for future features
});

const Application = () => <Root store={store} />;

persistStore(
  store,
  {
    ...configureStorage('Application'),
    storage: AsyncStorage
  },
  () => {
    store.dispatch(({ type: 'APP_STARTED' }: Action));
  }
);

AppRegistry.registerComponent('Application', () => Application);
