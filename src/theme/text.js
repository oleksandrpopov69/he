import {Platform} from 'react-native';
import colors from './colors';

const isIOS = Platform.OS === 'ios';

const fontFamily = Platform.select({
  ios: {
    regular: 'Rubik-Regular',
    bold: 'Rubik-Medium',
  },
  android: {
    regular: 'Rubik Regular',
    bold: 'Rubik Medium',
  },
});

export default {
  b36: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 36,
    color: colors.getColor(color, opacity),
  }),
  b24: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.getColor(color, opacity),
  }),
  b18: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.getColor(color, opacity),
  }),
  b14: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 14,
    color: colors.getColor(color, opacity),
  }),
  b12: (color, opacity) => ({
    fontFamily: fontFamily.bold,
    fontSize: 12,
    color: colors.getColor(color, opacity),
  }),
  r24: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 24,
    color: colors.getColor(color, opacity),
  }),
  r18: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 18,
    color: colors.getColor(color, opacity),
  }),
  r14: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.getColor(color, opacity),
  }),
  r12: (color, opacity) => ({
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.getColor(color, opacity),
  }),
};
