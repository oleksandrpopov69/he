import {Platform} from 'react-native';
import colors from './colors';
import text from './text';
import sizes from './sizes';

const shadows = {
  modal: {
    shadowColor: 'rgba(58, 76, 130, 0.1)',
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowRadius: 28,
    shadowOpacity: 1,

    elevation: 2,
  },
  light: {
    shadowColor: 'rgba(58, 76, 130, 0.2)',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 38,
    shadowOpacity: 1,

    elevation: 2,
  },
  dark: {
    shadowColor: 'rgba(58, 76, 130, 0.07)',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 38,
    shadowOpacity: 1,

    elevation: 4,
  },
};

export default {
  colors: colors.colors,
  getColor: colors.getColor,
  text,
  sizes,
  shadows,
  isIOS: Platform.OS === 'ios',
};
