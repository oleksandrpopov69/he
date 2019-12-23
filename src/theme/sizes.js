import {Dimensions, Platform} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

const isIOS = Platform.OS === 'ios';

const {width, height} = Dimensions.get('window');

const TAB_BAR_HEIGHT = 50;
const BOTTOM_SPACE = getBottomSpace();
const HEADER_HEIGHT = 64;
const STATUS_BAR_HEIGHT = getStatusBarHeight(true);

const HIT_SLOP = {top: 16, left: 16, right: 16, bottom: 16};

export default {
  BOTTOM_SPACE,
  HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
  FULL_HEADER_HEIGHT: HEADER_HEIGHT + STATUS_BAR_HEIGHT,
  TAB_BAR_HEIGHT,
  FULL_TAB_BAR_HEIGHT: TAB_BAR_HEIGHT + BOTTOM_SPACE,
  HIT_SLOP,
  WINDOW_HEIGHT: height,
  WINDOW_WIDTH: width,
};
