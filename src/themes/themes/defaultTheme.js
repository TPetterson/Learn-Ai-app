// @flow
import type { Theme } from '../types';
import openColor from '../openColor';
import typography from '../typography';

const theme: Theme = {
  typography: typography({
    fontSize: 12,
    fontSizeScale: 'step3',
    lineHeight: 24
  }),
  colors: {
    // app colors
    menuColor: openColor.gray1,

    primary: openColor.gray9,
    success: openColor.green6,
    warning: openColor.orange6,
    danger: openColor.red6,
    black: '#000',
    white: openColor.white,
    gray: openColor.gray2,
    open: openColor,
    decentWhite: '#f7f5eee8',
    handle: '#00000040',
    statusBar: '#000',

    // dev colors
    transparent: '#00000000',
    dev1: openColor.cyan5,
    dev2: openColor.grape5,
    dev3: openColor.indigo5,
    dev4: openColor.orange5,
    dev5: openColor.red5,
    dev6: openColor.teal5,
    dev7: openColor.violet5,
    dev8: openColor.yellow5,
    dev9: openColor.green5
  },
  states: {
    active: {
      darken: 0.2,
      opacity: 0.7
    },
    disabled: {
      opacity: 0.5
    }
  },
  container: {
    maxWidths: {
      small: 540,
      medium: 720,
      big: 960,
      bigger: 1140
    }
  },
  text: {
    bold: 600,
    fontFamily: 'System'
  },
  block: {
    marginBottom: 1,
    maxWidth: 21
  },
  button: {
    borderRadius: 2
  },
  heading: {
    fontFamily: 'System',
    marginBottom: 1
  },
  paragraph: {
    marginBottom: 1
  }
};

export default theme;
