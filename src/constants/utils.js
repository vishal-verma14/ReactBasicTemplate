import {Platform, StatusBar, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = 16 * 3.5 + (StatusHeight || 0);
export const iPhoneX = () =>
  Platform.OS === 'ios' && (height === 812 || width === 812);
