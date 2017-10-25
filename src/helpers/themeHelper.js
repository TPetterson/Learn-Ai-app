import * as themes from '../themes/themes';
import type { Theme, State } from '../types';
import { connect } from 'react-redux';

//
// TODO: Fix it - doesn't work
//

const themeHelper = (currentTheme: string) => ({
  compute: (value: number) => themes[currentTheme].typography.rhytm(value)
});

export default connect(
  (state: State) => ({
    currentTheme: state.app.currentTheme
  }),
  {}
)(themeHelper);
