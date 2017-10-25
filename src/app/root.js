import React from 'react';
import { Provider as Redux } from 'react-redux';
import Fela from '../components/FelaProvider';
import configureFela from '../config/configureFela';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import App from './app';

type Props = {
  store: Object
};

class Root extends React.Component {
  props: Props;

  render() {
    const { store } = this.props;
    return (
      <Redux store={store}>
        <Fela
          Button={TouchableOpacity}
          Image={Image}
          Text={Text}
          TextInput={TextInput}
          View={View}
          renderer={configureFela()}>
          <App />
        </Fela>
      </Redux>
    );
  }
}

export default Root;
