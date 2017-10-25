import React, { Component } from 'react';
import { StatusBar, WebView } from 'react-native';
import common from './common';
import * as themes from '../themes/themes';
import { compose } from 'ramda';
import { connect } from 'react-redux';
import type { State } from '../types';
import { NativeRouter, Route } from 'react-router-native';

import { Box } from '../components';
import Article from '../article/Article';
import Home from '../home/Home';
import background from '../components/particles/background/index.html';

type AppProps = {
  appStarted: boolean
};

const WebBox = props => <Box as={WebView} {...props} />;

const App = ({ appStarted }: AppProps) => {
  if (!appStarted) return null;
  return (
    <Box flex={1}>
      <StatusBar hidden={false} translucent={true} barStyle={'light-content'} />
      <WebBox
        source={background}
        scrollEnabled={false}
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
      />
      <Box position={'absolute'} top={0} bottom={0} left={0} right={0}>
        <Box height={1} backgroundColor={'statusBar'} />
        <NativeRouter>
          <Box flex={1}>
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
          </Box>
        </NativeRouter>
      </Box>
    </Box>
  );
};

export default compose(
  common({ themes }),
  connect(
    (state: State) => ({
      appStarted: state.app.started
    }),
    {}
  )
)(App);
